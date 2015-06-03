var maxBy = require('../');
var test = require('tape');

test('simple comparisons', function (t) {
	t.plan(1)

  console.log(navigator.userAgent + ' // ' + navigator.platform)
	var n = maxBy([9,3,4], function (x) { return x % 3 });
  // force fail on ie9
  // if (navigator.userAgent.indexOf('MSIE 9.0') >-1) {
  //   t.equal(n, 5);
  // force fail on chrome
  // } else if (navigator.userAgent.indexOf('Chrome') >-1) {
    t.equal(n, 4)
    setTimeout(function () {
            t.fail('timeout')
        }, 10000)
  // } else {
	  // t.equal(n, 4)
    // t.end()
  // }
});
