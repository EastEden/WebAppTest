const express = require('express'),
  app = express(),
  cors = require('cors'),
  mysql = require('mysql2'),
  bodyParser = require('body-parser');

const contactRoute = require('./route/contactRoute');

db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'wshi321123w',
    database: 'address'
  })

var server = {
  port: 4040
};



// use the modules
app.use(cors())
app.use(bodyParser.json());

app.use('/contact', contactRoute);

// starting the server
app.listen( server.port , () => console.log(`Server started, listening ponrt: ${server.port}`));