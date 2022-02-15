const express = require('express');
const path = require('path');

const app = express();
const PORT = 3030;

const controllers = require('./controllers/controllers');

app.get('*.js', (req, res, next) => {
  req.url += '.gz';
  res.set('Content-Encoding', 'gzip');
  next();
});
app.use(express.static(path.join(__dirname, '../public')));
app.use(express.json());
app.get('/pack', controllers.getPack);
app.get('/*', (req, res) => res.sendFile(path.join(__dirname, '../public/index.html')));

app.listen(PORT, () => console.log(`Listening to port... ${PORT}`));
