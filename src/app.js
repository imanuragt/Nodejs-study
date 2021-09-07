const express = require('express');
const path = require('path');
const app = express();
const hbs = require('hbs');
const port = process.env.PORT || 3000;
const { getFiles } = require('./geoCode');
const viewPath = path.join(__dirname, './templates');
const pathPartial = path.join(__dirname, './partial');
app.use(express.static(viewPath));
app.set('view engine', 'hbs');
app.set('views', viewPath);
hbs.registerPartials(pathPartial);
// app.get('', (req, res) => {
//     res.render('index', {
//         title: 'Weather App',
//         page: 'Home',
//         name:'Anurag'
//     });
// });
app.get('/about', (rea, res) => {
    res.render('about', {
        title: 'About',
        page: 'About',
        name:'Sunny'
    });
});
app.get('/help',(err, res)=>{
    res.render('help', {
        title:'help',
        page:'Help',
        name:'Akt'
    });
});
app.get('/weather',(req,res)=>{
    if(!req.query.address){
        return res.send('Please enter valid address !');
    }
    getFiles.getgeoCode(req.query.address, (err, data) => {
    getFiles.getforeCast(data.langt, data.lat, (err, result) => {
        res.render('index', {
            description: result.description
        });
    });
});
})


app.get('/help/*',(req,res)=>{
    res.send('Nothing inside Help for search')
});
app.get('*', (req,res)=>{
    res.send('4O4 page');
});

app.listen(port, () => {
    console.log('Runing on port', port);
});