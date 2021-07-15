const http = require('http');
const fs = require('fs');


const renderHTML = (path, res) => {
    fs.readFile(path, (err, data) => {
        if(err){
            res.writeHead(404);
            res.write('Error: file not found');
        } else {
            res.write(data);
        }
        res.end();
    });
}

const server = http.createServer((req, res) => {
    res.writeHead(200, {
        'Content-Type' : 'text/html',
    });

    const url = req.url;
    
    switch(url){
        case '/about':
            renderHTML('about.html', res);
            break;
        case '/contact':
            res.write('<h1>Ini Contact</h1>');    
            res.end();
            break;
        default:
            renderHTML('index.html', res);
            break;
    }


    // if (url === '/about') {
    //     renderHTML('about.html', res);
    // } else if (url === '/contact') {
    //     res.write('<h1>Ini Contact</h1>');    
    //     res.end();
    // } else {
    //     renderHTML('index.html', res);
    // }

    console.log(url);
});

server.listen(3000, () => {
    console.log('listening on port 3000');
});