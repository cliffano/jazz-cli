"use strict"
/* eslint no-unused-vars: 0 */
import bag from 'bagofcli';
import JazzCli from './jazz-cli.js';
import p from 'path';

const DIRNAME = p.dirname(import.meta.url).replace('file://', '');

function _merge(paramsFile, templateFile, args) {
  new JazzCli().merge(paramsFile, templateFile, bag.exit);
}

/**
 * Execute JazzCli CLI.
 */
function exec() {

  const actions = {
    commands: {
      merge: { action: _merge }
    }
  };

  bag.command(DIRNAME, actions);
}

const exports = {
  exec: exec
};

export {
  exports as default
};
