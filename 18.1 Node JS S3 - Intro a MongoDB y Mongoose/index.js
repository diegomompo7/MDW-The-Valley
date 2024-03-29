// Conexión a la BBDD;
const express = require("express")

const { connect } = require("./db.js");
connect();

// Modelos
const { User } = require("./model/User.js");

//Creamos router de express
const PORT = 3000
const server = express()
const router = express.Router()

//Configuración del server
server.use(express.json())
server.use(express.urlencoded({ extented : false }))

//Rutas
router.get("/", (req, res) => {
    res.send("Esta es la home de nuestra API");
  });

//Rutas
router.get("/user", (req, res) => {
    User.find()
        .then(users => res.json(users))
        .catch(error => res.status(500).json(error))
})

router.get("/user/name/:name", async(req, res) => {
    const name = req.params.name
    try{
        const user = await User.find({ firstName: new RegExp("^" + name.toLowerCase(), "i") })
        if(user) {
            res.json(user)
        } else {
            res.status(404).json()
        }

    }catch (error) {
        res.status(500).json(error)
    }
})

router.get("user/:id", (req, res) => {
    const id = req.params.id

    User.findById(id)
        .then((user) => {
            if(user){
                res.json(user)
            }else{
                res.status(404).json({})
            }
        })
        .catch((error) => res.status(500).json(error))
})

server.use("/", router)
server.listen(PORT, () => {
    console.log(`Server levantado en el puerto ${PORT}`)
})

router.post("/user", async(req, res) => {
    try{
        const User = new User({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            phone: req.body.phone
        })
    const createdUser = await user.save()
    return res.status(201).json(createdUser)
    } catch(error) {
        res.status(500).json(error)
    }
})