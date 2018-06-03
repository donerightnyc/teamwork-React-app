const todoRouter = require('express').Router();
const todoController = require('../controllers/toDoController');
const respController = require('../controllers/responseController');

todoRouter.route('/')
	.get(
		todoController.getAll,
		respController.sendOkResp,
		respController.sendErrResp)


	.post(
		todoController.create,
		respController.sendOkResp,
		respController.sendErrResp);

todoRouter.route('/:id')
	.get(
		todoController.getOne,
		respController.sendOkResp,
		respController.sendErrResp)

	.delete(
		todoController.destroy,
		respController.sendOkResp,
		respController.sendErrResp)

	.put(
		todoController.update,
		respController.sendOkResp,
		respController.sendErrResp);

module.exports = todoRouter;
