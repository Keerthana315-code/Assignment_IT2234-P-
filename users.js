const express = require('express');
const router = express.Router();

const users = require('../data/users');
const posts = require('../data/posts');
const comments = require('../data/comments');

// GET /api/users/:id/summary
router.get('/:id/summary', (req, res) => {
  const user = users.find(u => u.id === req.params.id);
  if (!user) return res.status(404).json({ error: 'User not found' });

  const userPosts = posts.filter(p => p.authorId === user.id);
  const userComments = comments.filter(c => c.userId === user.id);

  res.json({
    id: user.id,
    fullName: user.fullName,
    totalPosts: userPosts.length,
    totalComments: userComments.length
  });
});

module.exports = router;
