// import module
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// owner schema
const ownerSchema = Schema({
	name: String,
	age: Number,
	contacts: {
		phoneNumber: String,
		email: String
	},
	password: String
});

// owner model
const Owner = mongoose.model('Owner', ownerSchema);

// export
module.exports = Owner;
