const express = require('express')
const app = express();
app.use(express.static(__dirname+'/public'));

const hbs = require('hbs');

require('./hbs/helpers');

const port = process.env.PORT || 3000;

// app engine express

hbs.registerPartials(__dirname + '/views/parciales');

app.set('view engine', 'hbs');
 
 
app.get('/', (req, res) => {
  res.render('home',{
    nombre: 'carlos loaiza hernandez',
  });
});

app.get('/about', (req, res) => {
  res.render('about');
});




 
app.listen(port,()=>{
  console.log(`escuchando peticiones en el puerto ${port}`);
})