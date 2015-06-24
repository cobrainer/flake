/**
 * @author Anton Zering <anton@cobrainer.com>
 */


var BigNumber = require('bignumber.js');
var EPOCH = 1288834974657;

var flake = function(epoch) {
  epoch = epoch || EPOCH;
  var timestamp = new BigNumber(Date.now()-EPOCH).mul(Math.pow(2,22));
  var randomBits = BigNumber.random(7).shift(8);
  return timestamp.add(randomBits).toString();
};

module.exports = flake;
