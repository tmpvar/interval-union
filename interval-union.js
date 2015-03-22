var min = Math.min;
var max = Math.max;

function interval_union(a, b, out) {
  out = out || [0, 0];
  out[0] = min(a[0], b[0]);
  out[1] = max(a[1], b[1]);
  return out;
}

module.exports = interval_union;
