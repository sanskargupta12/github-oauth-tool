const express = require('express');
const router = express.Router();
const axios = require('axios');

router.get('/repositories', async (req, res) => {
  if (!req.isAuthenticated()) {
    return res.status(401).json({ message: 'Unauthorized' });
  }

  try {
    const response = await axios.get(`https://api.github.com/user/repos`, {
      headers: { Authorization: `token ${req.user.accessToken}` }
    });
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch repositories' });
  }
});

module.exports = router;
