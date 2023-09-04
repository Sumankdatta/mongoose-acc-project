const Product = require('../models/Products')

exports.getProductServices = async () => {
    const query = {}
    const product = await Product.find(query)
    return product
}

exports.createProductServices = async (data) => {
    const product = await Product.create(data)
    return product

}

exports.productUpdateServices = async (productId, data) => {
    const query = { _id: productId }
    const updatedDoc = { $inc: data }
    const product = await Product.updateOne(query, updatedDoc, {
        runValidators: true
    })


    //2nd method
    // const productData = await Product.findById(productId);
    // const product = await productData.set(data).save()
    // return product
}