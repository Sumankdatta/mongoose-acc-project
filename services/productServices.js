const Product = require('../models/Products')

exports.getProductServices = async () => {
    const query = { name: { $in: ['chal', 'Banana'] } }
    const product = await Product.find(query)
    return product
}

exports.createProductServices = async (data) => {
    const product = await Product.create(data)
    return product

}