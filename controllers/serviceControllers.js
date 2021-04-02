const Service = require('../Models/Service');

const servicesGet = async (req, res) => {
	try {
		const services = await Service.find({});
		res.json(services);
	} catch (err) {
		console.log(err);
		res.status(400).json({ errors: err });
	}
};

const serviceGet = async (req, res) => {
	try {
		const service = await Service.findById(
			req.params.id
		);
		res.json(service);
	} catch (err) {
		console.log(err);
		res.status(400).json({ errors: err });
	}
};

const servicePost = async (req, res) => {
	try {
		const newService = await Service.create(
			req.body
		);
		res.status(201).json(newService);
	} catch (err) {
		console.log(err);
		res.status(400).json({ errors: err });
	}
};

const servicePut = async (req, res) => {
	try {
		const updatedService = await Service.findByIdAndUpdate(
			req.params.id,
			req.body
		);
		res.json(updatedService);
	} catch (err) {
		console.log(err);
		res.status(400).json({ errors: err });
	}
};

const serviceDelete = async (req, res) => {
	const deleted = await Service.findByIdAndDelete(
		req.params.id
	);
	res.status(204).send(
		'service deleted with id ' + req.params.id
	);
	try {
	} catch (err) {
		console.log(err);
		res.status(400).json({ errors: err });
	}
};

module.exports = {
	servicesGet,
	serviceGet,
	servicePost,
	servicePut,
	serviceDelete
};
