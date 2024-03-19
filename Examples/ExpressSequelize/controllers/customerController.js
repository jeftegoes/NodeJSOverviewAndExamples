const { Customer } = require("../models/dbContext");

const add = async (req, res) => {
  let request = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    phone: req.body.phone,
  };

  const customer = await Customer.create(request);
  res.status(201).send(customer);
};

const getAll = async (req, res) => {
  let customers = await Customer.findAll({});
  res.status(200).send(customers);
};

const get = async (req, res) => {
  let customerId = req.params.customerId;
  let customer = await Customer.findOne({ where: { customerId: customerId } });
  if (!customer) {
    return res.status(404).send(customer);  
  }
  res.status(200).send(customer);
};

const update = async (req, res) => {
  let customerId = req.params.customerId;
  let customer = await Customer.update(req.body, {
    where: { customerId: customerId },
  });
  res.status(200).send(customer);
};

const remove = async (req, res) => {
  let customerId = req.params.customerId;
  let customer = await Customer.destroy({ where: { customerId: customerId } });
  res.status(200).json({ message: "The customer has been deleted!" });
};

module.exports = { add, getAll, get, update, remove };
