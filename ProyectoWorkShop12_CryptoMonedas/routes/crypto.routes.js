const express = require("express");
const fs = require("fs");

// Modelos
const { Crypto } = require("../models/Crypto.js");
const { cryptoUtils } = require("../utils/crypto.utils.js")

const router = express.Router();

const convertJsonToCsv = (jsonData) => {
  let csv = "";

  // Encabezados
  const firstItemInJson = jsonData.data[0];
  const headers = Object.keys(firstItemInJson.toObject());
  csv = csv + headers.join(";") + "; \n";

  // Datos

  // Recorremos cada fila
  jsonData.data.forEach((item) => {
    // Dentro de cada fila recorremos todas las propiedades
    headers.forEach((header) => {
      csv = csv + item[header] + ";";
    });
    csv = csv + "\n";
  });

  console.log(csv)

  return csv;
};

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

router.get("/csv", async (req, res) => {
  const cryptos = await Crypto.find()
  console.log(cryptos)
      try {
        const response = {
          data: cryptos,
        }
        
        res.send(convertJsonToCsv(response));
        
        } catch (error) {
          console.error(error);
          res.status(500).json(error);
        }
  });

router.get("/sorted-by-marketcap", async (req, res) => {
  try {
    // Asi leemos query params
    
    const order = req.query.order;
    const cryptos = await Crypto.find()
    .sort({marketCap: order})

      console.log(cryptos)


    const response = {
      data: cryptos,
    };

    res.json(response);
  } catch (error) {
    console.error(error);
    res.status(500).json(error);
  }
});
router.get("/sorted-by-date", async (req, res) => {
  try {
    // Asi leemos query params
    
    const order = req.query.order;
    const cryptos = await Crypto.find()
    .sort({created_at: order})

      console.log(cryptos)


    const response = {
      data: cryptos,
    };

    res.json(response);
  } catch (error) {
    console.error(error);
    res.status(500).json(error);
  }
});

router.get("/price-range", async (req, res) => {
  try {
    // Asi leemos query params
    
    const min = parseInt(req.query.min);
    const max = parseInt(req.query.max);
    const cryptos = await Crypto.find({price : {$gte: min, $lte : max}})
    

      console.log(cryptos)


    const response = {
      data: cryptos,
    };

    res.json(response);
  } catch (error) {
    console.error(error);
    res.status(500).json(error);
  }
});

router.delete("/reset", async (req, res) => {
  try {
    // Asi leemos query params
    
    cryptoUtils()
    const cryptos = await Crypto.find()
    
      console.log("hola")
      console.log(cryptos)


    const response = {
      data: cryptos,
    };

    res.json(response);
  } catch (error) {
    console.error(error);
    res.status(500).json(error);
  }
});



// CRUD: READ
router.get("id/:id", async (req, res) => {
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
router.delete("id/:id", async (req, res) => {
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
router.put("id/:id", async (req, res) => {
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

module.exports = { cryptoRouter: router };
