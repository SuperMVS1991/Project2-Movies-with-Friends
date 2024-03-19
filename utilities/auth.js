const express = require('express');
const app = express();

const withAuth = app.get('/', (req, res) => {
  // If the user isn't logged in, redirect them to the landing route
  if (!req.session.logged_in) {
    res.redirect('/landing');
  } else {
    // If the user is logged in, render the welcome view with the main layout
    res.render('welcome', { layout: 'main' });
  }
});
  
  module.exports = withAuth;  
