const mongoose = require('mongoose');

const databaseConnect = async () => {
  try {
    await mongoose.connect('mongodb://127.0.0.1:27017/messenger', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB connected successfully');
  } catch (error) {
    console.error('MongoDB connection error:', error);
    process.exit(1);
  }
};

module.exports = databaseConnect;
