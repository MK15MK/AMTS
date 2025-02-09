const express = require('express');
const path = require('path');
const app = express();

app.set('view engine', 'ejs');

app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.render('index');
});

app.get('/about', (req, res) => {
    res.render('about');
});

app.get('/projects', (req, res) => {
    res.render('projects');
});

app.get('/services', (req, res) => {
    res.render('services');
});

app.get('/contact', (req, res) => {
    res.render('contact');
});

const port = 3000;
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});
