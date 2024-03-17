const { User } = require("../models");

const userSeeds = [
  {
    first_name: "john_doe",
    last_name: "doe",
    email: "john@gmail.com",
    password: "password123",
    user_name: "john_doe",
  },
  {
    first_name: "john_doe",
    last_name: "doe",
    email: "jane@gmail.com",
    password: "password456",
    user_name: "jane_doe",
  }

  // Add more user objects as needed
];

const seedUsers = () =>
  User.bulkCreate(userSeeds, {
    individualHooks: true,
  });

module.exports = seedUsers;
