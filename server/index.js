const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

const controllers = require('./controllers/controllers');

app.use(express.static(path.join(__dirname, '../public')));
app.use(express.json());
app.get('/home', (req, res) => res.sendFile(path.join(__dirname, '../public/index.html')));
app.get('/pack', controllers.getPack);

app.listen(PORT, () => console.log(`Listening to port... ${PORT}`));
