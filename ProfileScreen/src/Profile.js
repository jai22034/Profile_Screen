

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,Image,TouchableOpacity,ImageBackground} from 'react-native';
import { createAppContainer ,createStackNavigator,StackActions,NavigationActions } from 'react-navigation';
import Aboutkelltontech from './Aboutkelltontech';


export default class Profile extends  React.Component {
    static navigationOptions={
        title:  'Dashboard',

        headerStyle:{
            backgroundColor:'white',
       
          
        },

        headerTitleStyle:{
          
           textAlign: 'center',
           
           flexGrow:1,
           alignSelf:'center',
          
        },
        
    }
  render() {
    return (
      <View style={{flex:1}}>
       

        <View style={{flex:1.5,padding:10}}>
        <ImageBackground source={require('./cardBackground.png')} style={{borderRadius:10,borderWidth:0.5,width: '100%', height: '100%',alignItems:'center',justifyContent: 'center'}}>
        <Image style={{ height: 90, width: 90 }} source={require('./user.png')} />
   </ImageBackground>
          </View>
       
                <View style={{flex:7,backgroundColor:'lightblue'}}>
                  <View style={{flex:1.2,flexDirection:'row',backgroundColor:'white',padding:10}}>
                  <TouchableOpacity style={{flex:1,backgroundColor:'white',alignItems:'center',justifyContent: 'center',borderWidth: 0.5,    borderBottomColor: 'skyblue',
 borderBottomWidth: 3,borderRadius:10,marginLeft:8}}>
                  <Image style={{ height: 35, width: 35, }} source={require('./speaker.png')} />
                  <Text>Speaker</Text>
  
                  </TouchableOpacity>
   
                  <TouchableOpacity style={{flex:1,backgroundColor:'white',alignItems:'center',justifyContent: 'center',borderWidth: 0.5,borderRadius:10,marginLeft:8, borderBottomColor: 'skyblue',
 borderBottomWidth: 3}}>
                  <Image style={{ height: 35, width: 35, }} source={require('./sponsors.png')} />
                  <Text>Sponsors</Text>                    
                  </TouchableOpacity>
                  <TouchableOpacity style={{flex:1,backgroundColor:'white',alignItems:'center',justifyContent: 'center',borderWidth: 0.5,borderRadius:10,marginLeft:8, borderBottomColor: 'skyblue',
 borderBottomWidth: 3}}>
                  <Image style={{ height: 35, width: 35, }} source={require('./nasscom.png')} />
                  <Text>About Nascom</Text>                    
                  </TouchableOpacity>



                  </View>
                  <View style={{flex:1.2,flexDirection:'row',backgroundColor:'white',padding:10}}>
                  <TouchableOpacity style={{flex:1,backgroundColor:'white',alignItems:'center',justifyContent: 'center',borderWidth: 0.5,borderRadius:10,marginLeft:8, borderBottomColor: 'skyblue',
 borderBottomWidth: 3}}>
                  <Image style={{ height: 35, width: 35, }} source={require('./nasscom.png')} />
                  <Text>About Conference</Text>
  
                  </TouchableOpacity>
                  
                  <TouchableOpacity style={{flex:1,backgroundColor:'white',alignItems:'center',justifyContent: 'center',borderWidth: 0.5,borderRadius:10,marginLeft:8, borderBottomColor: 'skyblue',
 borderBottomWidth: 3}}           onPress={() => this.props.navigation.navigate('Aboutkelltontech')}>
                  <Image style={{ height: 35, width: 35, }} source={require('./about_kelltontech.png')} />
                  <Text>About Kellton</Text>                    
                  </TouchableOpacity>
                  <TouchableOpacity style={{flex:1,backgroundColor:'white',alignItems:'center',justifyContent: 'center',borderWidth: 0.5,borderRadius:10,marginLeft:8, borderBottomColor: 'skyblue',
 borderBottomWidth: 3}}>
                  <Image style={{ height: 35, width: 35, }} source={require('./feedback.png')} />
                  <Text>Feedback</Text>                    
                  </TouchableOpacity>
                  </View>               
                  <View style={{flex:1.2,flexDirection:'row',backgroundColor:'white',padding:10}}>
                  <View style={{flex:1}}>
                  
  
                  </View >
                  
                  <View  style={{flex:1,backgroundColor:'white',alignItems:'center',justifyContent: 'center',borderWidth: 0.5,borderRadius:10,marginLeft:8, borderBottomColor: 'skyblue',
 borderBottomWidth: 3}}>
                  <Image style={{ height: 35, width: 35, }} source={require('./logout.png')} />
                  <Text>Logout</Text>                    
                  </View >
                  <View  style={{flex:1}}>
                  
                  </View >
                  </View>       
                <View style={{flex:2.4,flexDirection:'row',backgroundColor:'white'}}>
                
                </View>
                
                
                
                
                </View>


      
      
      
      <View style={{flex:.7,flexDirection:'row'}}>

    
      <View  style={{flex:1,backgroundColor:'#DCDCDC',alignItems:'center',justifyContent: 'center'
 }}>
                  <Image style={{ height: 25, width: 25, }} source={require('./calendar.png')} />
                  <Text>Schedule</Text>                    
                  </View >

     
        <View  style={{flex:1,backgroundColor:'#DCDCDC',alignItems:'center',justifyContent: 'center'
 }}>
                  <Image style={{ height: 25, width: 25, }} source={require('./home_nonsel.png')} />
                  <Text>Dashboard</Text>                    
                  </View >

        <View  style={{flex:1,backgroundColor:'#DCDCDC',alignItems:'center',justifyContent: 'center'
 }}>
                  <Image style={{ height: 25, width: 25, }} source={require('./time.png')} />
                  <Text>My Schedule</Text>                    
                  </View >
      </View>



      </View>
    );
  }
}

const styles = StyleSheet.create({
 
});