const product = require('../DatabaseModel/productModel');

const getproduct = async (req, res) => {
    try {
        const products = await product.find();
        res.status(200).json(products);
    } catch (error) {
        console.error('Error finding products:', error);
        res.status(400).json({ error: 'Error finding products' });
    }
};

const addProduct = async (req, res) => {
    const { category, itemname, eta } = req.body;
    console.log(category, itemname, eta )
    try {
        const newProduct = await product.create({ category, itemname, eta });
        res.status(200).json(newProduct);
    } catch (error) {
        console.error('Error adding product:', error);
        res.status(400).json({ error: 'Error adding product' });
    }
};

const deleteProduct = async (req, res) => {
    const { id } = req.params;
    try {
        const deletedProduct = await product.findByIdAndDelete(id);
        res.status(200).json(deletedProduct);
    } catch (error) {
        console.error('Error deleting product:', error);
        res.status(400).json({ error: 'Error deleting product' });
    }
};

module.exports = { getproduct, addProduct, deleteProduct };
