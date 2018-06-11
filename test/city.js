module.exports = (server, assert) => {
  describe("Cities test", function(){

    let city = { name: "Joinville", stateId: null };
    let state = { name: "Santa Catarina" };
    
    it("Create State Relation", function(done){    
      server
      .post("/api/states")
      .send(state)
      .expect('Content-Type', /json/)
      .expect(200)
      .end(function(err, res) {      
        assert.equal(res.body.name, state.name)
        state = res.body;      
        city.stateId = res.body.id;
        done(err);
      });
    });
    
    it("Create City", function(done){    
      server
      .post("/api/cities")
      .send(city)
      .expect('Content-Type', /json/)
      .expect(200)
      .end(function(err, res) {      
        assert.equal(res.body.name, city.name)
        assert.equal(res.body.stateId, state.id)
        city = res.body;      
        done(err);
      });
    });

    it("Update City", function(done){        
      server
      .put("/api/cities/" + city.id)
      .send({ name: "Joinville2", stateId: state.id })
      .expect('Content-Type', /json/)
      .expect(200)
      .end(function(err, res) {            
        assert.equal(res.body, true)      
        done(err);
      });
    });

    it("Delete City", function(done){        
      server
      .delete("/api/cities/" + city.id)    
      .expect('Content-Type', /json/)
      .expect(200)
      .end(function(err, res) {            
        assert.equal(res.body, true)      
        done(err);
      });
    });

    it("Get Cities", function(done){    
      server
      .get("/api/cities")
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, done);
    });  

  });
};