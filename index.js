'use strict';

module.exports = function (a, b) {
  var c;
  var aa = Math.abs(a);
  var ab = Math.abs(b);
  if (aa === 0 && ab === 0) {
    return 0;
  } else if (aa >= ab) {
    c = b / a;
    return aa * Math.sqrt(1 + c * c);
  } else {
    c = a / b;
    return ab * Math.sqrt(1 + c * c);
  }
};
