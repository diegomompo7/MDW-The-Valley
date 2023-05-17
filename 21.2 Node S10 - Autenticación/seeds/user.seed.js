const mongoose = require("mongoose");
const { connect } = require("../db.js");
const { User } = require("../model/User.js");

const userList = [
  {
    email: "fran@gmail.com",
    password: "12345678",
    firstName: "Fran",
    lastName: "Linde",
    phone: "123123123",
    address: {
      street: "Calle falsa",
      number: 123,
      city: "Ávila",
    },
  },
  {
    email: "edu@gmail.com",
    password: "edu12345",
    firstName: "Edu",
    lastName: "Cuadrado",
  },
  {
    email: "gon@gmail.com",
    password: "abcdefgh",
    firstName: "Gon",
    lastName: "Fernández",
    phone: "666777888",
    address: {
      street: "Calle Torregalindo",
      number: 1,
      city: "Madrid",
    },
  },
];

const userSeed = async () => {
  try {
    await connect();
    console.log("Tenemos conexión");

    // Borrar datos
    await User.collection.drop();
    console.log("Usuarios eliminados");

    // Añadimos usuarios
    const documents = userList.map((user) => new User(user));

    // await User.insertMany(documents);
    for (let i = 0; i < documents.length; i++) {
      const document = documents[i];
      await document.save();
    }

    console.log("Usuarios creados correctamente!");
  } catch (error) {
    console.error("ERROR AL CONECTAR CON LA BBDD");
    console.error(error);
  } finally {
    mongoose.disconnect();
  }
};

userSeed();