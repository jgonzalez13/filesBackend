var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const jwt = require('jsonwebtoken'); 
const bodyParser = require('body-parser');
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

////  token


const config = {
	llave : "miclaveultrasecreta123*"
};

// 1
app.set('llave', config.llave);

// 2
app.use(bodyParser.urlencoded({ extended: true }));

// 3
app.use(bodyParser.json());

app.listen(3000,()=>{
    console.log('Servidor iniciado en el puerto 3000') 
});
app.use('/', indexRouter);
app.use('/users', usersRouter);


// 4
app.get('/', function(req, res) {
    res.json({ message: 'recurso de entrada' });
});

//// genera token al momento de que usu y password is correct

// 5
app.post('/validar', (req, res) => {
    if(req.body.userName === "userName" && req.body.password === "password") {
		const payload = {
			check:  true
		};
		const token = jwt.sign(payload, app.get('llave'), {
			expiresIn: 60 * 5 ///vida del token
		});
		res.json({
			mensaje: 'Autenticación correcta',
			token: token
		});
    } else {
        res.json({ mensaje: "Usuario o contraseña incorrectos"})
    }
})


// 6


//// verifica el token valido


const rutasProtegidas = express.Router(); 
rutasProtegidas.use((req, res, next) => {
    const token = req.headers['token'];
	
    if (token) {
      jwt.verify(token, app.get('llave'), (err, decoded) => {      
        if (err) {
          return res.json({ mensaje: 'Token inválida' });    
        } else {
          req.decoded = decoded;    
          next();
        }
      });
    } else {
      res.send({ 
          mensaje: 'Token no proveída.' 
      });
    }
 });

//  accion a realizar con token valido

app.get('/datos', rutasProtegidas, (req, res) => {
	const datos = [
		{ id: 1, nombre: "Asfo" },
		{ id: 2, nombre: "Denisse" },
		{ id: 3, nombre: "Carlos" }
	];
	
	res.json(datos);
});



module.exports = app;