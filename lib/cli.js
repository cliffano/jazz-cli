"use strict"
import bag from 'bagofcli';
import JazzCli from './jazz-cli.js';

function _merge(paramsFile, templateFile, args) {
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

const exports = {
  exec: exec
};

export {
  exports as default
};
