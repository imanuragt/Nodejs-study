const express = require('express');
const path = require('path');
const app = express();
const pathLoacation = path.join(__dirname, '../views');
app.use(express.static(pathLoacation));
app.set('view engine', 'hbs');
app.get('', (req, res) => {
    res.render('index', {
        title:'Weather App',
        page:'Home page'
    }); 
}); 
app.get('/about', (rea, res) => {
    res.send('<h1>About Page <h1>')
});
app.listen(3000, () => {
    console.log('Runing on port 3000');
})