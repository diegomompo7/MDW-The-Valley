const mongoose = require("mongoose");
const validator = require("validator");
const brcypt = require("bcrypt");
const Schema = mongoose.Schema;

// Creamos el schema del usuario
const userSchema = new Schema(
  {
    email: {
      type: String,
      trim: true,
      required: true,
      unique: true,
      validate: {
        validator: validator.isEmail,
        message: "Email incorrecto",
      },
    },
    password: {
      type: String,
      trim: true,
      required: true,
      minLength: [8, "La contraseña debe tener al menos 8 caracteres"],
      select: false,
    },
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: false,
    },
    address: {
      type: {
        street: {
          type: String,
          required: true,
        },
        number: {
          type: Number,
          required: true,
        },
        city: {
          type: String,
          required: false,
        },
      },
      required: false,
    },
  },
  {
    timestamps: true,
  }
);

userSchema.pre("save", async function (next) {
  try {
    if (this.isModified("password")) {
      const saltRounds = 10;
      const passwordEncrypted = await brcypt.hash(this.password, saltRounds);
      this.password = passwordEncrypted;
    }
    next();
  } catch (error) {
    next(error);
  }
});

const User = mongoose.model("User", userSchema);
module.exports = { User };
