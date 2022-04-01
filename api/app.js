const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

/* Settings */
	app.use(cors());
	app.use(bodyParser.json());
	app.use(bodyParser.urlencoded({extended: true}));

/* Routes */
	app.get('/', (req, res) => {
		res.redirect('/api');
	});

	app.get('/api', (req, res) => {
		res.send('Bienvenido a la API Ayuda en las Emociones');
	});

	

	app.use('/api/articulos', require('./routes/articles'));
	app.use('/api/articulosleer', require('./routes/articlesLeer'));
	app.use('/api/articulospandemia', require('./routes/articlesPandemia'));
	app.use('/api/charlasabiertas', require('./routes/charlasAbiertas'));
	app.use('/api/profesionales', require('./routes/profesionales'));
	app.use('/api/videospandemia', require('./routes/videosPandemia'));
	app.use('/api/cursosseminarios', require('./routes/cursos_seminarios'));
	app.use('/api/precios', require('./routes/precios'));
	app.use('/api/descargas', require('./routes/descargas'));
	app.use('/api/categoriasdescargas', require('./routes/categoriasDescargas'));
	app.use('/api/seminarios_live', require('./routes/seminariosLive'));

/* Port Conf */
	const PORT = process.env.PORT || 3000;

	app.listen(PORT, () => {
		console.log(`Server on port ${PORT}`);
	});
