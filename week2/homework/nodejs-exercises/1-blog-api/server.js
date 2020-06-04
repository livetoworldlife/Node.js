'use strict';
const express = require('express'),
  fs = require('fs'),
  path = require('path'),
  app = express(),
  hostname = 'localhost',
  port = process.env.PORT || 3000;

app.use(express.json());

// check post is valid or not
function isValid(req) {
  if (typeof req.body === "undefined" || typeof req.body.title === "undefined" || typeof req.body.content === "undefined") {
    return true;
  }
  return false;
}
// Create a basic Express setup, that has one endpoint (/).
app.all('/', (req, res) => {
  res.setHeader('Content-Type', 'text/html');
  res.status(200);
  res.send('This is a Blog page');
})

// Creating new posts 
app.post('/blogs', (req, res) => {
  if (isValid(req)) {
    res.status(400);
    res.send('invalid request');
    return;
  }
  const newBlog = {
    title: req.body.title,
    content: req.body.content
  };
  const title = `${newBlog.title}.html`;
  const content = `<html><body><p>${newBlog.content}</p></body></html>`;
  fs.writeFileSync(title, content);
  res.status(201);
  res.end('Created ok!')
})

// Updating existing posts 
app.put('/blogs', (req, res) => {
  if (isValid(req)) {
    res.status(400);
    res.send('invalid request');
    return;
  }
  const updateBlog = {
    title: req.body.title,
    content: req.body.content
  };
  const title = `${updateBlog.title}.html`;
  const content = `<html><body><p>${updateBlog.content}</p></body></html>`;
  if (fs.existsSync(title)) {
    fs.writeFileSync(title, content);
    res.end('Updated ok!')
    return;
  }
  res.status(404).end(`${title} post does not exist!`);
})

// Deleting posts
app.delete('/blogs/:title', (req, res) => {
  const title = `${req.params.title}.html`;
  if (fs.existsSync(title)) {
    fs.unlinkSync(title);
    res.end('Deleted ok!');
    return;
  }
  res.status(404).end(`${title} post does not exist!`);
})

// Reading posts
app.get('/blogs/:title', (req, res) => {
  const title = `${req.params.title}.html`;
  (fs.existsSync(title)) ? res.sendFile(path.join(__dirname, title)) : res.status(404).end(`${title} post does not exist!`);
})

// LISTEN TO APP.
app.listen(port, hostname, () => console.log(`Server is running at http://${hostname}:${port}/`));