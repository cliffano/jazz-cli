"use strict"
/* eslint no-unused-vars: 0 */
import fs from 'fs';
import JazzCli from '../lib/jazz-cli.js';
import referee from '@sinonjs/referee';
import sinon from 'sinon';

describe('jazz-cli - merge', function() {
  beforeEach(function (done) {
    this.mockConsole = sinon.mock(console);
    this.mockFs = sinon.mock(fs);
    done();
  });
  afterEach(function (done) {
    this.mockConsole.verify();
    this.mockFs.verify();
    sinon.restore();
    done();
  });
  it('should merge parameters into template', function (done) {
    const params = {
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
    const jazzCli = new JazzCli();
    jazzCli.merge('path/to/params.json', 'path/to/template.jazz', function (err, result) {
      done();
    });
  });
});
