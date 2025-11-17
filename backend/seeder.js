require('dotenv').config();
const mongoose = require('mongoose');
const Product = require('./models/Product');
const products = require('./data/products');

const mongoUri = process.env.MONGODB_URI || 'mongodb://localhost:27017/ecommerce';

const importData = async () => {
  try {
    await mongoose.connect(mongoUri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log('Connected to MongoDB for seeding');

    // Remove existing products
    await Product.deleteMany();

    // Insert sample products
    const created = await Product.insertMany(products);
    console.log(`${created.length} products inserted.`);

    process.exit();
  } catch (error) {
    console.error('Error with data import:', error);
    process.exit(1);
  }
};

importData();
