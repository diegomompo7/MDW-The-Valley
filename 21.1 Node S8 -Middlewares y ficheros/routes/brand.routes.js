const express = require("express")
const multer = require("multer")
const fs = require("fs")

const { Brand } = require("../model/Brand.js")

const router = express.Router()

const upload = multer({ dest : "public" })

router.get("/", async (req, res) => {
    try{
        const page = parseInt(req.query.page)
        const limit = parseInt(req.query.limit)
        const brands = await Brands.find()
        .limit(limit)
        .skip((page - 1) * limit)

        const totalElements = await Brand.countDocuments()

        const response = {
            totalItems : totalElements,
            totalPages: Math.ceil(totalElements / limit),
            currentPage: page,
            data: brands,
        }

        res.json(response)
    } catch (error) {
        res.status(500).json(error)
    }
})

router.get("/:id", async (req,res) => {
    try{
        const id = req.params.id;
        const brand = await Brand.findById(id)
        if(brand){
            res.json(brand)
        }else{
            res.status(404).json({})
        }
    }catch(error) {
        res.status(500).json(error)
    }
})
// CRUD: Operación custom, no es CRUD
router.get("/name/:name", async (req, res) => {
    const brandName = req.params.name;
  
    try {
      const brand = await Brand.find({ name: new RegExp("^" + brandName.toLowerCase(), "i") });
      if (brand?.length) {
        res.json(brand);
      } else {
        res.status(404).json([]);
      }
    } catch (error) {
      console.log(error);
      res.status(500).json(error);
    }
  });
  
  // CRUD: CREATE
  router.post("/", async (req, res) => {
    try {
      const brand = new Brand(req.body);
      const createdBrand = await brand.save();
      return res.status(201).json(createdBrand);
    } catch (error) {
      res.status(500).json(error);
    }
  });

  router.post("/logo-upload", upload.single("logo"), async (req, res, next) => {
    try {
      // Renombrado de la imagen
      const originalname = req.file.originalname;
      const path = req.file.path;
      const newPath = path + "_" + originalname;
      fs.renameSync(path, newPath);
  
      // Busqueda de la marca
      const brandId = req.body.brandId;
      const brand = await Brand.findById(brandId);
  
      if (brand) {
        brand.logoImage = newPath;
        await brand.save();
        res.json(brand);
  
        console.log("Marca modificada correctamente!");
      } else {
        fs.unlinkSync(newPath);
        res.status(404).send("Marca no encontrada");
      }
    } catch (error) {
      next(error);
    }
  });
  
  // CRUD: UPDATE
  router.put("/:id", async (req, res) => {
    try {
      const id = req.params.id;
      const brandUpdated = await Brand.findByIdAndUpdate(id, req.body, { new: true });
      if (brandUpdated) {
        res.json(brandUpdated);
      } else {
        res.status(404).json({});
      }
    } catch (error) {
      res.status(500).json(error);
    }
  });
  
  module.exports = { brandRouter: router };