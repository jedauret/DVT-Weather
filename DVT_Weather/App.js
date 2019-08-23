import React,{Component} from 'react';
import {
  Dimensions,
  View,
} from 'react-native';
import NetInfo from "@react-native-community/netinfo";
import Permissions from 'react-native-permissions';


import GetLocation from './services/LocationService'
import {getForcast,getCurrentWeather} from './services/WeatherService'
import {getDays} from './utilities/Dates'
import Portrait from './components/portrait'
import Landscape from './components/landscape'
import Loading from './components/loading'
import { awaitExpression } from '@babel/types';

var background_forest_cloudy = require('./assets/Images/forest_cloudy.png')
var background_forest_rainy= require('./assets/Images/forest_rainy.png')
var background_forest_sunny = require('./assets/Images/forest_sunny.png')

var background_sea_cloudy = require('./assets/Images/sea_cloudy.png')
var background_sea_rainy = require('./assets/Images/sea_rainy.png')
var background_sea_sunny = require('./assets/Images/sea_sunny.png')

var backgroundColor_forest_sunny = '#47AB2F'
var backgroundColor_forest_rainy = '#57575D'
var backgroundColor_forest_cloudy = '#54717A'

var backgroundColor_sea_sunny = '#FEC37C'
var backgroundColor_sea_rainy = '#686868'
var backgroundColor_sea_cloudy = '#748A82'

var icon_clear = require('./assets/Icons/clear.png')
var icon_partlysunny = require('./assets/Icons/partlysunny.png')
var icon_rain = require('./assets/Icons/rain.png')



