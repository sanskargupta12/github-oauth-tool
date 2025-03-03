const express = require('express');
const passport = require('passport');
const router = express.Router();

// GitHub login route
router.get('/github', passport.authenticate('github', { scope: ['user', 'repo'] }));

// GitHub OAuth callback route
router.get('/github/callback',
  passport.authenticate('github', { failureRedirect: 'http://localhost:5000' }),
  (req, res) => {
    res.redirect('http://localhost:5000');
  }
);

// Get authenticated user
router.get('/user', (req, res) => {
  if (req.isAuthenticated()) {
    res.json({ user: req.user });
  } else {
    res.status(401).json({ message: 'Unauthorized' });
  }
});

// Logout route
router.get('/logout', (req, res) => {
  req.logout(err => {
    if (err) return res.status(500).json({ error: 'Logout failed' });
    req.session.destroy();
    res.redirect('http://localhost:5000');
  });
});

module.exports = router;
