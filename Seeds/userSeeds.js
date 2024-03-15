const User = require("../models/UserPrivate");

const userSeeds = [
  {
    user_name: "john_doe",
    email: "john@gmail.com",
    password: "password123",
  },
  {
    user_name: "jane_smith",
    email: "jane@gmail.com",
    password: "password456",
  },
  {
    user_name: "bob_jones",
    email: "bob@gmail.com",
    password: "password789",
  },
  {
    user_name: "sally_miller",
    email: "sally@gmail.com",
    password: "password101112",
  },
  {
    user_name: "mike_brown",
    email: "mike@gmail.com",
    password: "password131415",
  },

  // Add more user objects as needed
];

const seedUsers = () => User.bulkCreate(userSeeds, {
    individualHooks: true
});

module.exports = seedUsers;