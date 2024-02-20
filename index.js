import express from 'express';

const app = express();

app.get('/api/url', (req, res) => {
  res.redirect('https://www.youtube.com/watch?v=dQw4w9WgXcQ');
});

app.use(express.static('public'));

app.listen(process.env.PORT || 3000, () => {
  console.log('Server is running on port =>', process.env.PORT || 3000);
});
