const UserPrivate = require("../models/UserPrivate");

const userSeeds = [
  {
    first_name: "john_doe",
    last_name: "doe",
    email: "john@gmail.com",
    password: "password123",
  },
  {
    first_name: "john_doe",
    last_name: "doe",
    email: "jane@gmail.com",
    password: "password456",
  },
  {
    first_name: "john_doe",
    last_name: "doe",
    email: "bob@gmail.com",
    password: "password789",
  },
  {
    first_name: "john_doe",
    last_name: "doe",
    email: "sally@gmail.com",
    password: "password101112",
  },
  {
    first_name: "john_doe",
    last_name: "doe",
    email: "mike@gmail.com",
    password: "password131415",
  },

  // Add more user objects as needed
];

const seedUsers = () =>
  UserPrivate.bulkCreate(userSeeds, {
    individualHooks: true,
  });

module.exports = seedUsers;
