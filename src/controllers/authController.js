// const Bcrypt = require("bcrypt");
// start autentikasi
const users = {
  john: {
    username: "john",
    password: "$2a$10$iqJSHD.BGr0E2IxQwYgJmeP3NvhPrXAeLSaGCj6IR/XU5QtjVu5Tm", // 'secret'
    name: "John Doe",
    id: "2133d32a",
  },
};

const validateUser = async (request, username, password, h) => {
  const user = users[username];
  if (!user) {
    return { credentials: null, isValid: false };
  }

  const isValid = await Bcrypt.compare(password, user.password);
  const credentials = { id: user.id, name: user.name };

  return { isValid, credentials };
};

// end autentikasi

// module.exports = validateUser;
