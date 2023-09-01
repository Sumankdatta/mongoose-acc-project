const { getProductServices, createProductServices } = require("../services/productServices")

exports.getProduct = async (req, res, next) => {
    try {

        const product = await getProductServices()

        res.status(200).json({
            status: "success",
            message: "Data get successfully",
            data: product
        })

    } catch (error) {
        res.status(400).json({
            status: "fail",
            message: "Can not get data",
            error: error.message
        })
    }
}

exports.createProduct = async (req, res, next) => {
    try {
        const result = await createProductServices(req.body)
        // const product = new Product(req.body);
        // const result = await product.save();

        result.logger()

        res.status(200).json({
            status: "success",
            message: 'Data inserted successfully',
            data: result
        })

    } catch (error) {
        res.status(400).json({
            status: "fail",
            message: "Data is not inserted",
            error: error.message
        })
    }

}