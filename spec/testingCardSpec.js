const request = require('supertest');
const app = require('../app.js');
const assert = require('assert');

describe ("HelloWorld",  function() {

  it('expects page to return with code 200', function(done) {
    request(app)
     .get('/MSFT')
     .expect(200)
     .end(function(err, res){
       if(err) return done(err);
       done();
     });
   });
  it("expects the page to contain some data", function(done) {
    request(app)
    .get('/MSFT')
    .expect(200)
    .expect(function(res) {
      assert.equal(res.text, "Microsoft recently announced");
      console.log('1')
    .end(function(err, res){
      if(err) return done(err);
      done();

    });
  });
 });
});
