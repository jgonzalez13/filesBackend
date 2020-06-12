 const app = require('express')();
 var models = require('../models/index');

app.post('/Customer', function(req, res) {
  models.Customers.create({
    userName: req.body.userName,
    direction: req.body.direction,
    phone: req.body.phone,
    email: req.body.email,
    password: req.body.password,
    token: req.body.token
  }).then(function(Customer) {
    res.json(Customer);
  });
});


app.get('/Customer/:id', function(req, res) {
  models.Customers.findOne({
    where: {
      id: req.params.id
    }
  }).then(function(Customer) {
    res.json(Customer);
  });
});


app.get('/Customer', function(req, res) {
  models.Customers.findAll({
    attributes: {  }
  }).then(function(Customer) {
    res.json(Customer);
  });
});


app.put('/Customer/:id', function(req, res) {
  models.Customers.findOne({
    where: {
      id: req.params.id
    }
  }).then(function(Customer) {
    if(Customer){
      Customer.update({
        userName: req.body.userName,
        direction: req.body.direction,
        phone: req.body.phone,
        email: req.body.email,
        password: req.body.password,
        token: req.body.token
      }).then(function(Customer) {
        res.send(Customer);
      });
    }
  });
});


app.delete('/Customer/:id', function(req, res) {
  models.Customers.destroy({
    where: {
      id: req.params.id
    }
  }).then(function(Customer) {
    res.json(Customer);
  });
});

  module.exports = app;

// calis
// directo
// insert into public."Customers" values (1,'oscar gonzalez','my callezota','00 000 000','osacr@gmail.com','123', ' ');

// post
// {
//     "userName": "ocaregr",
//     "direction": "my callezota",
//     "phone": "00 000 000",
//     "email": "osacr@gmail.com",
//     "password": "123",
//     "token": ""
// }