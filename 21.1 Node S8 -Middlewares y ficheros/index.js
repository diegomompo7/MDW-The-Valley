const express = require("express");
const cors = require("cors");
const { userRouter } = require("./routes/user.routes.js");
const { carRouter } = require("./routes/car.routes.js");
const { fileUploadRouter } = require("./routes/file-upload.routes.js");

const main = async () => {
  // Conexión a la BBDD
  const { connect } = require("./db.js");
  await connect();

  // Configuración del server
  const PORT = 3000;
  const server = express();
  server.use(express.json());
  server.use(express.urlencoded({ extended: false }));
  server.use(
    cors({
      origin: "http://localhost:3000",
    })
  );

  // Rutas
  const router = express.Router();
  router.get("/", (req, res) => {
    res.send("Esta es la home de nuestra API");
  });
  router.get("*", (req, res) => {
    res.status(404).send("Lo sentimos :( No hemos encontrado la página solicitada.");
  });

  server.use((req, res, next) => {
    const date = new Date()
    console.log(`Petición de tipo ${req.method} a la url ${req.originalUrl} el ${date}`)
    next();
  })

  // Usamos las rutas
  server.use("/user", userRouter);
  server.use("/car", carRouter);
  server.use("/public", express.static("public"));
  server.use("/file-upload", fileUploadRouter)
  server.use("/", router);


  server.use((err, req, res, next) => {
    console.log("*** INICIO DE ERROR ***")
    console.log(`PETICIÓN FALLIDA: ${req.method} a la url ${req.originalUrl}`);
    console.log(err)
    console.log("*** FIN DEL ERROR ***")

    if (err.name === "ValidationError") {
      res.status(400).json(err)
    } else {
      res.status(500).json(err)
    }
  })

  server.listen(PORT, () => {
    console.log(`Server levantado en el puerto ${PORT}`);
  });
};

main();
