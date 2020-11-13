const express = require('express');
const app = express();

app.get('/', function(req, res){
  res.send('Mi Aplicación con Node');
});

app.listen(4000, () => console.log('Express ejecutándose en localhost:4000') );