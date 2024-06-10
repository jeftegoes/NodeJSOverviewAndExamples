const { productFacade } = require("../dependency/injection");

module.exports.getAll = async (req, res) => {
  let products = await productFacade.getAll();
  res.json(products);
};

module.exports.getById = async (req, res) => {
  let id = req.params.id;
  let product = await productFacade.getById(id);
  res.json(product);
};

module.exports.create = async (req, res) => {
  let product = req.body;
  await productFacade.create(product);
  res.json(product);
};

module.exports.update = async (req, res) => {
  let id = req.params.id;
  let body = req.body;
  let product = await productFacade.update(id, body);
  
  res.json(product);
};
