const express = require('express');
const router = express.Router();
const {
  create: createBlog,
  read: readBlog,
  delete: deleteBlog,
  update: updateBlog,
} = require('../Controllers/blogController');

// Create
router.get('/blog/create', createBlog);

// Read
router.get('/blog/read', readBlog);

// Delete
router.get('/blog/delete', deleteBlog);

// Update
router.get('/blog/update', updateBlog);

// Repeat the same structure for other controllers and functions

module.exports = router;
