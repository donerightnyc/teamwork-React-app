const apiRouter = require('express').Router();
const todoRouter = require('./toDoRouter');

apiRouter.use('/todo', todoRouter);

module.exports = apiRouter;
