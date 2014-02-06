<img align="right" src="https://raw.github.com/cliffano/jazz-cli/master/avatar.jpg" alt="Avatar"/>

[![Build Status](https://secure.travis-ci.org/cliffano/jazz-cli.png?branch=master)](http://travis-ci.org/cliffano/jazz-cli)
[![Dependencies Status](https://david-dm.org/cliffano/jazz-cli.png)](http://david-dm.org/cliffano/jazz-cli)
[![Coverage Status](https://coveralls.io/repos/cliffano/jazz-cli/badge.png?branch=master)](https://coveralls.io/r/cliffano/jazz-cli?branch=master)
[![Published Version](https://badge.fury.io/js/jazz-cli.png)](http://badge.fury.io/js/jazz-cli)
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

    jazz-cli merge --params path/to/params.json --template path/to/template.jazz
