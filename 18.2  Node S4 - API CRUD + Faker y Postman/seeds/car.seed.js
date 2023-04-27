const mongoose = require("mongoose");
const { connect } = require("../db.js");
const { Car } = require("../model/Car.js");
const { faker } = require("@faker-js/faker");
const path = require('path')

const carList = [
  { brand: "Lexus", model: "CT200", plate: "M1234YB", power: 105 },
  { brand: "Audi", model: "A1", plate: "B1212XX", power: 120 },
  { brand: "Renault", model: "Zoe", plate: "1234HKW", power: 125 },
];

// Creamos coches adicionales
for (let i = 0; i < 50; i++) {
  const newCar = {
    brand: faker.vehicle.manufacturer(),
    model: faker.vehicle.model(),
    plate: `M${faker.datatype.number({ min: 1000, max: 9999 })}${faker.random.alpha(2).toUpperCase()}`,
    power: faker.datatype.number({ min: 80, max: 300 }),
  };
  carList.push(newCar);
}

connect().then(() => {
  console.log("Tenemos conexión");

  // Borrar datos
  Car.collection.drop().then(() => {
    console.log("Coches eliminados");

    // Añadimos usuarios
    const documents = carList.map((user) => new Car(user));
    Car.insertMany(documents)
      .then(() => console.log("Datos guardados correctamente!"))
      .catch((error) => console.error(error))
      .finally(() => mongoose.disconnect());
  });
});