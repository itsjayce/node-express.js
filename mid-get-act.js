const express = require('express');
const app = express();


//HTTP Get request 
//array for the GET method
const movies = [{ // Figure 7 Array for the GET method
    id: 1,
    title: "Superman"
},
{
    id: 2,
    title: "Thor"
},
{
    id: 3,
    title: "Iron Man"
}]; 

//get all movies
app.get('/api/movies', (req, res) => { //Figure 8 Get all movies
    res.send(movies);
});

//get movies by id
app.get('/api/movies/:id', (req, res) => {  //Figure 9
    const movie = movies.find(h => h.id === parseInt (req.params.id));
    if (!movie) return res.status(404).send('The movie with the given ID was not found.');
    res.send(movie);
});

app.listen(4000, () => console.log('Listening on port 4000'));