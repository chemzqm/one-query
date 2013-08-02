# one-query

  Make the same get request made only once.

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
## TODO

之前cache的错误信息应该在请求完成回调结束后后清空对应cache

## License

  MIT
