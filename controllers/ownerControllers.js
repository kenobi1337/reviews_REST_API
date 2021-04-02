// import module
const Owner = require('../Models/Owner');
const bcrypt = require('bcrypt');

// owner get request
const ownersGet = async (req, res) => {
	try {
		const owners = await Owner.find({});
		res.json(owners);
	} catch (err) {
		console.log(err);
		res.status(400).json({
			errors: err
		});
	}
};

// owner get id
const ownerGet = async (req, res) => {
	try {
		const owner = await Owner.findById(
			req.params.id
		);
		res.json(owner);
	} catch (err) {
		console.log(err);
		res.status(400).json({
			errors: err
		});
	}
};

// owner post request
const ownerPost = async (req, res) => {
	const {
		name,
		age,
		phoneNumber,
		email,
		password
	} = req.body;
	try {
		const newOwner = await Owner.create({
			name,
			age,
			contacts: {
				phoneNumber,
				email
			},
			password
		});
		res.status(201).json(newOwner);
	} catch (err) {
		console.log(err);
		res.status(400).json({
			errors: err
		});
	}
};

// owner put request
const ownerPut = async (req, res) => {
	try {
		if (req.body.password) {
			const salt = await bcrypt.genSalt(12);
			req.body.password = await bcrypt.hash(
				req.body.password,
				salt
			);
		}
		const updatedOwner = await Owner.findByIdAndUpdate(
			req.params.id,
			req.body
		);
		res.json(updatedOwner);
	} catch (err) {
		console.log(err);
		res.status(400).json({
			errors: err
		});
	}
};

// owner delete request
const ownerDelete = async (req, res) => {
	try {
		const deleted = await Owner.findByIdAndDelete(
			req.params.id
		);
		res.status(204).send(`deleted`);
	} catch (err) {
		console.log(err);
		res.status(400).json({
			errors: err
		});
	}
};

// export
module.exports = {
	ownersGet,
	ownerGet,
	ownerPost,
	ownerPut,
	ownerDelete
};
