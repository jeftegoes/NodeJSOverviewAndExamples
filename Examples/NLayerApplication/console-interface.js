const Product = require("./models/product");
const ProductRepository = require("./repositories/product-repository");
const ProductApplication = require("./applications/product-application");
const UserInterface = require("./facade/user-interface");

const productRespository = new ProductRepository();
var prompt = require("prompt-sync")();

const product1 = new Product(1, "Hotdog", 4);
const product2 = new Product(2, "X-Salada", 4.5);
const product3 = new Product(3, "Teste", 5);
const product4 = new Product(4, "123", 2);
const product5 = new Product(5, "43444", 1.5);

productRespository.append(product1);
productRespository.append(product2);
productRespository.append(product3);
productRespository.append(product4);
productRespository.append(product5);

const productApplication = new ProductApplication(productRespository);
const userInterface = new UserInterface(productApplication);

console.log("-------- Select product --------");
console.log(productRespository.getAll());

const productAndPrice = prompt(
  "Enter the code and quantity of the product to be purchased: "
).split(" ");

console.log(
  userInterface.getTotalPrice(
    parseFloat(productAndPrice[0]),
    parseFloat(productAndPrice[1])
  )
);
