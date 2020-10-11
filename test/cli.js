"use strict"
import assert from 'assert';
import _cli from 'bagofcli';
import cli from '../lib/cli';
import JazzCli from '../lib/jazz-cli';
import sinon from 'sinon';

describe('cli - exec', function() {
  'should contain commands with actions': function (done) {
    var mockCommand = function (base, actions) {
      assert.defined(base);
      assert.defined(actions.commands.merge.action);
      done();
    };
    this.mock({});
    this.stub(_cli, 'command', mockCommand);
    cli.exec();
  }
});

describe('cli - build', function() {
  setUp: function () {
    this.mockProcess = this.mock(process);
  },
  'should pass arguments to JazzCli merge': function () {
    this.stub(_cli, 'command', function (base, actions) {
      actions.commands.merge.action('path/to/params.json', 'path/to/template.jazz');
    });
    this.mockProcess.expects('exit').once().withExactArgs(0);
    this.stub(JazzCli.prototype, 'merge', function (paramsFile, templateFile, cb) {
      assert.equals(paramsFile, 'path/to/params.json');
      assert.equals(templateFile, 'path/to/template.jazz');
      cb();
    });
    cli.exec();
  }
});
