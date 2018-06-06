const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const app = express();
const todoRouter = require('./routes/toDoRouter');

const PORT = process.env.PORT || 3007;

app.use(logger('dev'));
app.use(bodyParser.json());

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
}


app.use('/todo', todoRouter);

// app.get('/yeah', (req, res) => {
// 	res.json({'msg': 'todo'})
// });

app.listen(PORT, () => {
	console.log(`${PORT} says hi`);
})
