const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Creamos el schema del usuario
const carSchema = new Schema(
  {
    brand: {
      type: String,
      required: true,
    },
    module: {
      type: String,
      required: true,
    },
    plate: {
        type: String,
      required: false,
    },
    power: {
        type: String,
      required: false,
    },
  },
  {
    timestamps: true,
  }
);

const Car = mongoose.model("car", carSchema);
module.exports = { Car };