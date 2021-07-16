const express = require('express');
const expressLayout = require('express-ejs-layouts');
const morgan = require('morgan');
const app = express();
const port = 3000;

// menggunakan ejs sbg view engine
app.set('view engine', 'ejs');
// third-party middleware
app.use(expressLayout);
app.use(morgan('dev'));
// built in middleware
app.use(express.static('public'))

// application level middleware
app.use((req, res, next) => {
    console.log('Time: ', Date.now());
    next();
});

app.use((req, res, next) => {
    console.log('Ini Middleware ke-2');
    next();
});

app.get('/', (req, res) => {
    //res.sendFile('./index.html', { root: __dirname });
    const mahasiswa = [
    {
        nama: 'Rexy',
        npm: '1811312'
    },
    {
        nama: 'Ridho',
        npm: '1831211'
    },
    {
        nama: 'Fachrul',
        npm: '1841231'
    }]

    res.render('index', {
        title: 'Halaman Index',
        layout: 'layouts/main-layout',
        nama: 'Rexy Fahrezi',
        mahasiswa: mahasiswa
    });
});

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'about',
        layout: 'layouts/main-layout'
    });
});

app.get('/contact', (req, res) => {
    res.render('contact', {
        title: 'contact',
        layout: 'layouts/main-layout'
    });
});

app.get('/product/:id/', (req, res) => {
    res.send(`Product ID: ${req.params.id}<br> Category: 
    ${req.query.category}`);
})

app.use('/', (req, res) => {
    res.status(404);
    res.send('<h1>404</h1>');
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});