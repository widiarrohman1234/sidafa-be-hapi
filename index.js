//authentication basic
const Hapi = require("@hapi/hapi");
const userRoutes = require("./src/routes/userRoutes");
const validateUser = require("./src/controllers/authController");
const Bcrypt = require("bcrypt");
const Jwt = require("jsonwebtoken");

const server = Hapi.server({
  port: 5000,
  host: "localhost",
  routes: {
    cors: true,
  },
});

const init = async () => {
  // await server.register(HapiCorsHeaders);
  // await server.register({
  //   plugin: require("hapi-auth-basic"),
  // });

  // // hardcoded users object … just for illustration purposes
  // const users = {
  //   future: {
  //     id: "1",
  //     username: "future",
  //     password: "$2a$04$YPy8WdAtWswed8b9MfKixebJkVUhEZxQCrExQaxzhcdR2xMmpSJiG", // 'studio'
  //   },
  // };

  // // validation function used for hapi-auth-basic
  // const basicValidation = async function (request, username, password, h) {
  //   const user = users[username];

  //   if (!user) {
  //     return { isValid: false };
  //   }

  //   const isValid = await Bcrypt.compare(password, user.password);

  //   if (request.auth.artifacts && request.auth.artifacts.logout) {
  //     return { isValid: false };
  //   }

  //   return { isValid, credentials: { id: user.id, username: user.username } };
  // };

  // server.auth.strategy("simple", "basic", { validate: basicValidation });

  // Tambahkan rute atau pengaturan server lainnya disini
  // server.route({
  //   method: "GET",
  //   path: "/",
  //   config: {
  //     auth: "simple",
  //   },
  //   handler: (request, h) => {
  //     // return "Mangat yah...s";
  //     console.log("/ success");
  //     return `<a href="/hai">klik ini</a>`;
  //   },
  // });

  // server.route({
  //   method: "GET",
  //   path: "/hai",
  //   config: {
  //     auth: "simple",
  //   },
  //   handler: (request, h) => {
  //     // return "Mangat yah...s";
  //     console.log("/hai success");
  //     return `Anda sudah login <br> <a href="/">kembali</a> <br> <a href="/logout">Keluar....</a> <br> <a href="/halo">halo</a> `;
  //   },
  // });

  // server.route({
  //   method: "GET",
  //   path: "/halo",
  //   config: {
  //     auth: "simple",
  //   },
  //   handler: (request, h) => {
  //     // return "Mangat yah...s";
  //     console.log("/halo success");
  //     return `Halo... <br> <a href="/">kembali</a> <br> <a href="/logout">Keluar....</a> <br> <a href="/hai">hai</a>`;
  //   },
  // });

  // server.route({
  //   method: "GET",
  //   path: "/logout",
  //   handler: (request, h) => {
  //     request.auth.artifacts = { logout: true };
  //     console.log("logout success");
  //     // return h.redirect("/");
  //     return "Logout berhasil";
  //   },
  // });

  // route
  server.route(userRoutes);

  await server.start();
  console.log("Server running on", server.info.uri);
};

process.on("unhandledRejection", (err) => {
  console.log("error: ", err);
  process.exit(1);
});

init();
