const express = require('express');
const router = express.Router();

const users = require('../data/users');
const posts = require('../data/posts');
const comments = require('../data/comments');

// GET /api/posts/:id/comments
router.get('/:id/comments', (req, res) => {
  const post = posts.find(p => p.id === req.params.id);
  if (!post) return res.status(404).json({ error: 'Post not found' });

  const postComments = comments
    .filter(comment => comment.postId === req.params.id)
    .map(comment => {
      const user = users.find(u => u.id === comment.userId);
      return {
        content: comment.content,
        fullName: user ? user.fullName : 'Unknown User'
      };
    });

  res.json({ postTitle: post.title, comments: postComments });
});

module.exports = router;
