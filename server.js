const express = require('express');
const favicon = require('express-favicon');
const morgan = require('morgan');
const path = require('path');
const port = process.env.PORT || 8080;
const app = express();
app.use(favicon(__dirname + '/shopmate/favicon.ico'));
// the __dirname is the current directory from where the script is running
app.use(express.static(__dirname));
app.use(express.static(path.join(__dirname, 'shopmate')));
app.use(express.static(path.join(__dirname, 'shopmate', 'static')));
app.use(morgan('combined'))
app.get('*', function (req, res) {
  res.sendFile(path.resolve(__dirname, 'shopmate', 'index.html'));
});
app.listen(port, ()=>console.log("Server running on ", port));
