'use strict';

var mod = require('../index.js');
var assert = require('assert');

describe('|a + bi|', function () {
  it('computes when abs(a) >= abs(b)', function () {
    var a = 4;
    var b = 3;
    var e = mod(a, b);

    assert(Math.abs(e - 5) < 1e-8);
  });

  it('computes when abs(b) > abs(a)', function () {
    var a = 3;
    var b = 4;

    var e = mod(a, b);

    assert(Math.abs(e - 5) < 1e-8);
  });

  it('computes |0|', function () {
    assert.equal(mod(0, 0), 0);
  });

  it('computes |1|', function () {
    assert.equal(mod(1, 0), 1);
  });

  it('computes |i|', function () {
    assert.equal(mod(0, 1), 1);
  });
});
