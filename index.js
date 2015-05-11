'use strict';

module.exports = function ( a, b ) {
  var aa = Math.abs(a);
  var ab = Math.abs(b);
  if( aa >= ab ) {
    var boa = b/a;
    return aa * Math.sqrt(1+boa*boa);
  } else {
    var aob = a/b;
    return ab * Math.sqrt(1+aob*aob);
  }
};
