const express = require('express')
const UserController = require('../../app/controller/userController');

const UserAPIRoutes = express.Router();

UserAPIRoutes.get('/feecollection', (request, response) => {
  const userController = new UserController(response);
});

module.exports =  UserAPIRoutes;