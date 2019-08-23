import Geolocation from 'react-native-geolocation-service';


const getLocation = new Promise(function(resolve,reject){

    Geolocation.getCurrentPosition(
      (position) => {
        var pos = [
          position.coords.latitude,
          position.coords.longitude
        ]
          resolve(pos)
      },
      (error) => {
         reject(null)
      },
      { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
  
    )
  })
  export default getLocation
  
  