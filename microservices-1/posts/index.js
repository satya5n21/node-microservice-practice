const express = require('express');
const { randomBytes } = require('crypto');

const app = express();
app.use(express.json());

const posts = {};

app.get('/posts', (req, res) => {
  res.send(posts);
});

app.post('/posts', (req, res) => {
  const id = randomBytes(4).toString('hex');
  const { title } = req.body;

  if (!title) {
    return res.status(400).json({
      status: 0,
      message: "Please provide a valid title!!"
    })
  }

  posts[id] = {
    id, title
  };

  res.status(201).send(posts[id]);
});

const PORT = 4000; // posts service
app.listen(PORT, () => {
  console.log("Listening on PORT:", PORT);
})