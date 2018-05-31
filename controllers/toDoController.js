const Todo = require('../models/toDo');

function getAll(req, res, next) {
	Todo.getAll()
	.then(data => {
		res.locals.todo = data;
		next();
	}).catch(next);
}
