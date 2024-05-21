const { productFacade } = require("../dependency/injection");

module.exports.getAll = async (req, res) => {
  let products = await productFacade.getProducts();
  res.status(200).send(products);
};

module.exports.getById = async (req, res) => {
  let code = req.params.code;

  let product = await productFacade.getProduct(code);
  res.status(200).send(product);
};
