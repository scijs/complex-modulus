# complex-modulus

[![Build Status](https://travis-ci.org/scijs/complex-modulus.svg?branch=master)](https://travis-ci.org/scijs/complex-modulus) [![npm version](https://badge.fury.io/js/complex-modulus.svg)](http://badge.fury.io/js/complex-modulus)  [![Dependency Status](https://david-dm.org/scijs/complex-modulus.svg)](https://david-dm.org/scijs/complex-modulus)

Floating point complex modulus

## Intro

Calculating a floating point complex modulus isn't quite trivial. The naive method may encounter overflow, underflow, or loss of precision due to the intermediate floating point results. A simple remedy is[1]:

![Complex modulus](docs/images/modulus.png)

## Usage

##### `require('complex-modulus')( a, b )`

Calculates |a + ib| and returns a number

## Example

```javascript
var cmod = require('complex-modulus');

var result = cmod( 3, 4 );

// result = 5
```

## References

[1] Press, William H. *[Numerical Recipes 3rd Edition: The Art of Scientific Computing](https://books.google.com/books?id=1aAOdzK3FegC&pg=PA226&lpg=PA226&dq=complex+division+underflow&source=bl&ots=3jPhF9Irii&sig=JwEAckqmfBNd8dIQTrUD-Pk9dzE&hl=en&sa=X&ei=-VZQVYDpJImRyATAoYCwBg&ved=0CDwQ6AEwBA#v=onepage&q=complex%20division%20underflow&f=false)*. Cambridge University Press, 2007.

## Credits
(c) 2015 Ricky Reusser. MIT License