export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    forest:true,
    landscape:false,
    internet:true,
    minTemp:'',
    maxTemp:'',
    currentTemp:'',
    description:'',
    backgroundColor:'',
    backgroundImage:'',
    day1:'',
    day2:'',
    day3:'',
    day4:'',
    day5:'',
    day1_Icon:'',
    day2_Icon:'',
    day3_Icon:'',
    day4_Icon:'',
    day5_Icon:'',
    day1_Temp:'',
    day2_Temp:'',
    day3_Temp:'',
    day4_Temp:'',
    day5_Temp:'',
    isbusy:false,
    locationPermission:'',
    
    }
  }

  onLayout(e) {
    const {width, height} = Dimensions.get('window')
    width>height?this.setState({landscape:true}):this.setState({landscape:false})
  }
 
  
   componentDidMount()
  {

    Permissions.check('location').then(response => {
      if(response == 'denied'||response=='undetermined')
      {
        alert('Please grant location permissions in settings and restart the app')
      }
      else{this.refresh()}
    })

  }

 

  switchTheme()
  {
    this.state.forest == true ?
    this.setState({forest:false})
    :
    this.setState({forest:true})

    this.refresh()
  }
  refresh()
  {
    Permissions.check('location').then(response => {
      if(response == 'denied'||response=='undetermined')
      {
        alert('Please grant location permissions in settings and restart the app')
      }

    NetInfo.fetch().then(state => {
      this.setState({internet:state.isConnected})
   
    if(this.state.internet==true){
    this.setState({isbusy:true})

    getDays.then(value => {
      this.setState({
        day1:value[1],
        day2:value[2],
        day3:value[3],
        day4:value[4],
        day5:value[5]
      })
    })

    GetLocation.then(value => {
      getCurrentWeather(value[0],value[1]).then(value =>{
        minTemp = value[0]
        maxTemp = value[1]
        currentTemp = value[2]
        description01 = value[3]
        description02= value[4]

      if(description01 == '2' || description01 == '3' || description01 == '5' || description01== '6')
      {
        if(this.state.forest)
        this.setState({
          description:'RAINY',
          backgroundColor:backgroundColor_forest_rainy,
          backgroundImage:background_forest_rainy
        })
        else
        this.setState({
          description:'RAINY',
          backgroundColor:backgroundColor_sea_rainy,
          backgroundImage:background_sea_rainy
        })
      }

      if(description02 == '800')
      {
        
        if(this.state.forest)
        this.setState({
          description:'SUNNY',
          backgroundColor:backgroundColor_forest_sunny,
          backgroundImage:background_forest_sunny
        })
        else
        this.setState({
          description:'SUNNY',
          backgroundColor:backgroundColor_sea_sunny,
          backgroundImage:background_sea_sunny
        })

      }

      else
      {
        if(this.state.forest)
        this.setState({
          description:'CLOUDY',
          backgroundColor:backgroundColor_forest_cloudy,
          backgroundImage:background_forest_cloudy
        })
        else
        this.setState({
          description:'CLOUDY',
          backgroundColor:backgroundColor_sea_cloudy,
          backgroundImage:background_sea_cloudy
        })
      }
        this.setState({
          minTemp:value[0],
          maxTemp:value[1],
          currentTemp:value[2],
        })
      })

      getForcast(value[0],value[1]).then(value =>{
        day1Description1 = value[5]
        day1Description2 = value[6]
        if(day1Description1 == '2' || day1Description1 == '3' || day1Description1=='5' ||day1Description1 == '6')
        {this.setState({day1_Icon:icon_rain})}
        if(day1Description2 == '800')
        {this.setState({day1_Icon:icon_clear})}
        else{this.setState({day1_Icon:icon_partlysunny})}


        day2Description1 = value[7]
        day2Description2 = value[8]
        if(day2Description1 == '2' || day2Description1 == '3' || day2Description1=='5' ||day2Description1 == '6')
        {this.setState({day2_Icon:icon_rain})}
        if(day2Description2 == '800')
        {this.setState({day2_Icon:icon_clear})}
        else{this.setState({day2_Icon:icon_partlysunny})}


        day3Description1 = value[9]
        day3Description2 = value[10]
        if(day3Description1 == '2' || day3Description1 == '3' || day3Description1=='5' ||day3Description1 == '6')
        {this.setState({day3_Icon:icon_rain})}
        if(day3Description2 == '800')
        {this.setState({day3_Icon:icon_clear})}
        else{this.setState({day3_Icon:icon_partlysunny})}


        day4Description1 = value[11]
        day4Description2 = value[12]
        if(day4Description1 == '2' || day4Description1 == '3' || day4Description1=='5' ||day4Description1 == '6')
        {this.setState({day4_Icon:icon_rain})}
        if(day4Description2 == '800')
        {this.setState({day4_Icon:icon_clear})}
        else{this.setState({day4_Icon:icon_partlysunny})}


        day5Description1 = value[13]
        day5Description2 = value[14]
        if(day5Description1 == '2' || day5Description1 == '3' || day5Description1=='5' ||day5Description1 == '6')
        {this.setState({day5_Icon:icon_rain})}
        if(day5Description2 == '800')
        {this.setState({day5_Icon:icon_clear})}
        else{this.setState({day5_Icon:icon_partlysunny})}




        this.setState({
          day1_Temp:value[0],
          day2_Temp:value[1],
          day3_Temp:value[2],
          day4_Temp:value[3],
          day5_Temp:value[4],
          isbusy:false


        })
      })
     
    })
  }
  else
  {
    alert('Please connect to the internet')
  }
})
})
  }




  render()
  {
  return (
<View style={{flex:1}} onLayout={this.onLayout.bind(this)}>

{this.state.isbusy?
<Loading/>

:

this.state.landscape?

<Landscape
  refreshButton={this.refresh.bind(this)}
  themeButton={this.switchTheme.bind(this)}
  minTemp={this.state.minTemp}
  maxTemp={this.state.maxTemp}
  currentTemp={this.state.currentTemp}
  description={this.state.description}
  backgroundColor={this.state.backgroundColor}
  backgroundImage={this.state.backgroundImage}
  day1={this.state.day1}
  day2={this.state.day2}
  day3={this.state.day3}
  day4={this.state.day4}
  day5={this.state.day5}
  day1_Icon={this.state.day1_Icon}
  day2_Icon={this.state.day2_Icon}
  day3_Icon={this.state.day3_Icon}
  day4_Icon={this.state.day4_Icon}
  day5_Icon={this.state.day5_Icon}
  day1_Temp={this.state.day1_Temp}
  day2_Temp={this.state.day2_Temp}
  day3_Temp={this.state.day3_Temp}
  day4_Temp={this.state.day4_Temp}
  day5_Temp={this.state.day5_Temp}/> 
:
<Portrait
  refreshButton={this.refresh.bind(this)}
  themeButton={this.switchTheme.bind(this)}
  minTemp={this.state.minTemp}
  maxTemp={this.state.maxTemp}
  currentTemp={this.state.currentTemp}
  description={this.state.description}
  backgroundColor={this.state.backgroundColor}
  backgroundImage={this.state.backgroundImage}
  day1={this.state.day1}
  day2={this.state.day2}
  day3={this.state.day3}
  day4={this.state.day4}
  day5={this.state.day5}
  day1_Icon={this.state.day1_Icon}
  day2_Icon={this.state.day2_Icon}
  day3_Icon={this.state.day3_Icon}
  day4_Icon={this.state.day4_Icon}
  day5_Icon={this.state.day5_Icon}
  day1_Temp={this.state.day1_Temp}
  day2_Temp={this.state.day2_Temp}
  day3_Temp={this.state.day3_Temp}
  day4_Temp={this.state.day4_Temp}
  day5_Temp={this.state.day5_Temp}/> 
}
  </View>
  
  )}
}
console.disableYellowBox=true