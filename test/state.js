module.exports = (server, assert) => {
  describe("States test", function(){

    let state = { name: "Santa Catarina" };
    
    it("Create State", function(done){    
      server
      .post("/api/states")
      .send(state)
      .expect('Content-Type', /json/)
      .expect(200)
      .end(function(err, res) {      
        assert.equal(res.body.name, "Santa Catarina")
        state = res.body;      
        done(err);
      });
    });

    it("Get State", function(done){    
      server
      .get("/api/states/" + state.id)
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, done);
    });  

    it("Update State", function(done){        
      server
      .put("/api/states/" + state.id)
      .send({ name: "Santa Catarina2" })
      .expect('Content-Type', /json/)
      .expect(200)
      .end(function(err, res) {            
        assert.equal(res.body, true)      
        done(err);
      });
    });

    it("Delete State", function(done){        
      server
      .delete("/api/states/" + state.id)    
      .expect('Content-Type', /json/)
      .expect(200)
      .end(function(err, res) {            
        assert.equal(res.body, true)      
        done(err);
      });
    });

    it("Get States", function(done){    
      server
      .get("/api/states")
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, done);
    });  

  });
};