const mongoose = require('mongoose');

//schema design

const productSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please provide a name for this product"],
        trim: true,
        unique: [true, "Name must be unique"],
        minLength: [4, 'Name must be 4 character'],
        maxLength: [30, "Name is too large"]
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true,
        min: [0, "Price can not negative"]
    },
    unit: {
        type: String,
        required: true,
        enum: {
            values: ["kg", "litter", "pcs"],
            message: "unit value can not {VALUE},must be kg/litter,pcs"
        }
    },
    quantity: {
        type: Number,
        required: true,
        min: [0, 'Quantity can not negative'],
        validate: {
            validator: (value) => {
                const isInteger = Number.isInteger(value)
                if (isInteger) {
                    return true
                }
                else {
                    return false
                }
            }
        },
        message: "Quantity must be integer"
    },
    status: {
        type: String,
        required: true,
        enum: {
            values: ['in-stock', 'out-of-stock', 'discontinued'],
            message: 'Status can not be {VALUE}'
        }
    },
    // createdAt:{
    //     type:Date,
    //     default:Date.now
    // },
    // updatedAt:{
    //     type:Date,
    //     default:Date.now,
    // }
    // supplier: {
    //     type: mongoose.Schema.type.ObjectId,
    //     ref: "Supplier"
    // }

}, {
    timestamps: true
});
//mongoose middleware for saving data;

productSchema.pre('save', function (next) {
    console.log('before saving data')
    if (this.quantity === 0) {
        this.status = "out-of-stock"
        console.log(this.status)
    }
    next()
});
// productSchema.post('save', function (doc, next) {
//     console.log('after saving data')
//     next()
// })

productSchema.methods.logger = function () {
    console.log(`data saved for ${this.name}`)
}

//SCHEMA-MODEL-QUERY

const Product = mongoose.model('Product', productSchema)

module.exports = Product;