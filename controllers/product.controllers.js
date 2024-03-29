const {
    getProductServices,
    createProductServices,
    productUpdateServices,
    productBulkUpdateServices,
    deletedProductByIdServices,
    deletedBulkProductServices } = require("../services/productServices")

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

exports.updateProduct = async (req, res, next) => {
    try {
        const { id } = req.params
        const result = await productUpdateServices(id, req.body)

        res.status(200).json({
            status: "success",
            message: "Update successfully",
            data: result
        })
    } catch (error) {
        res.status(400).json({
            status: "fail",
            message: "Can not update",
            error: error.message
        })
    }
}

exports.bulkUpdateProduct = async (req, res, next) => {
    try {
        const result = await productBulkUpdateServices(req.body)
        res.status(200).json({
            status: "success",
            message: "Update successfully",
            data: result
        })

    } catch (error) {
        res.status(400).json({
            status: "fail",
            message: "Can not updated",
            error: error.message
        })
    }
}
exports.deleteProductById = async (req, res, next) => {
    try {
        const { id } = req.params;
        const result = await deletedProductByIdServices(id)
        if (!result.deletedCount) {
            return res.status(400).json({
                status: "fail",
                error: "Can not delete the product"
            })
        }

        res.status(200).json({
            status: "success",
            message: "Deleted successfully",
            data: result
        })

    } catch (error) {
        res.status(400).json({
            status: "fail",
            message: "Can not Deleted",
            error: error.message
        })
    }
}

exports.bulkDeleteProduct = async (req, res, next) => {
    try {
        const result = await deletedBulkProductServices(req.body.id)
        res.status(200).json({
            status: "success",
            message: "Deleted successfully",
            data: result
        })

    } catch (error) {
        res.status(400).json({
            status: "fail",
            message: "Can not Deleted products",
            error: error.message
        })
    }
}