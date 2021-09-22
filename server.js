'use strict'
const axios = require('axios');
const express = require('express');
const server = express();


require('dotenv').config();
const cors =require('cors')



server.use(cors())

const hundleMovies = require('./modules/Movies.js')
const handleWeather = require('./modules/Weather.js')






const PORT=process.env.PORT;

server.get('/', (req, res) => {
    res.send('home route')
})


     




server.get('/weather',handleWeather)







server.get('/movie',hundleMovies)







server.get('*',(req,res)=>{
    res.status(404).send('not found')
})






server.listen(PORT,()=>{
    console.log(`Listening on Port ${PORT}`)
})



