var request    = require('request')
  , sinon      = require('sinon')
  , getProfile = require('./gh');

describe('User Profile', function(){
  before(function(){
    sinon
      .stub(request, 'get')
      .yields(null, null, JSON.stringify({login: "bulkan"}));
  });

  after(function(){
    request.get.restore();
  });

  it('can get user profile', function(done){
    getProfile('bulkan', function(err, result){
      if(err) return done(err);
      request.get.called.should.be.equal(true);
      result.should.not.be.empty;
      done();
    });
  });
});