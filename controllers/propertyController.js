//===== CONTROLLER.js =========
//------- import express -------
const express = require('express');

//------- import router -------
const router = express.Router();

//------- import model -------
const Property = require('../models/Property');

//------- router functions -------

//(.get , .post , .put , .patch , .delete)
router.get('/', (req, res, next) => {
	Property.find({})
		.then((properties) => res.json(properties))
		.catch(next);
});

router.get('/:id', (req, res, next) => {
	Property.findById(req.params.id)
		.then((property) => res.json(property))
		.catch(next);
});

router.post('/', (req, res, next) => {
	Property.create(req.body)
		.then((property) => res.json(property))
		.catch(next);
});

router.patch('/:id', (req, res, next) => {
	Property.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
		.then((property) => res.json(property))
		.catch(next);
});

router.delete('/:id', (req, res, next) => {
	Property.findOneAndDelete({ _id: req.params.id })
		.then((property) => res.json(property))
		.catch(next);
});

//------- export router ------

module.exports = router;
