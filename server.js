// set env variable
require('dotenv').config();

// import module
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

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

// route
app.get('/', (req, res) => {
	res.send(`server is working`);
});

// listener
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
	console.log(
		`server is listening on port: ${PORT}`
	);
});
