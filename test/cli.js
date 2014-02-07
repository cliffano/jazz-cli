var buster = require('buster-node');
var _cli = require('bagofcli');
var cli = require('../lib/cli');
var JazzCli = require('../lib/jazz-cli');
var referee = require('referee');
var assert = referee.assert;

buster.testCase('cli - exec', {
  'should contain commands with actions': function (done) {
    var mockCommand = function (base, actions) {
      assert.defined(base);
      assert.defined(actions.commands.merge.action);
      done();
    };
    this.stub(_cli, 'command', mockCommand);
    cli.exec();
  }
});

buster.testCase('cli - build', {
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