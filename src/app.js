const express = require('express');
const path = require('path');
const app = express();
const viewPath = path.join(__dirname, './templates');
// const pathLoacation = path.join(__dirname, '../views');

app.use(express.static(viewPath));
app.set('view engine', 'hbs');
app.set('views', viewPath);
app.get('', (req, res) => {
    res.render('index', {
        title: 'Weather App',
        page: 'Home page'
    });
});
app.get('/about', (rea, res) => {
    res.render('about', {
        title: 'About',
        About: 'About'
    });
});
app.listen(3000, () => {
    console.log('Runing on port 3000');
})