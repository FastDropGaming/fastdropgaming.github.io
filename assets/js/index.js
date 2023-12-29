const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(__dirname))

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + '/index.html'));
});

app.listen(3000, () => {
  console.log('Online!');
});


const bodyParser = require('body-parser');
const fs = require('fs')

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.set('trust proxy', true);


app.use((req, res, next) => {
    console.log(req.ip || req.ips)
    next()
    // roba
})

app.get('/bananonz-wrapper', (req, res) => {
  res.sendFile(path.join(__dirname + '/bananonz-wrapper.html'));
});