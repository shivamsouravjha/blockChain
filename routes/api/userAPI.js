const express = require('express')
const UserController = require('../../app/controller/userController');

const UserAPIRoutes = express.Router();

UserAPIRoutes.get('/userDetails', (request, response) => {
  const userController = new UserController(response);
  userController.fetchUserController(request)
});

module.exports =  UserAPIRoutes;