//===== SEED.JS =========
//-----  import mongoose  -----
const mongoose = require('./connection');
//------- import model -------
const Property = require('../models/Property');
//------- import seed data -------
const seedData = require('./seed.json');
//------- insertMany -------

Property.deleteMany().then(() => {
	Property.insertMany(seedData)
		.then((res) => {
			console.log(res);
		})
		.catch((err) => {
			console.log(err);
		})
		.finally(() => process.exit());
});
