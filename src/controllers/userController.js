const connection = require("../config/mysql");

const getUser = (request, h) => {
  return new Promise((resolve, reject) => {
    console.log("getUser");
    connection.query("SELECT * FROM user", (error, results) => {
      if (error) {
        reject(
          h.response({
            status: "failed",
            message: "gagal get all data",
            data: error,
          })
        );
      } else {
        console.log(results[0].username);
        resolve(
          h.response({
            status: "success",
            message: "Berhasil get all data",
            data: results,
          })
        );
      }
    });
  });
};

const getUserById = (request, h) => {
  const userId = request.params.id;
  return new Promise((resolve, reject) => {
    connection.query(
      "SELECT * FROM user where id=?",
      [userId],
      (error, results) => {
        if (error) {
          reject(error);
        } else {
          resolve(
            h
              .response({
                status: "success",
                message: "Berhasil get data by Id",
                data: results[0],
              })
              .code(200)
          );
        }
      }
    );
  });
};

const createUser = (request, h) => {
  const { username, email, password, level1, status } = request.payload;
  return new Promise((resolve, reject) => {
    connection.query(
      "INSERT INTO user (username,email,password,status) VALUES (?,?,?,?)",
      [username, email, password, status],
      (error, results) => {
        if (error) {
          console.log(error);
          reject(error);
        } else {
          resolve(
            h
              .response({
                status: "success",
                message: "success create new datfffffa",
                data: {
                  id: results.insertId,
                  username,
                  email,
                  password,
                  status,
                },
              })
              .code(200)
          );
        }
      }
    );
  });
};

const editUser = (request, h) => {
  const userId = request.params.id;
  const {
    username,
    email,
    password,
    status,
  } = request.payload;
  return new Promise((resolve, reject) => {
    connection.query(
      "UPDATE user SET username=?,email=?,password=?,status=? where id=?",
      [username, email, password, status, userId],
      (error, results) => {
        if (error) {
          reject(error);
        } else {
          console.log(results.insertId);
          resolve(
            h
              .response({
                status: "success",
                message: "success update data",
                data: {
                  id: results.insertId,
                  username,
                  email,
                  password,
                  status,
                },
              })
              .code(200)
          );
        }
      }
    );
  });
};

const deleteUser = (request, h) => {
  const userId = request.params.id;
  return new Promise((resolve, reject) => {
    connection.query("DELETE FROM user WHERE id = ?", [userId], (error) => {
      if (error) {
        reject(error);
      } else {
        resolve(
          h
            .response({
              status: "success",
              message: "Berhasil hapus data",
              data: {
                userId: userId,
              },
            })
            .code(200)
        );
      }
    });
  });
};

module.exports = {
  getUser,
  getUserById,
  createUser,
  editUser,
  deleteUser,
};
