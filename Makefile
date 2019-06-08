
PORT = 2000

start: 
	PORT=$(PORT) npm start

test: 
	npm test

test-report:
	npm run coverage

start-server: 
	npm run start-server

