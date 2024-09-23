exports.getProducts = (req, res) => {
  res.send('Get all products');
};

exports.createProduct = (req, res) => {
  res.send('Create a new product');
};

exports.updateProduct = (req, res) => {
  res.send(`Update product with ID: ${req.params.id}`);
};

exports.deleteProduct = (req, res) => {
  res.send(`Delete product with ID: ${req.params.id}`);
};

exports.getProductById = (req, res) => {
  res.send(`Get product by ID: ${req.params.id}`);
};
