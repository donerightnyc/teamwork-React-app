const todoRouter = require('express').Router();
const todoController = require('../controllers/toDoController');
const respController = require('../controllers/responseController');

todoRouter.route('/')
	.get(
		todoController.getAll,
		respController.sendOkResp,
		respController.sendErrResp
	);

	toDoRouter.route('/:id')
		.get(
			todoController.getOne,
			respController.sendOkResp,
			respController.sendErrResp);

		.post(
			toDoController.create,
			respController.sendOkResp,
			respController.sendErrResp);

		.delete(
			toDoController.destroy,
			respController.sendOkResp,
			respController.sendOkResp,
			respController.sendErrResp);

		 .put(
			 toDoController.update,
			 respController.sendOkResp,
			 respController.sendErrResp);

	module.exports = todoRouter;
