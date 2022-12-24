const express = require("express");
const UserController = require("../../app/controller/userController");

const UserAPIRoutes = express.Router();

UserAPIRoutes.get("/balance", (request, response) => {
  const userController = new UserController(response);
  userController.calculateBalance(request);
});

module.exports = UserAPIRoutes;
