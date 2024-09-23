exports.getOrders = (req, res) => {
  res.send('Get all orders');
};

exports.createOrder = (req, res) => {
  res.send('Create a new order');
};

exports.updateOrder = (req, res) => {
  res.send(`Update order with ID: ${req.params.id}`);
};

exports.deleteOrder = (req, res) => {
  res.send(`Delete order with ID: ${req.params.id}`);
};

exports.getOrderById = (req, res) => {
  res.send(`Get order by ID: ${req.params.id}`);
};
