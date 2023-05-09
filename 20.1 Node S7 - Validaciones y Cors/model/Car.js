const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Creamos el schema del usuario
const carSchema = new Schema(
  {
    brand: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Brand",
      required: false,
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
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },
  {
    timestamps: true,
  }
);

const Car = mongoose.model("car", carSchema);
module.exports = { Car };