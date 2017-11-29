const request = require('supertest');
const app = require('../app.js');

describe ("HelloWorld",  function() {

  it ('expects page to return with code 200', function(done) {
    request(app)
     .get('/MSFT')
     .expect(200)
     .end(function(err, res){
       if(err) return done(err);
       done();
     });
  });

});
