const express = require("express");
const fs = require("fs");

// Modelos
const { Crypto } = require("../models/Crypto.js");

const router = express.Router();

// CRUD: READ
router.get("/", async (req, res) => {
  try {
    // Asi leemos query params
    const page = parseInt(req.query.page);
    const limit = parseInt(req.query.limit);
    const cryptos = await Crypto.find()
      .limit(limit)
      .skip((page - 1) * limit);

    // Num total de elementos
    const totalElements = await Crypto.countDocuments();

    const response = {
      totalItems: totalElements,
      totalPages: Math.ceil(totalElements / limit),
      currentPage: page,
      data: cryptos,
    };

    res.json(response);
  } catch (error) {
    console.error(error);
    res.status(500).json(error);
  }
});

// CRUD: READ
router.get("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const crypto = await Crypto.findById(id);
    if (crypto) {
      res.json(crypto);
    } else {
      res.status(404).json({});
    }
  } catch (error) {
    console.error(error);
    res.status(500).json(error);
  }
});

router.get("/name/:name", async (req, res) => {
  const name = req.params.name;

  try {
    const crypto = await Crypto.find({ name: new RegExp("^" + name.toLowerCase(), "i") });
    if (crypto?.length) {
      res.json(crypto);
    } else {
      res.status(404).json([]);
    }
  } catch (error) {
    console.error(error);
    res.status(500).json(error);
  }
})

router.get("/csv", async (req, res) => {
  const cryptos = await Crypto.find()
  console.log(cryptos)
  fs.readFile(cryptos, (readError, data) => {
    if (readError) {
      console.log("Ha ocurrido un error leyendo el fichero");
    } else {
      try {
        const parsedData = JSON.parse(data);
        console.log(parsedData)
        const csv = convertJsonToCsv(parsedData);

        console.log(csv)
  
        try {
          if (csv?.length) {
            res.json(crypto);
          } else {
            res.status(404).json([]);
          }
        } catch (error) {
          console.error(error);
          res.status(500).json(error);
        }
      } catch (parseError) {
        console.log("Ha ocurrido un error PARSEANDO el fichero");
      }
    }
  });
})

router.get("/sorted-by-marketcap", async (req, res) => {
  try {
    // Asi leemos query params
    
    const order = req.query.order;
    const cryptos = await Crypto.Filter(marketCap)

      console.log(cryptos)


    const response = {
      order: order.cryptos.marketCap,
      data: cryptos,
    };

    res.json(response);
  } catch (error) {
    console.error(error);
    res.status(500).json(error);
  }
});

// CRUD: CREATE
router.post("/", async (req, res) => {
  console.log(req.headers);

  try {
    const crypto = new Crypto({
      name: req.body.name,
      price: req.body.price,
      marketCap: req.body.marketCap,
      created_at: Date.UTC()
    });

    const createdCrypto = await crypto.save();
    return res.status(201).json(createdCrypto);
  } catch (error) {
    console.error(error);
    res.status(500).json(error);
  }
});

// CRUD: DELETE
router.delete("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const cryptoDeleted = await Crypto.findByIdAndDelete(id);
    if (cryptoDeleted) {
      res.json(cryptoDeleted);
    } else {
      res.status(404).json({});
    }
  } catch (error) {
    console.error(error);
    res.status(500).json(error);
  }
});

// CRUD: UPDATE
router.put("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const cryptoUpdated = await Crypto.findByIdAndUpdate(id, req.body, { new: true });
    if (cryptoUpdated) {
      res.json(cryptoUpdated);
    } else {
      res.status(404).json({});
    }
  } catch (error) {
    console.error(error);
    res.status(500).json(error);
  }
});

const convertJsonToCsv = (jsonData) => {
  let csv = "";

  // Encabezados
  const firstItemInJson = jsonData[0];
  const headers = Object.keys(firstItemInJson);
  csv = csv + headers.join(";") + "; \n";

  // Datos

  // Recorremos cada fila
  jsonData.forEach((item) => {
    // Dentro de cada fila recorremos todas las propiedades
    headers.forEach((header) => {
      csv = csv + item[header] + ";";
    });
    csv = csv + "\n";
  });

  console.log(csv)

  return csv;
};

module.exports = { cryptoRouter: router };
