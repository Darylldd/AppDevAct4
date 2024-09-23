exports.getReviews = (req, res) => {
  res.send('Get all reviews');
};

exports.createReview = (req, res) => {
  res.send('Create a new review');
};

exports.updateReview = (req, res) => {
  res.send(`Update review with ID: ${req.params.id}`);
};

exports.deleteReview = (req, res) => {
  res.send(`Delete review with ID: ${req.params.id}`);
};

exports.getReviewById = (req, res) => {
  res.send(`Get review by ID: ${req.params.id}`);
};
