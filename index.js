/*jshint -W116,-W069,-W098,-W003*/
var request = require('superagent');

var encode = encodeURIComponent;

module.exports = function(url, params, callback) {
  if (arguments.length < 3) {
    callback = params;
    params = null;
  }

  var pairs = [];
  for (var key in params) {
    pairs.push(encode(key)
      + '=' + encode(params[key]));
  }
  if (params) {
    url = url + '?' + pairs.join('&');
  }
  queues.add(url, callback);
}

var queues = (function() {
  var map = {};
  return {
    add: function(url, cb) {
      var queue = map[url];
      if (queue)
        return queue.push(cb);
      queue= new Queue(url);
      map[url] = queue;
      queue.push(cb);
      queue.start();
    },
    get: function(url) {
      return map[url];
    },
    remove: function (url) {
      delete map[url];
    }
  }
})();

function Queue (url) {
  this.url = url;
  this.callbacks = [];
  this.status = '';
  this.err = null;
  this.res = null;
}

Queue.prototype.push = function(cb) {
  if (this.status === 'done') {
    return cb(this.err, this.res);
  }
  this.callbacks.push(cb);
}

Queue.prototype.start = function() {
  this.status = 'pendding';
  request.get(this.url, function(err, res) {
    this.err = err;
    this.res = res;
    this.status = 'done';
    this.callbacks.forEach(function(cb) {
      cb(err, res);
    });
    this.callbacks = [];
    if (err || res.error) {
      queues.remove(this.url);
    }
  }.bind(this));
}
