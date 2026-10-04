require('dotenv').config()
const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Haha Noob!');
});

app.get('/twitter', (req, res) =>{
res.send('Hi, User  how are you')
});
app.get('/login', (req, res) =>{
res.send('<h1>Plese login at website</h1>')
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`);
});

