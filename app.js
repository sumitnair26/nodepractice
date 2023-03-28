const { application } = require('express');
const express = require('express');
const { readdirSync } = require('fs');

//express app
const app = express();

//register view engine
app.set('view engine', 'ejs');

//listen for requests
app.listen(3000);

app.get('/', (req, res) => {
    //res.send('<p> Home </p>');
    //res.sendFile('./views/index.html', { root: __dirname });
    res.render('index', { title: 'Home'});
});

app.get('/about', (req, res) => {
    //res.send('<p> About </p>');
    //res.sendFile('./views/about.html', { root: __dirname });
    res.render('about', { title: 'About'});
});

//redirects
app.get('/about-us', (req, res) => {
    res.redirect('/about');
});

app.get('/blogs/create', (req, res)=> {
    res.render('create', { title: 'Create'});
});

//404 pages
app.use((req, res)=>{
    //res.sendFile('./views/404.html', { root: __dirname });
    res.status(404).render('404', { title: '404'});
});