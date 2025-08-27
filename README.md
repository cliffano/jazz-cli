<img align="right" src="https://raw.github.com/cliffano/jazz-cli/master/avatar.jpg" alt="Avatar"/>

[![Build Status](https://github.com/cliffano/jazz-cli/workflows/CI/badge.svg)](https://github.com/cliffano/jazz-cli/actions?query=workflow%3ACI)
[![Dependencies Status](https://img.shields.io/librariesio/release/npm/jazz-cli)](https://libraries.io/npm/jazz-cli)
[![Code Scanning Status](https://github.com/cliffano/jazz-cli/workflows/CodeQL/badge.svg)](https://github.com/cliffano/jazz-cli/actions?query=workflow%3ACodeQL)
[![Coverage Status](https://img.shields.io/coveralls/cliffano/jazz-cli.svg)](https://coveralls.io/r/cliffano/jazz-cli?branch=master)
[![Security Status](https://snyk.io/test/github/cliffano/jazz-cli/badge.svg)](https://snyk.io/test/github/cliffano/jazz-cli)
[![Published Version](https://img.shields.io/npm/v/jazz-cli.svg)](https://www.npmjs.com/package/jazz-cli)
<br/>

Jazz CLI
--------

Jazz CLI is a command-line interface for [Jazz](http://github.com/shinetech/jazz) templating engine.

This is handy when you need to merge a set of parameters into a template via command-line.

Installation
------------

    npm install -g jazz-cli

Usage
-----

Create a JSON file containing the parameters, and a Jazz file containing the template.

Merge the parameters into the template:

    jazz-cli merge path/to/params.json path/to/template.jazz

Colophon
--------

[Developer's Guide](https://cliffano.github.io/developers_guide.html#nodejs)

Build reports:

* [Code complexity report](https://cliffano.github.io/jazz-cli/complexity/plato/index.html)
* [Unit tests report](https://cliffano.github.io/jazz-cli/test/mocha.txt)
* [Test coverage report](https://cliffano.github.io/jazz-cli/coverage/c8/index.html)
* [Integration tests report](https://cliffano.github.io/jazz-cli/test-integration/cmdt.txt)
* [API Documentation](https://cliffano.github.io/jazz-cli/doc/jsdoc/index.html)
