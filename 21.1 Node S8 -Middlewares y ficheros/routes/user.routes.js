const express = require("express");

// Modelos
const { User } = require("../model/User.js");
const { Car } = require("../model/Car.js")

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

router.delete("/:id", async (req, res, next) => {
  try {
    const id = req.params.id;
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
router.put("/:id", async (req, res, next) => {
  try {
    const id = req.params.id;
    const userUpdated = await User.findByIdAndUpdate(id, req.body, { new: true });
    if (userUpdated) {
      res.json(userUpdated);
    } else {
      res.status(404).json({});
    }
  } catch (error) {
    next(error)
  }
});

module.exports = { userRouter: router };
