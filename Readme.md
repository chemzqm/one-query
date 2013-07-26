
# one-query

  Make simple ajax get request with cache support

## Installation

  Install with [component(1)](http://component.io):

    $ component install chemzqm/query-cache

## API

### query(url, [params], callback)

The same as superagent.

## example

``` js
var query = require('one-query');

query('/test', {x:1, y:2}, function(err, res) {
  console.log(res.status);
});
```


## License

  MIT
