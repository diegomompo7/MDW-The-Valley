const express = require("express");
const bcrypt = require("bcrypt")
const { generateToken } = require("../utils/token")

// Modelos
const { User } = require("../model/User.js");
const { Car } = require("../model/Car.js");
const { isAuth } = require("../middlewares/auth.middleware.js");

// Router propio de usuarios
const router = express.Router();

router.get("/", async (req, res, next) => {
  try {
    const page = parseInt(req.query.Page);
    const limit = parseInt(req.query.limit);
    const users = await User.find()
      .limit(limit)
      .skip((page - 1) * limit);

    const totalElements = await User.countDocuments();

    const response = {
      totalItems: totalElements,
      totalPage: Math.ceil(totalElements / limit),
      currentPage: page,
      date: users,
    };
    res.json(response);
  } catch (error) {
    next(error)
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const id = req.params.id;
    const user = await User.findById(id);

    if (user) {
      const temporalUser = user.toObject();
      const includeCars = req.query.includeCars === "true";
      if (includeCars) {
        const cars = await Car.find({ owner: id });
        temporalUser.cars = cars;
      }

      res.json(temporalUser);
    } else {
      res.status(404).json({});
    }
  } catch (error) {
    next(error)
  }
});

router.get("/name/:name", async (req, res, next) => {
  const name = req.params.name;

  try {
    const user = await User.find({ firstName: new RegExp("^" + name.toLowerCase(), "i") });
    if (user?.length) {
      res.json(user);
    } else {
      res.status(404).json([]);
    }
  } catch (error) {
    next(error)
  }
});

// Endpoint de creación de usuarios
router.post("/", async (req, res, next) => {
  try {
    const user = new User(req.body);

    const createdUser = await user.save();
    return res.status(201).json(createdUser);
  } catch (error) {
    next(error)
  }
});

router.delete("/:id", isAuth, async (req, res, next) => {
  try {
    const id = req.params.id;

    if(req.user.id !== id || req.user.email !== "admin@gmail.com"){
      return res.status(401).json({error: "No tienes autorización para realizar esta operación"})
    }

    const userDeleted = await User.findByIdAndDelete(id);
    if (userDeleted) {
      res.json(userDeleted);
    } else {
      res.status(404).json();
    }
  } catch (error) {
    next(error)
  }
});

// CRUD: UPDATE
router.put("/:id", isAuth , async (req, res, next) => {
  try {
    const id = req.params.id;

    if(req.user.id !== id || req.user.email !== "admin@gmail.com"){
      return res.status(401).json({error: "No tienes autorización para realizar esta operación"})
    }

    const userToUpdate = await User.findById(id);
    if (userToUpdate) {
      Object.assign(userToUpdate, req.body);
      await userToUpdate.save();
      // Quitamos pass de la respuesta
      const userToSend = userToUpdate.toObject();
      delete userToSend.password;
      res.json(userToSend);
    } else {
      res.status(404).json({});
    }
  } catch (error) {
    next(error);
  }
});

router.post("/login", async (req, res, next) => {
  try {
    const {email, password } = req.body

    if( !email || !password){
      return res.status(400).json({ error: "Se deben especificar los campos email y password" });
    }

    const user = await User.findOne({ email }).select("+password")
    if(!user){
      return res.status(401).json({ error: "Email y/o contraseña incorrectos" });
    }
    

    const match = await bcrypt.compare(password, user.password);
    if (match) {
      // Quitamos password de la respuesta
      const userWithoutPass = user.toObject();
      delete userWithoutPass.password;

      const jwtToken = generateToken(user._id, user.email);

      return res.status(200).json({ token: jwtToken });
    } else {
      return res.status(401).json({ error: "Email y/o contraseña incorrectos" });
    }

  } catch (error) {
    next(error)
  }
});
module.exports = { userRouter: router };
