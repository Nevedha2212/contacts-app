const express = require('express');
const bodyParser = require('body-parser');
const contact = require('./routes/contact.route');

const app = express();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
const mongoose = require('mongoose');

mongoose.connect('mongodb://test12:test12@ds161653.mlab.com:61653/contacts', { useNewUrlParser: true, useCreateIndex: true });
mongoose.Promise = global.Promise;

let db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));


app.use('/contacts', contact);

const port = 8080;

app.listen(port,() => {
  console.log("server is up and running on port number"+ port)
});
