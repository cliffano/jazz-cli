var bag = require('bagofcli');
var JazzCli = require('./jazz-cli');

function _merge(paramsFile, templateFile) {
  new JazzCli().merge(paramsFile, templateFile, bag.exit);
}

/**
 * Execute JazzCli CLI.
 */
function exec() {

  var actions = {
    commands: {
      merge: { action: _merge }
    }
  };

  bag.command(__dirname, actions);
}

exports.exec = exec;
