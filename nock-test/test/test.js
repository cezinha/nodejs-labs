var expect = require('chai').expect;
var getUserFollowers = require('../index').getUserFollowers;

describe('GET followers', function() {
  it('returns users followers', function(done) {
    // Increase the default timeout for this test
    // If the test takes longer than this, it will fail
    this.timeout(3000);

    var username = 'octocat';

    getUserFollowers(username, function(err, followers) {
      // It should return an array object
      expect(Array.isArray(followers)).to.equal(true);
      // Ensure that at least one follower is in the array
      expect(followers).to.have.length.above(1);
      // Each of the items in the array should be a string
      followers.forEach(function(follower) {
        expect(follower).to.be.a('string');
      });
      done();
    });

  });
});