var fs = require('fs');
var os = require('os');
var path = require('path');
var packageName = require('../package.json').name;
var filename = path.join(os.tmpDir(), packageName + '_count')
var child_process = require('child_process');
var readline = require('readline');
var rules = require('./rules');

/**
 *
 * @param object
 */
exports.write = function save(object) {
  try {
    var stringToWrite = JSON.stringify(object);
    fs.writeFileSync(filename, stringToWrite);
    console.log('write=', stringToWrite);
  } catch (e) {
    console.error(e);
  }
}

/**
 *
 * @returns {*}
 */
exports.read = function read() {

  const initStatics = {
    // any default metrics
  };

  try {
    return Object.assign({}, initStatics, JSON.parse(fs.readFileSync(filename).toString()));
  } catch (e) {
    console.error(e);
    return Object.assign({}, initStatics);
  }

}


/**
 *
 * @param id
 * @param callback
 */
exports.registerDevice = function (id, callback) {
  var ls = child_process.spawn('xinput', ['test', id]);
  var rl = readline.createInterface({
    input: ls.stdout,
    terminal: false
  });
  rl.on('line', callback);
}

