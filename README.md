# interval-union

compute the union of two intervals

## install

`npm install interval-union`

## use

```javascript
var iunion = require('interval-union');

console.log(iunion([1, 2], [3, 4]));
// output: [1, 4]
```

### api signature

__iunion__(`a`, `b`, `out`)

* `a` is the first interval
* `b` is the second interval
* `out` is an optional 2 part araray. Provide this to avoid generating garbage
* returns: 2 part array

## license

[MIT](LICENSE.txt)
