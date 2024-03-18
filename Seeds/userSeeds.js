const { User } = require("../models");

const userSeeds = [
  {
    first_name: "John",
    last_name: "Doe",
    email: "john@gmail.com",
    password: "password123",
    user_name: "john_doe",
    state: "California",
    favorite_genres: "Action, Comedy, Drama",
    favorite_movies: "The Godfather, The Dark Knight, Pulp Fiction",
    about_me: "I love movies! Also, I am not a real person!",
    user_avatar: "/public/assets/images/pac-danger.png",
  },
  {
    first_name: "Jane",
    last_name: "Doe",
    email: "jane@gmail.com",
    password: "password456",
    user_name: "jane_doe",
    state: "California",
    favorite_genres: "Family Movies, Romance, Comedy",
    favorite_movies: "The Notebook, The Lion King, The Sound of Music",
    about_me: "I'm only signing up for this because John asked me to.",
  },
  {
    first_name: "Heidi",
    last_name: "Carrier",
    email: "tenibrae@gmail.com",
    password: "NoSass",
    user_name: "Tenibrae",
    state: "Connecticut",
    favorite_genres: "Comedy, Sci-Fi, Fantasy, Documentary",
    favorite_movies: "The Princess Bride, The Last Unicorn, Spider-man Across the Spiderverse, Fight Club, Flatliners",
    about_me: "I'm an artist, musician, and web development student. I love animals, crystals, and the color purple.",
  }

  // Add more user objects as needed
];

const seedUsers = () =>
  User.bulkCreate(userSeeds, {
    individualHooks: true,
  });

module.exports = seedUsers;
