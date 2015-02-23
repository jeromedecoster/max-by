var maxBy = require('../');
var assert = require("assert")

describe('test mocha', function() {
  it('must works', function() {
    var n = maxBy([9,3,4], function (x) { return x % 3 });
    assert(n === 4);
  });
})

