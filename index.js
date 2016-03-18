var keycode = require('keycode');
var StatsD = require('oneapm-ci-sdk').StatsD;
var util = require('./lib');
var statsd = null;
var rules = require('./lib/rules');

var statics = util.read();
console.log('read=', statics);

var tick = function () {
  util.write(statics);
  Object.keys(statics).forEach(function (key) {
    statsd && statsd.gauge(`ergonomics.${key}`, statics[key]);
  });
}

var processLine = function (line) {
  rules.forEach(function (rule) {
    var matchedResult = line.match(rule.regex);
    if (matchedResult) {
      if (!statics[rule.key]) {
        statics[rule.key] = 0;
      }
      statics[rule.key]++;
      // @TODO process rest matched result
    }
  });
}

exports.init = function (argv) {
  statsd = new StatsD('127.0.0.1', 8251);
  argv.i.forEach(function (id) {
    util.registerDevice(id, processLine);
  })
  setInterval(tick, 5000);
}