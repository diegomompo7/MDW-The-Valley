const mongoose = require("moongose")

const brandSchema = new Schema (
    {
        name: {
            type: String,
            required: true,
        },
        creationYear: {
            type: Number,
            required: false,
        },
        country: {
            type: String,
            required: false,
        }
    },
    {
        timestamps: true,
    }
)

const Brand = mongoose.model("Brand", brandSchema)
module.exports = { Brand }

