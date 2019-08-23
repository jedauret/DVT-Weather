import { getDates } from "../utilities/Dates";




export const getForcast = function(lat, lon) {
  return new Promise(function(resolve, reject) {
    fetch('http://api.openweathermap.org/data/2.5/forecast?lat='+
    lat+'&lon='+lon+
    '&appid=c2e452a1334e0db0a7a5bd355538fa73&units=metric')
    .then((response) => response.json())
    .then((responseJson) => {
      getDates.then(value => {
        var dates = value
        var data = responseJson
        var dataLength = data['list'].length
        var Day1Temp =  0
        var Day2Temp = 0
        var Day3Temp = 0
        var Day4Temp = 0
        var Day5Temp = 0
        var x1 = 0
        var x2 = 0
        var x3 = 0
        var x4 = 0
        var x5 = 0


        for(i=0;i<=dataLength-1;i++)
        {
          if(dates[0] == data['list'][i]['dt_txt'].substr(0,data['list'][i]['dt_txt'].indexOf(':')-3))
          {
             x1 = x1+1
             Day1Temp = Day1Temp+data['list'][i]['main']['temp']
             Day1Code = data['list'][i]['weather'][0]['id']


          }

          if(dates[1] == data['list'][i]['dt_txt'].substr(0,data['list'][i]['dt_txt'].indexOf(':')-3))
          {
             x2 = x2+1
             Day2Temp = Day2Temp+data['list'][i]['main']['temp']
             Day2Code = data['list'][i]['weather'][0]['id']

          }

          if(dates[2] == data['list'][i]['dt_txt'].substr(0,data['list'][i]['dt_txt'].indexOf(':')-3))
          {
             x3 = x3+1
             Day3Temp = Day3Temp+data['list'][i]['main']['temp']
             Day3Code = data['list'][i]['weather'][0]['id']

          }

          if(dates[3] == data['list'][i]['dt_txt'].substr(0,data['list'][i]['dt_txt'].indexOf(':')-3))
          {
             x4 = x4+1
             Day4Temp = Day4Temp+data['list'][i]['main']['temp']
             Day4Code = data['list'][i]['weather'][0]['id']

          }

          if(dates[4] == data['list'][i]['dt_txt'].substr(0,data['list'][i]['dt_txt'].indexOf(':')-3))
          {
             x5 = x5+1
             Day5Temp = Day5Temp+data['list'][i]['main']['temp']
             Day5Code = data['list'][i]['weather'][0]['id']

          }



        }

        Day1Temp = Math.trunc(Day1Temp/x1)
        Day2Temp = Math.trunc(Day2Temp/x2)
        Day3Temp = Math.trunc(Day3Temp/x3)
        Day4Temp = Math.trunc(Day4Temp/x4)
        Day5Temp = Math.trunc(Day5Temp/x5)
        Day1Code1 = JSON.stringify(Day1Code).substr(0,1)
        Day1Code2 = JSON.stringify(Day1Code).substr(0,3)
        Day2Code1 = JSON.stringify(Day2Code).substr(0,1)
        Day2Code2 = JSON.stringify(Day2Code).substr(0,3)
        Day3Code1 = JSON.stringify(Day3Code).substr(0,1)
        Day3Code2 = JSON.stringify(Day3Code).substr(0,3)
        Day4Code1 = JSON.stringify(Day4Code).substr(0,1)
        Day4Code2 = JSON.stringify(Day4Code).substr(0,3)
        Day5Code1 = JSON.stringify(Day5Code).substr(0,1)
        Day5Code2 = JSON.stringify(Day5Code).substr(0,3)



        var forecast=
        [
          Day1Temp,
          Day2Temp,
          Day3Temp,
          Day4Temp,
          Day5Temp,
          Day1Code1,
          Day1Code2,
          Day2Code1,
          Day2Code2,
          Day3Code1,
          Day3Code2,
          Day4Code1,
          Day4Code2,
          Day5Code1,
          Day5Code2
        ]
        resolve(forecast)

    
      })
    

    })
    .catch((error) => {
        reject(error)
    });
  });
}


export const getCurrentWeather = function(lat, lon) {

  return new Promise(function(resolve, reject) {
    fetch('http://api.openweathermap.org/data/2.5/weather?lat='
    +lat+'&lon='+lon+'&appid=c2e452a1334e0db0a7a5bd355538fa73&units=metric')
    .then((response) => response.json())
    .then((responseJson) => {

      description01 = (JSON.stringify(responseJson['weather'][0]['id'])).substr(0,1)
      description02 = (JSON.stringify(responseJson['weather'][0]['id'])).substr(0,3)
      currentTemp = Math.trunc(responseJson['main']['temp'])
      maxTemp = Math.trunc(responseJson['main']['temp_max'])
      minTemp = Math.trunc(responseJson['main']['temp_min'])
      var weatherObj =
      [
        minTemp,
        maxTemp,
        currentTemp,
        description01,
        description02,
      ]
      
        

        resolve(weatherObj)

    })
    .catch(() => {
        reject(null)
    });
}
  )}