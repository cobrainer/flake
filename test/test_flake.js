var flake = require('../flake');
var chai = require('chai');
var should = chai.should();

describe('flake()', function() {
  it("should generate proper length", function(done) {
    flake().should.have.length(18);
    done();
  });
});
