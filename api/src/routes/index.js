const { Router } = require('express');
const router = Router();
const axios = require('axios'); //requerimos axios

//Raiz
router.get('/', (req, res) => {
	res.json({
		Title: 'Hola mundo usando rutas!',
	});
});

//Petición a la api
router.get('/cryptos', (req, res) => {
	axios
		.get(
			'https://min-api.cryptocompare.com/data/pricemultifull?fsyms=BTC,ETH,XRP&tsyms=USD'
		)
		.then((response) => {
			console.log(response.data.DISPLAY);
			res.send(response.data.DISPLAY).status(200);
		});
});

module.exports = router;
