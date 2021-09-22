const axios = require('axios'); 
const express = require('express')



       function      handleWeather (req,res) {

    let cityName = req.query.cityName
        

    let getData=`${process.env.WEATHER_SERVER_LINK}?city=${cityName}&key=${process.env.WEATHER_KEY}`

     try{  axios.get(getData).then((getResult) => {

      console.log(getResult)

  
  

      class Forecast {
          constructor(date1,description1,lat1,lon1){
      
          
          this.date=date1;
          this.description=description1;
          this.lat=lat1;
          this.lon=lon1;
          }

}



let cityWeather =  getResult.data.data.map(item=>{

return new Forecast(  item.valid_date,item.weather.description,getResult.data.lat,getResult.data.lon)
}

)
console.log(cityWeather)
res.send(cityWeather)
}    ) 


}
catch(error){
console.log('error from axios', error)
  res.send(error)
}

}


module.exports = handleWeather; 