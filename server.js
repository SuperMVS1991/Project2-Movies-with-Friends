const express = require("express");

// Import the connection object
const sequelize = require("./config/connection");
// check with tutor if file path is correct above

const app = express();
const PORT = process.env.PORT || 3306;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Connect to the database before starting the Express.js server
sequelize.sync().then(() => {
  app.listen(PORT, () => console.log("Now listening"));
});
