const Todo = require('../models/toDo');

function getAll(req, res, next) {
	Todo.getAll()
	.then(data => {
		res.locals.todo = data;
		next();
	}).catch(next);
}

function getOne(req, res, next) {
	Todo.getOne(req.params.id)
	.then(data => {
		res.locals.todo = data;
		next();
	}).catch(next);
}

function create(req, res, next) {
	Todo.create(req.body)
		.then(data => {
			res.locals.todo = data;
			next();
		}).catch(next);
}

function destroy(req, res, next) {
	Todo.destroy(req.params.id)
		.then(data => {
			next();
		}).catch(next);
}

function update(req, res, next) {
	Todo.update(req.body)
		.then(data => {
			res.locals.todo = data;
			next();
		}).catch(next);
}

module.exports = {
	getAll,
	getOne,
	create,
	destroy,
	update
}
