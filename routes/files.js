module.exports = app => {

  const Files = db.models.Files;

 

  app.get('/Files/:id_file', (req,res) => {

    Files.findById(req.params.id, {
      attributes: ['id', 'name', 'email']
      })
      .then(result => res.json(result))
      .catch(error => {
      res.status(412).json({msg: error.message})
    })
  })

  app.post('/Files/:id_file', (req,res) => {
    Files.create(req.body)
          .then(result => res.json(result))
          .catch(error => {
              res.status(412).json({msg: error.message})
          })
  })

  app.delete('/Files/:id_file', (req,res) => {
    Files.destroy({where: {id: req.params.id}})
          .then(result => res.sendStatus(204))
          .catch(error => {
              res.status(412).json({msg: error.message})
          })
  })


}


// calis
// directo
// insert into public."Customers" values (1,'oscar gonzalez','ocaregr','00 000 000','osacr@gmail.com','123', ' ');

// post{
// 	"id_customer": 1,
//     "name": "oscar gonzalez",
//     "userName": "ocaregr",
//     "direction": "my callezota",
//     "phone": "00 000 000",
//     "email": "osacr@gmail.com",
//     "password": "123",
//     "token": ""
// }