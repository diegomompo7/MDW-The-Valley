const express = require("express");

// Modelos
const { User } = require("../model/User.js");

// Router propio de usuarios
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const page = parseInt(req.query.Page)
    const limit = parseInt(req.query.limit)
    const users = await User.find()
        .limit(limit)
        .skip((page - 1) * limit);


    const totalElements = await User.countDocuments()
     
    const response = {
        totalItems: totalElements,
        totalPage: Math.ceil(totalElements / limit),
        currentPage: page,
        date: users,
    }
    res.json(response);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const user = await User.findById(id);
    if (user) {
      res.json(user);
    } else {
      res.status(404).json({});
    }
  } catch (error) {
    res.status(500).json(error);
  }
});

router.get("/name/:name", async (req, res) => {
  const name = req.params.name;

  try {
    const user = await User.find({ firstName: new RegExp("^" + name.toLowerCase(), "i") });
    if (user?.length) {
      res.json(user);
    } else {
      res.status(404).json([]);
    }
  } catch (error) {
    res.status(500).json(error);
  }
});

// Endpoint de creación de usuarios
router.post("/", async (req, res) => {
  try {
    const user = new User(req.body);

    const createdUser = await user.save();
    return res.status(201).json(createdUser);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.delete("/:id", async (req, res) => {
    try{
        const id = req.params.id
        const userDeleted = await User.findByIdAndDelete(id)
        if(userDeleted){
            res.json(userDeleted)
        }else{
            res.status(404).json()
        }
    }catch (error){
        res.status(500).json(error)
    }
})

// CRUD: UPDATE
router.put("/:id", async (req, res) => {
    try {
      const id = req.params.id;
      const userUpdated = await User.findByIdAndUpdate(id, req.body, { new: true });
      if (userUpdated) {
        res.json(userUpdated);
      } else {
        res.status(404).json({});
      }
    } catch (error) {
      res.status(500).json(error);
    }
})

module.exports = { userRouter: router };