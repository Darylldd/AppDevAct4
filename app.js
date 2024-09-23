const express = require('express');
const bodyParser = require('body-parser');
const app = express();

// Set EJS as the templating engine
app.set('view engine', 'ejs');

// Middleware for parsing request bodies
app.use(bodyParser.urlencoded({ extended: true }));

// Import routes
const userRoutes = require('./routes/userRoutes');
const productRoutes = require('./routes/productRoutes');
const orderRoutes = require('./routes/orderRoutes');
const categoryRoutes = require('./routes/categoryRoutes');
const reviewRoutes = require('./routes/reviewRoutes');

// Use routes
app.use('/users', userRoutes);
app.use('/products', productRoutes);
app.use('/orders', orderRoutes);
app.use('/categories', categoryRoutes);
app.use('/reviews', reviewRoutes);

// Default route
app.get('/', (req, res) => {
    res.render('index');
});

// Start the server
app.listen(3000, () => {
    console.log(`Server is running on http://localhost:3000`);
});
