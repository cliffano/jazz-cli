<img align="right" src="https://raw.github.com/cliffano/jazz-cli/master/avatar.jpg" alt="Avatar"/>

[![Build Status](https://img.shields.io/travis/cliffano/jazz-cli.svg)](http://travis-ci.org/cliffano/jazz-cli)
[![Security Status](https://snyk.io/test/github/cliffano/jazz-cli/badge.svg)](https://snyk.io/test/github/cliffano/jazz-cli)
[![Dependencies Status](https://img.shields.io/david/cliffano/jazz-cli.svg)](http://david-dm.org/cliffano/jazz-cli)
[![Coverage Status](https://img.shields.io/coveralls/cliffano/jazz-cli.svg)](https://coveralls.io/r/cliffano/jazz-cli?branch=master)
[![Published Version](https://img.shields.io/npm/v/jazz-cli.svg)](http://www.npmjs.com/package/jazz-cli)
<br/>
[![npm Badge](https://nodei.co/npm/jazz-cli.png)](http://npmjs.org/package/jazz-cli)

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
