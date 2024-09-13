const express = require('express');
const app = express();

app.get('/', (req, res) => { //Figure 2 Code for the Express application
    res.send('My New App!');
});

app.get('/api/heroes', (req, res) => { // Figure 3 Code for the resource
    res.send(['Superman', 'Iron Man', 'Batman', 'Hulk']);
});

app.get('/api/heroes/:id', (req, res) => { //Figure 4 Single params code
    res.send(req.params.id);
});

app.get('/api/heroes/:title/:publisher', (req, res) => { //Figure 5 Multi params code
    res.send(req.params);
});

app.get('/api/heroes/:title/:publisher', (req, res) => { //Figure 6 Query parameter code
    res.send([req.params, req.query]);
});




app.listen(3000, () => console.log('Listening on port 3000'));