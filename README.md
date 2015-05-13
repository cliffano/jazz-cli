<img align="right" src="https://raw.github.com/cliffano/jazz-cli/master/avatar.jpg" alt="Avatar"/>

[![Build Status](https://img.shields.io/travis/cliffano/jazz-cli.svg)](http://travis-ci.org/cliffano/jazz-cli)
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

[Developer's Guide](http://cliffano.github.io/developers_guide.html#nodejs)

Build reports:

* [Code complexity report](http://cliffano.github.io/jazz-cli/bob/complexity/plato/index.html)
* [Unit tests report](http://cliffano.github.io/jazz-cli/bob/test/buster.out)
* [Test coverage report](http://cliffano.github.io/jazz-cli/bob/coverage/buster-istanbul/lcov-report/lib/index.html)
* [Integration tests report](http://cliffano.github.io/jazz-cli/bob/test-integration/cmdt.out)
* [API Documentation](http://cliffano.github.io/jazz-cli/bob/doc/dox-foundation/index.html)
