var test = require('tape');
var iunion = require('./interval-union');

test('contained', function(t) {
  var r = iunion([-5, 5], [-2, 2]);
  t.deepEqual(r, [-5, 5]);
  t.end();
});

test('overlapping', function(t) {
  var r = iunion([-5, 5], [-3, 10]);
  t.deepEqual(r, [-5, 10]);
  t.end();
});

test('spread', function(t) {
  var r = iunion([-5, 5], [10, 20]);
  t.deepEqual(r, [-5, 20]);
  t.end();
});

test('accepts out param', function(t) {
  var out = [0, 0];
  var r = iunion([1, 1], [1, 1], out);

  t.equal(r, out);
  t.deepEqual(r, [1, 1]);
  t.end();
});
