// Conexión a la BBDD;
const express = require("express")
const { userRouter } = require("./routes/user.routes.js")

const { connect } = require("./db.js");
connect();

//Configuración del server
// Configuración del server
const PORT = 3000;
const server = express();
server.use(express.json());
server.use(express.urlencoded({ extended: false }));

// Rutas
const router = express.Router();
router.get("/", (req, res) => {
  res.send("Esta es la home de nuestra API");
});
router.get("*", (req, res) => {
  res.status(404).send("Lo sentimos :( No hemos encontrado la página solicitada.");
});

// Usamos las rutas
server.use("/user", userRouter);
server.use("/", router);

server.listen(PORT, () => {
  console.log(`Server levantado en el puerto ${PORT}`);
});