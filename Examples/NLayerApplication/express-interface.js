const express = require("express");
// const Product = require("./models/product");
const ProductRepository = require("./repositories/product-repository");
const ProductMySqlRepository = require("./repositories/product-mysql-repository");
const ProductApplication = require("./applications/product-application");
const UserInterface = require("./facade/user-interface");

const productRespository = new ProductRepository();
const productMySqlRepository = new ProductMySqlRepository();

// const product1 = new Product(1, "Hotdog", 4);
// const product2 = new Product(2, "X-Salada", 4.5);
// const product3 = new Product(3, "Teste", 5);
// const product4 = new Product(4, "123", 2);
// const product5 = new Product(5, "43444", 1.5);

// productRespository.append(product1);
// productRespository.append(product2);
// productRespository.append(product3);
// productRespository.append(product4);
// productRespository.append(product5);

const productApplication = new ProductApplication(productMySqlRepository);
const userInterface = new UserInterface(productApplication);

const app = express();

const port = 3000;

app.use(express.json());

app.get("/code/:code/quantity/:quantity", async (req, res, next) => {
  let code = req.params.code;
  let quantity = req.params.quantity;

  let result = await userInterface.getTotalPrice(
    parseFloat(code),
    parseFloat(quantity)
  );

  res.json({ result: result });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}.`);
});
