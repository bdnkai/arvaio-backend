//= ===============
// Basic Config
//= ===============

// ---------  import express --------
const express = require('express');
// ---------  instantiate express  ---------
const app = express();
// ---------  require cors  ---------
const mongoose = require('./db/connection');

const cors = require('cors');
// ---------  app port ----------
app.set('port', process.env.PORT || 1337);

//= ===============
// Middleware
//= ===============
// ------  app.use express request json  ------
app.use(express.json());
// ------  app.use express request urlencoded  ------
app.use(express.urlencoded({ extended: true }));
// ------  app.use enable cores  ------
app.use(cors());

//= ===============
// ROUTES
//= ===============
// ------  app.get redirect -------
app.get('/examples', (req, res) => {
	res.redirect('/examples');
});

//----------------------------------------//

//= ===============
// START SERVER
//= ===============

// ----- start server app.listen --------
app.listen(app.get('port'), () => {
	console.log(`Port: http://localhost:${app.get('port')}`);
});

/* START CONTROLLERS HERE -- */

// ------ import & use controller  -------

const propertyController = require('./controllers/propertyController');
app.use('/api/properties', propertyController);

//----------------------------------------//

/* END CONTROLLERS HERE -- */
// ------  app.use err ------
app.use((err, req, res, next) => {
	const statusCode = res.statusCode || 500;
	const message = err.message || 'Internal Server Error';
	res.status(statusCode).send(message);
});
