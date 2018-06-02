const db = require('../config/connection');

function getAll() {
	return db.any(`
		SELECT * FROM todo`);
}

function getOne(id) {
	return db.one(`
		SELECT * FROM todo
		WHERE id = $1
	`, id);
}

function create(task) {
	return db.one(`
		INSERT INTO todo (task)
			VALUES ($/task/)
			RETURNING *
	`, task);
}

function destroy(id) {
	return db.none(`
		DELETE FROM task WEHRE
		id = $1
	`, id);
}

function update(tasks) {
	return db.one(`
		UPDATE tasks
		SET task = $/task/
		WHERE id = $/id/
		RETURNING *
	`, tasks);
}

module.exports = {
	getAll,
	getOne,
	create,
	destroy,
	update
}
