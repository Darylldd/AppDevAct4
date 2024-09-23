exports.getCategories = (req, res) => {
  res.send('Get all categories');
};

exports.createCategory = (req, res) => {
  res.send('Create a new category');
};

exports.updateCategory = (req, res) => {
  res.send(`Update category with ID: ${req.params.id}`);
};

exports.deleteCategory = (req, res) => {
  res.send(`Delete category with ID: ${req.params.id}`);
};

exports.getCategoryById = (req, res) => {
  res.send(`Get category by ID: ${req.params.id}`);
};
