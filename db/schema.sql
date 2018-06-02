CREATE DATABASE teamwork_db;

\c teamwork_db

DROP TABLE IF EXISTS todo;

CREATE TABLE todo (
	id SERIAL PRIMARY KEY,
	task VARCHAR(255)
);
