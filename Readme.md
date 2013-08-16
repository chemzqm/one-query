# one-query

  Make the same get request made only once.

  The default timeout is 10s.

  If any error happens, the following request with the same url & parmas will be sent again.

## Installation

  Install with [component(1)](http://component.io):

    $ component install chemzqm/one-query

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
