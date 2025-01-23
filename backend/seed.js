const mongoose = require('mongoose');
const User = require('./models/User'); // Adjust the path based on your file structure

mongoose.connect('mongodb://127.0.0.1:27017/messenger', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const seedUsers = async () => {
  await User.deleteMany({});
  await User.create([
    { name: 'John Doe', email: 'john@example.com', password: '123456' },
    { name: 'Jane Doe', email: 'jane@example.com', password: 'abcdef' },
  ]);
  console.log('Data seeded successfully');
  process.exit();
};

seedUsers();
