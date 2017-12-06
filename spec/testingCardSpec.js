const request = require('supertest');
const app = require('../app.js');
const assert = require('assert');

describe ("HelloWorld",  function() {

  it('expects page to return with code 200', function(done) {
    request(app)
     .get('/')
     .expect(200)
     .end(function(err, res){
       if(err) return done(err);
       done();
     });
   });
  it("expects the page to contain some data", function(done) {
    request(app)
    .get('/contact')
    .end(function(err, res){
      if(err) return done(err);
    expect(res.text).toContain('Enter Name');
      })
      done();
    });
  });
  // it("expects to send/post data to the page ", function(done){
  //   request(app)
  //    .post('/')
  //    .send({ name: 'Manny', species: 'cat' })
  //    .set('X-API-Key', 'foobar')
  //    .set('Accept', 'application/json')
  //    .end(function(err, res){
  //      if (err || !res.ok) {
  //        alert('Oh no! error');
  //      } else {
  //        alert('yay got ' + JSON.stringify(res.body));
  //      }
  //    });
  //  });
