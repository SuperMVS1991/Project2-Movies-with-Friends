const User = require("../models/User");

const userSeeds = [
  {
    username: "john_doe",
    email: "john@gmail.com",
    password: "password123",
  },
  {
    username: "jane_smith",
    email: "jane@gmail.com",
    password: "password456",
  },
  {
    username: "bob_jones",
    email: "bob@gmail.com",
    password: "password789",
  },
  {
    username: "sally_miller",
    email: "sally@gmail.com",
    password: "password101112",
  },
  {
    username: "mike_brown",
    email: "mike@gmail.com",
    password: "password131415",
  },

  // Add more user objects as needed
];

const seedUsers = () => User.bulkCreate(userSeeds, {
    individualHooks: true
});

module.exports = seedUsers;