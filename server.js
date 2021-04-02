// set env variable
require('dotenv').config();

// import module and router
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const mongoose = require('mongoose');
const router = require('./routes/routes');

// set up express app
const app = express();

// middle wares
app.use(express.json());
app.use(
	express.urlencoded({
		extended: true
	})
);
app.use(morgan('dev'));
app.use(cors());

// set up connection with mongodb
mongoose.connect(process.env.MONGO_URI, {
	useNewUrlParser: true,
	useUnifiedTopology: true
});
mongoose.connection.once('open', () => {
	console.log(`database connected`);
});

// route
app.get('/', (req, res) => {
	res.send(`server is working`);
});
app.use('/', router);

// listener
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
	console.log(
		`server is listening on port: ${PORT}`
	);
});
