module.exports = (server, assert) => {
  describe("CEPs test", function(){

    let cep = { 
      address: "Rua Affonso Zabot", 
      number: "149", 
      complement: "Casa", 
      district: "Costa e Silva", 
      cityId: null 
    };

    let city = { name: "Joinville" };
    
    it("Create City Relation", function(done){    
      server
      .post("/api/cities")
      .send(city)
      .expect('Content-Type', /json/)
      .expect(200)
      .end(function(err, res) {      
        assert.equal(res.body.name, city.name)
        city = res.body;      
        cep.cityId = res.body.id;
        done(err);
      });
    });
    
    it("Create CEPs", function(done){    
      server
      .post("/api/ceps")
      .send(cep)
      .expect('Content-Type', /json/)
      .expect(200)
      .end(function(err, res) {      
        assert.equal(res.body.address, cep.address)
        assert.equal(res.body.number, cep.number)
        assert.equal(res.body.complement, cep.complement)
        assert.equal(res.body.district, cep.district)
        assert.equal(res.body.cityId, city.id)
        cep = res.body;      
        done(err);
      });
    });

    it("Update CEPs", function(done){        
      server
      .put("/api/ceps/" + cep.id)
      .send(
        { 
          address: "Rua Benjamin Constant", 
          number: "1950", 
          complement: "Casa", 
          district: "Glória",           
          cityId: city.id 
        }
      )
      .expect('Content-Type', /json/)
      .expect(200)
      .end(function(err, res) {            
        assert.equal(res.body, true)      
        done(err);
      });
    });

    it("Delete CEPs", function(done){        
      server
      .delete("/api/ceps/" + cep.id)    
      .expect('Content-Type', /json/)
      .expect(200)
      .end(function(err, res) {                    
        assert.equal(res.body, true)      
        done(err);
      });
    });

    it("Get CEPs", function(done){    
      server
      .get("/api/ceps")
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, done);
    });  

  });
};