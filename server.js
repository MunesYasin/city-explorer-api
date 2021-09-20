'use strict'

const express = require('express');
const server = express();


require('dotenv').config();
const cors =require('cors')
const PORT=process.env.PORT;


server.use(cors())

const getData=require('./data/weather.json')


   


server.get('/weather',(req,res)=>{
        let cityName = req.query.cityName

        let cityInfo  = getData.find(item =>{
            if(item.city_name === cityName)
            return item
        })
        console.log(cityInfo)
        

            class Forecast {
                constructor(date1,description1,lat1,lon1){
            
                
                this.date=date1;
                this.description=description1;
                this.lat=lat1;
                this.lon=lon1;
                }
      

    }
    
    
    
    let cityWeather =  cityInfo.data.map(item=>{

     return new Forecast(  item.valid_date,item.weather.description,cityInfo.lat,cityInfo.lon)
    }
    
    )
 console.log(cityWeather)
    res.send(cityWeather)
        })
    





server.get('*',(req,res)=>{
    res.status(404).send('not found')
})






server.listen(PORT,()=>{
    console.log(`Listening on Port ${PORT}`)
})



