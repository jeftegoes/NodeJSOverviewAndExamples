const { orderFacade } = require("../dependency/injection");

module.exports.getAll = async (req, res) => {
  let orders = await orderFacade.getAll();
  res.json(orders);
};

module.exports.getById = async (req, res) => {
  let id = req.params.id;
  let oder = await orderFacade.getById(id);
  res.json(oder);
};

module.exports.create = async (req, res) => {
  let order = req.body;
  await orderFacade.create(order);
  res.json(order);
};

module.exports.update = async (req, res) => {
  let id = req.params.id;
  let body = req.body;
  let order = await orderFacade.update(id, body);

  res.json(order);
};
