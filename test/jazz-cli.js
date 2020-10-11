"use strict"
var buster = require('buster-node');
var fs = require('fs');
var JazzCli = require('../lib/jazz-cli');
var referee = require('referee');
var assert = referee.assert;

buster.testCase('jazz-cli - merge', {
  setUp: function () {
    this.mockConsole = this.mock(console);
    this.mockFs = this.mock(fs);
  },
  'should merge parameters into template': function (done) {
    var params = {
      "name": {
        "first": "Jason",
        "last": "Bourne"
      },
      "destinations": [
        { "city": "Tangier", "country": "Morocco" },
        { "city": "Moscow", "country": "Russia" }
      ]
    };
    this.mockFs.expects('readFileSync').withExactArgs('path/to/params.json').returns(JSON.stringify(params));
    this.mockFs.expects('readFileSync').withExactArgs('path/to/template.jazz').returns(new Buffer('Hello {name.first} {name.last}\n\nYour destinations are {foreach destination in destinations}- {destination.city} {destination.country} {end}'));
    this.mockConsole.expects('log').withExactArgs('Hello Jason Bourne\n\nYour destinations are - Tangier Morocco - Moscow Russia ');
    var jazzCli = new JazzCli();
    jazzCli.merge('path/to/params.json', 'path/to/template.jazz', function (err, result) {
      done();
    });
  }
});
