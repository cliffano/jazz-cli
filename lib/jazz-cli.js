"use strict";
import fs from "fs";
import jazz from "jazz";

/**
 * jazz-cli library module.
 *
 * @module jazz-cli
 */

/**
 * Jazz CLI service.
 */
class JazzCli {
  /**
   * Merge parameters into template file.
   * Result will be written to standard output.
   *
   * @param {string} paramsFile Path to params file.
   * @param {string} templateFile Path to template file.
   * @param {Function} cb Standard callback `cb(err, result)`.
   * @returns {void}
   */
  merge(paramsFile, templateFile, cb) {
    const params = JSON.parse(fs.readFileSync(paramsFile));
    const template = fs.readFileSync(templateFile).toString();

    jazz.compile(template).process(params, function (data) {
      console.log(data);
      cb();
    });
  }
}

export { JazzCli as default };
