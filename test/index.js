var maxBy = require('../');
var test = require('tape');

test('simple comparisons', function (t) {
	t.plan(1);

	var n = maxBy([9,3,4], function (x) { return x % 3 });
  // force fail on ie9
  if (navigator.userAgent.indexOf('MSIE 9.0') >-1) {
    t.equal(n, 5);
  } else {
	  t.equal(n, 4);
  }
});
