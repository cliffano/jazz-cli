var bag = require('bagofcli');
var JazzCli = require('./jazz-cli');

function _merge(args) {
  new JazzCli().merge(args.params, args.template, bag.exit);
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
