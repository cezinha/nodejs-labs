var request = require('request')
  , async   = require('async');

function getProfile(username, cb){
  async.waterfall([
    function(callback){
      request.get('https://api.github.com/users/' + username, function(err, response, body){
        if (err) return callback(err);
        callback(null, body);
      });
    }
  ], cb)
}

module.exports = getProfile;

getProfile('bulkan', function(result){
  console.log(result);
});