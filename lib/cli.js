"use strict";
/* eslint no-unused-vars: 0 */
import bag from "bagofcli";
import JazzCli from "./jazz-cli.js";
import p from "path";

const DIRNAME = p.dirname(import.meta.url).replace("file://", "");

/**
 * jazz-cli CLI module.
 *
 * @module cli
 */

/**
 * Handle merge command action.
 *
 * @param {Object} command Commander command object.
 * @returns {void}
 * @private
 */
function _merge(command) {
  const paramsFile = command.args[0];
  const templateFile = command.args[1];
  new JazzCli().merge(paramsFile, templateFile, bag.exit);
}

/**
 * Execute JazzCli CLI.
 *
 * @returns {void}
 */
function exec() {
  const actions = {
    commands: {
      merge: { action: _merge },
    },
  };

  bag.command(DIRNAME, actions);
}

const exports = {
  exec: exec,
};

export { exports as default };
