const express = require('express');
const app = express();

app.set('view engine', 'ejs');
app.use(express.static('public')); 

app.get('/', (req, res) => {
  res.render('home', {name: 'Ali Ramazani'});
});

app.get('/creativespace', (req, res) =>{
  res.render('creativespace', {name: 'Ali Ramazani'});
});

app.get('/diversity', (req, res) => {
  res.render('diversity', {name: 'Ali Ramazani'});
});

app.get('/meet-tas', (req, res) => {
  res.render('meet-tas');  
})

app.get('/clubs', (req, res) => {
  res.render('clubs');
})

app.get('/career-development', (req, res) => {
  res.render('career-development');
})

app.listen(3000, () => {
  console.log('listening on port 3000');
  console.log('http://localhost:3000');
})