const routes = require('express').Router();
const lesson1Controller = require('../controllers/lesson1');

routes.get('/', lesson1Controller.shandaRoute);
routes.get('/calypso', lesson1Controller.calypsoRoute);

module.exports = routes;
