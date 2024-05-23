const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

let posts = [];

app.get('/api/posts', (req, res) => {
  res.json(posts);
});

app.post('/api/posts', (req, res) => {
  const postContent = req.body.content;
  if (postContent.trim() !== '') {
    posts.push(postContent);
    res.status(201).json({ message: 'Post created' });
  } else {
    res.status(400).json({ message: 'Post content cannot be empty' });
  }
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});