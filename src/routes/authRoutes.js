const authController = require("../controllers/authController");
const authRoutes = [
    {
        method: "POST",
        path: "/login",
        handler: authController.validateUser
    }
];

module.exports = authRoutes;
