import PropTypes from 'prop-types';
import React,{Component} from 'react';
import {
  ImageBackground,
  Dimensions,
  View,
  Text,
  Image,
  TouchableOpacity
} from 'react-native';
var icon_refresh = require('../assets/Icons/refresh.png')

 class Landscape extends Component {

  static propTypes = {
    refreshButton:PropTypes.any.isRequired,
    themeButton:PropTypes.any.isRequired,
    minTemp:PropTypes.any.isRequired,
    maxTemp:PropTypes.any.isRequired,
    currentTemp:PropTypes.any.isRequired,
    description:PropTypes.any.isRequired,
    backgroundColor:PropTypes.any.isRequired,
    backgroundImage:PropTypes.any.isRequired,
    day1:PropTypes.any.isRequired,
    day2:PropTypes.any.isRequired,
    day3:PropTypes.any.isRequired,
    day4:PropTypes.any.isRequired,
    day5:PropTypes.any.isRequired,
    day1_Icon:PropTypes.any.isRequired,
    day2_Icon:PropTypes.any.isRequired,
    day3_Icon:PropTypes.any.isRequired,
    day4_Icon:PropTypes.any.isRequired,
    day5_Icon:PropTypes.any.isRequired,
    day1_Temp:PropTypes.any.isRequired,
    day2_Temp:PropTypes.any.isRequired,
    day3_Temp:PropTypes.any.isRequired,
    day4_Temp:PropTypes.any.isRequired,
    day5_Temp:PropTypes.any.isRequired,
    }


    render()
    {
      const {
        refreshButton,
        themeButton,
        minTemp,
        maxTemp,
        currentTemp,
        description,
        backgroundColor,
        backgroundImage,
        day1,
        day2,day3,day4,day5,
        day1_Icon,
        day1_Temp,
        day2_Icon,
        day2_Temp,
        day3_Icon,
        day3_Temp,
        day4_Icon,
        day4_Temp,
        day5_Icon,
        day5_Temp 
    } = this.props;
    
        return(
          <View style={{flex:1,flexDirection:'row'}}>
            <View
            style={{flex:1,backgroundColor:backgroundColor}}
            >
            <ImageBackground 
          
          source={backgroundImage} 
          style={{
          justifyContent:'center',
          width:Dimensions.get('screen').width/2,
          height:Dimensions.get('screen').height}}
          imageStyle={{resizeMode:'stretch',marginTop:-80}}>
         <View style={{paddingBottom:Dimensions.get('window').width/4}}>
        <Text style={{
           fontSize:Dimensions.get('screen').height/7,
           color:'white',
           textAlign:'center',
           fontWeight:'bold'
           }}>{currentTemp +'\u00B0'}</Text>
        
        <Text style={{
           fontSize:Dimensions.get('screen').height/10,
           color:'white',
           textAlign:'center',
           }}>{description}</Text>
           </View>
          </ImageBackground>

          <View style={{
            flexDirection:'row',
            width:Dimensions.get('screen').width/2,
            height:55,
            marginTop:-80,
            justifyContent:'space-between',
            paddingHorizontal:20}}>
            
            <View>
              <Text style={{textAlign:'center',fontWeight:'bold',color:'white',fontSize:Dimensions.get('screen').height/20,}}>{minTemp+'\u00B0'}</Text>
              <Text style={{textAlign:'center',color:'white',fontSize:Dimensions.get('screen').height/25,}}>min</Text>
            </View>
        
            <View>
              <Text style={{textAlign:'center',fontWeight:'bold',color:'white',fontSize:Dimensions.get('screen').height/20,}}>{currentTemp+'\u00B0'}</Text>
              <Text style={{textAlign:'center',color:'white',fontSize:Dimensions.get('screen').height/25,}}>Current</Text>
            </View>
            
            <View>
              <Text style={{textAlign:'center',fontWeight:'bold',color:'white',fontSize:Dimensions.get('screen').height/20,}}>{maxTemp+'\u00B0'}</Text>
              <Text style={{textAlign:'center',color:'white',fontSize:Dimensions.get('screen').height/25,}}>max</Text>
            </View>
        
        </View>
        
          </View>
          <View style={{width:2,backgroundColor:'white'}}/>

          <View style={{flex:1,backgroundColor:backgroundColor,justifyContent:'center'}}>

            <View style={{marginTop:-40,flexDirection:'row',height:40,alignItems:'center',justifyContent:'space-between'}}>
              <TouchableOpacity 
              style={{
              marginLeft:10,width:100,height:30,
              }}
              onPress = {themeButton}
              > 
              <Text 
              style={{
                borderRadius:15,
                alignItems:'center',
                textAlignVertical:'center',
                lineHeight:25,
                width:100,
                height:30,
                borderColor:'black',
                borderWidth:2,
                fontSize:12,
                color:'black',
                textAlign:'center',
              }}>Switch Theme</Text>
              </TouchableOpacity> 

              <TouchableOpacity 
              onPress = {refreshButton}
              style={{
              justifyContent:'center',
              marginRight:10,width:40,height:40,
              }}> 
              <Image 
              style={{height:30,width:30}}
              source={icon_refresh}/>
              </TouchableOpacity> 
              </View>

          <View style={{
            flexDirection:'row',
            height:50,
            
            justifyContent:'space-between',
            paddingHorizontal:20}}>
            
            <View style={{width:Dimensions.get('screen').height/3,justifyContent:'center'}}>
              <Text style={{fontWeight:'bold',color:'white',fontSize:Dimensions.get('screen').height/20,}}>{day1}</Text>
            </View>
        
            <View style={{width:Dimensions.get('screen').height/5,justifyContent:'center'}}>
              <Image source={day1_Icon}
              style={{alignSelf:'center',height:Dimensions.get('screen').height/12,width:Dimensions.get('screen').height/12,resizeMode:'contain'}}/>
            </View>
            
            <View style={{width:Dimensions.get('screen').height/3,justifyContent:'center',paddingRight:40}}>
              <Text style={{textAlign:'right',fontWeight:'bold',color:'white',fontSize:Dimensions.get('screen').height/20,}}>{day1_Temp+'\u00B0'}</Text>
            </View>
        
        </View>
        
        <View style={{
            flexDirection:'row',
            height:50,
            justifyContent:'space-between',
            paddingHorizontal:20}}>
            
            <View style={{width:Dimensions.get('screen').height/3,justifyContent:'center'}}>
              <Text style={{fontWeight:'bold',color:'white',fontSize:Dimensions.get('screen').height/20,}}>{day2}</Text>
            </View>
        
            <View style={{width:Dimensions.get('screen').height/5,justifyContent:'center'}}>
              <Image source={day2_Icon}
              style={{alignSelf:'center',height:Dimensions.get('screen').height/12,width:Dimensions.get('screen').height/12,resizeMode:'contain'}}/>
              </View>
            
            <View style={{width:Dimensions.get('screen').height/3,justifyContent:'center',paddingRight:40}}>
              <Text style={{textAlign:'right',fontWeight:'bold',color:'white',fontSize:Dimensions.get('screen').height/20,}}>{day2_Temp+'\u00B0'}</Text>
            </View>
        
        </View>
        
        <View style={{
            flexDirection:'row',
            height:50,
            justifyContent:'space-between',
            paddingHorizontal:20}}>
            
            <View style={{width:Dimensions.get('screen').height/3,justifyContent:'center'}}>
              <Text style={{fontWeight:'bold',color:'white',fontSize:Dimensions.get('screen').height/20,}}>{day3}</Text>
            </View>
        
            <View style={{width:Dimensions.get('screen').height/5,justifyContent:'center'}}>
              <Image source={day3_Icon}
              style={{alignSelf:'center',height:Dimensions.get('screen').height/12,width:Dimensions.get('screen').height/12,resizeMode:'contain'}}/>
              </View>
            
            <View style={{width:Dimensions.get('screen').height/3,justifyContent:'center',paddingRight:40}}>
              <Text style={{textAlign:'right',fontWeight:'bold',color:'white',fontSize:Dimensions.get('screen').height/20,}}>{day3_Temp+'\u00B0'}</Text>
            </View>
        
        </View>
        
        <View style={{
            flexDirection:'row',
            height:50,
            justifyContent:'space-between',
            paddingHorizontal:20}}>
            
            <View style={{width:Dimensions.get('screen').height/3,justifyContent:'center'}}>
              <Text style={{fontWeight:'bold',color:'white',fontSize:Dimensions.get('screen').height/20,}}>{day4}</Text>
            </View>
        
            <View style={{width:Dimensions.get('screen').height/5,justifyContent:'center'}}>
              <Image source={day4_Icon}
              style={{alignSelf:'center',height:Dimensions.get('screen').height/12,width:Dimensions.get('screen').height/12,resizeMode:'contain'}}/>
              </View>
            
            <View style={{width:Dimensions.get('screen').height/3,justifyContent:'center',paddingRight:40}}>
              <Text style={{textAlign:'right',fontWeight:'bold',color:'white',fontSize:Dimensions.get('screen').height/20,}}>{day4_Temp+'\u00B0'}</Text>
            </View>
        
        </View>
        
        <View style={{
            flexDirection:'row',
            height:50,
            justifyContent:'space-between',
            paddingHorizontal:20}}>
            
            <View style={{width:Dimensions.get('screen').height/3,justifyContent:'center'}}>
              <Text style={{fontWeight:'bold',color:'white',fontSize:Dimensions.get('screen').height/20,}}>{day5}</Text>
            </View>
        
            <View style={{width:Dimensions.get('screen').height/5,justifyContent:'center'}}>
              <Image source={day5_Icon}
              style={{alignSelf:'center',height:Dimensions.get('screen').height/12,width:Dimensions.get('screen').height/12,resizeMode:'contain'}}/>
              </View>
            
            <View style={{width:Dimensions.get('screen').height/3,justifyContent:'center',paddingRight:40}}>
              <Text style={{textAlign:'right',fontWeight:'bold',color:'white',fontSize:Dimensions.get('screen').height/20,}}>{day5_Temp+'\u00B0'}</Text>
            </View>
            </View>

            </View>






          </View>
        
        )
    }
}
export default Landscape