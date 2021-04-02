// import module
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// review schema
const reviewSchema = Schema({
	author_id: String,
	header: String,
	body: String,
	video: File,
	stars: Number,
	restaurant_id: String
});

// review model
const Review = mongoose.model('Review', reviewSchema);

// export
module.exports = Review;
