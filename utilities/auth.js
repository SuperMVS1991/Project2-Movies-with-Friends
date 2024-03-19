const withAuth = (req, res, next) => {
  // If the user isn't logged in, redirect them to the landing route
  if (!req.session.logged_in) {
    res.render('landing', { layout: 'main-withoutauth' });
  } else {
    // If the user is logged in, render the welcome view with the main layout
    res.render('welcome', { layout: 'main' });
  }
};

module.exports = withAuth;
