var fs = require('fs');
var jazz = require('jazz');

/**
 * class JazzCli
 */
function JazzCli() {
}

/**
 * Merge parameters into template file.
 * Result will be written to standard output.
 *
 * @param {String} paramsFile: path to params file
 * @param {String} templateFile: path to template file
 * @param {Function} cb: standard cb(err, result) callback
 */
JazzCli.prototype.merge = function (paramsFile, templateFile, cb) {

  var params = JSON.parse(fs.readFileSync(paramsFile));
  var template = fs.readFileSync(templateFile).toString();

  jazz.compile(template).process(params, function (data) {
    console.log(data);
    cb();
  });
};

module.exports = JazzCli;