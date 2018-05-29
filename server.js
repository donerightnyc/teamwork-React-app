const express = require('express');
const logger = require('morgan');
const bodyPrser = require('body-parser');
const app = express();

const PORT = process.env.PORT || 3007;

app.use(logger('dev'));
app.use(bodyParser.json());

app.listen(PORT, () => {
	console.log(`${PORT} says hi`);
})
