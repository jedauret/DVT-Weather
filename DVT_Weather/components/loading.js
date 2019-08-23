import PropTypes from 'prop-types';
import React,{Component} from 'react';
import {Refresh} from '../App'
import {
  ImageBackground,
  Dimensions,
  View,
  Text,
  Image,
  TouchableOpacity
} from 'react-native';
class Loading extends Component {

render(){
    return(
<View style={{flex:1,backgroundColor:'#0083CD',justifyContent:'center',alignContent:'center'}}>


<Text
style={{color:'white',fontSize:30,fontWeight:'bold',textAlign:'center'}}>
    Fetching your weather...
</Text>


</View>
    )
}
}

export default Loading