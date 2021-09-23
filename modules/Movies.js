const axios = require('axios'); 
const express = require('express')
let casheMemory ={};



function hundleMovies(req,res)

{

    let { cityName } = req.query;
  console.log(req.query)

 let getData=`${process.env.MOVIE_LINK}?api_key=${process.env.MOVIE_KEY}&query=${cityName}&language=de-DE&region=DE`

 if(casheMemory[cityName]!== undefined){
    res.send(casheMemory[cityName]);
        }
        else{
        try{   axios.get(getData).then(results =>{
    console.log(results.data)
    let movieArray = results.data.results.map(movie => new Movie(movie))
    console.log(movieArray)



    casheMemory[cityName]=movieArray;
    res.send(movieArray)

})
class Movie {
    constructor(movie) {
        this.title = movie.title;
        this.overview = movie.overview;
        this.averageVotes = movie.vote_average;
        this.totalVotes = movie.vote_count;
        this.imageUrl = 'https://image.tmdb.org/t/p/w500' + movie.poster_path;
        this.popularity = movie.popularity;
        this.releasedOn = movie.release_date;

    }
}
        }
        catch(error){
            console.log('error from axios', error)
              res.send(error)
            }}
}
module.exports = hundleMovies; 