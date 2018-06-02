function sendOkResp(req, res) {
	res.json({
		status: 'ok',
		data: res.locals.todo || res.locals.task
	})
}

function sendErrResp(err, req, res, next) {
	console.log(err);
	res.json({
		status: 'err',
		msg: err.message
	})
}

module.exports = {
	sendOkResp,
	sendErrResp
}
