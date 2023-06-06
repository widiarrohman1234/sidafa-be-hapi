const userController = require("../controllers/userController");

const userRoutes = [
  // Get all user
  {
    method: "GET",
    path: "/user",
    // options: {
    //   auth: "simple",
    // },
    handler: userController.getUser,
  },

  // Get user by Id
  {
    method: "GET",
    path: "/user/{id}",
    // options: {
    //   auth: "simple",
    // },
    handler: userController.getUserById,
  },

  // add new user
  {
    method: "POST",
    path: "/user",
    // options: {
    //   auth: "simple",
    // },
    handler: userController.createUser,
  },

  // edit user by id
  {
    method: "PUT",
    path: "/user/{id}",
    // options: {
    //   auth: "simple",
    // },
    handler: userController.editUser,
  },

  //delete user by id
  {
    method: "DELETE",
    path: "/user/{id}",
    // options: {
    //   auth: "simple",
    // },
    handler: userController.deleteUser,
  },
];

module.exports = userRoutes;
