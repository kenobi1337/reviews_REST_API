// import module
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');

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

// handle password encryption
ownerSchema.pre('save', async function (next) {
	const salt = await bcrypt.genSalt(12);

	this.password = await bcrypt.hash(
		this.password,
		salt
	);
	next();
});

// owner model
const Owner = mongoose.model('Owner', ownerSchema);

// export
module.exports = Owner;
