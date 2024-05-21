const ProductRepository = require("../repositories/product-repository");
const ProductApplication = require("../applications/product-application");
const ProductFacade = require("../facade/product-facade");

const productRepository = new ProductRepository();
const productApplication = new ProductApplication(productRepository);
const productFacade = new ProductFacade(productApplication);

module.exports = { productFacade };
