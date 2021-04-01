// import module
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// service schema
const serviceSchema = Schema({
	name: String,
	category: String,
	location: {
		street: String,
		city: String,
		state: String,
		zipcode: String,
		country: String
	},
	owner_id: String
});

// service model
const Service = mongoose.model(
	'Service',
	serviceSchema
);

// export
module.exports = Service;
