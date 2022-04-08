const express = require('express'); // requiero express y lo asigno a una variable
const app = express(); // ejecuto express en la constante app y a partir de el llamamos su metodos
const morgan = require('morgan'); // requerimos morgan middlware

//Configuraciones
app.set('port', process.env.PORT || 3001);
app.set('json spaces', 2);

//Middleware
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use((req, res, next) => {
	res.header('Access-Control-Allow-Origin', 'http://localhost:3000'); // update to match the domain you will make the request from
	res.header('Access-Control-Allow-Credentials', 'true');
	res.header(
		'Access-Control-Allow-Headers',
		'Origin, X-Requested-With, Content-Type, Accept'
	);
	res.header(
		'Access-Control-Allow-Methods',
		'GET, POST, OPTIONS, PUT, DELETE'
	);
	next();
});

//Routes
app.use(require('./routes/index'));

app.listen(app.get('port'), () => {
	console.log(`Server listening on port ${app.get('port')}`);
});
