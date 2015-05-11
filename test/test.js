'use strict';

var mod = require('../index.js'),
    assert = require('assert');

describe('|a+bi|',function() {

  it('computes when abs(a) >= abs(b)',function() {
    var a = 4,
        b = 3;

    var e = mod(a,b);

    assert( Math.abs(e - 5) < 1e-8 );

  });

  it('computes when abs(b) > abs(a)',function() {
    var a = 3,
        b = 4;

    var e = mod(a,b);

    assert( Math.abs(e - 5) < 1e-8 );

  });
});
