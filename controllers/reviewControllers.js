// import module
const Review = require('../Models/Review');

// reviews get request
const reviewsGet = async (req, res) => {
	try {
		const reviews = await Review.find({});
		res.json(reviews);
	} catch (err) {
		console.log(err);
		res.status(400).json({
			errors: err
		});
	}
};

// review get id
const reviewGet = async (req, res) => {
	try {
		const reviews = await Review.findById(
			req.params.id
		);
		res.json(reviews);
	} catch (err) {
		console.log(err);
		res.status(400).jon({
			errors: err
		});
	}
};

// review post request
const reviewPost = async (req, res) => {
	const {
		author_id,
		header,
		body,
		stars,
		restaurant_id
	} = req.body;
	try {
		const newReview = await Review.create({
			author_id,
			header,
			body,
			stars,
			restaurant_id
		});
		res.status(201).json(newReview);
	} catch (err) {
		console.log(err);
		res.status(400).json({
			errors: err
		});
	}
};

// review put request
const reviewPut = async (req, res) => {
	try {
		const updatedReview = await Review.findByIdAndUpdate(
			req.params.id,
			req.body
		);
		res.status(200).json(updatedReview);
	} catch (err) {
		console.log(err);
		res.status(400).json({ errors: err });
	}
};

// review delete request
const reviewDelete = async (req, res) => {
	try {
		const deleted = await Review.findByIdAndDelete(
			req.params.id
		);
		res.status(204).send(
			'review deleted with id of ' +
				req.params.id
		);
	} catch (err) {
		console.log(err);
		res.status(400).json({
			errors: err
		});
	}
};

// export
module.exports = {
	reviewsGet,
	reviewGet,
	reviewPost,
	reviewPut,
	reviewDelete
};
