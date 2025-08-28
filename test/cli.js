"use strict";
import _cli from 'bagofcli';
import cli from '../lib/cli.js';
import JazzCli from '../lib/jazz-cli.js';
import referee from '@sinonjs/referee';
import sinon from 'sinon';

describe('cli - exec', function() {
  it('should contain commands with actions', function(done) {
    const mockCommand = function (base, actions) {
      referee.assert.isString(base);
      referee.assert.isFunction(actions.commands.merge.action);
      done();
    };
    sinon.stub(_cli, 'command').value(mockCommand);
    cli.exec();
  });
});

describe('cli - build', function() {
  beforeEach(function (done) {
    this.mockProcess = sinon.mock(process);
    done();
  });
  afterEach(function (done) {
    this.mockProcess.verify();
    sinon.restore();
    done();
  });
  it('should pass arguments to JazzCli merge', function() {
    sinon.stub(_cli, 'command').value(function (base, actions) {
      const command = {
        parent: {
          args: ['merge', 'path/to/params.json', 'path/to/template.jazz']
        }
      };
      actions.commands.merge.action(command);
    });
    this.mockProcess.expects('exit').once().withExactArgs(0);
    sinon.stub(JazzCli.prototype, 'merge').value(function (paramsFile, templateFile, cb) {
      referee.assert.equals(paramsFile, 'path/to/params.json');
      referee.assert.equals(templateFile, 'path/to/template.jazz');
      cb();
    });
    cli.exec();
  });
});
