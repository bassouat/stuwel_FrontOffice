const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const stuffRoutes = require('./routes/stuff');
const app = express();



// mongodb://uveq9m1ypwyl8akr9piu:FwvJh88Rest25GD7huVA@btqphkqnwhbsvjm-mongodb.services.clever-cloud.com:27017/btqphkqnwhbsvjm
mongoose.connect('mongodb+srv://basseydou:reussite2021@cluster0.eor5a.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
  { useNewUrlParser: true,
    useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
  });

  app.use(bodyParser.json());

app.use('/api/stuff', stuffRoutes);

module.exports=app;


