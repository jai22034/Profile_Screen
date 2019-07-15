

import React, {Component} from 'react';

import {createStackNavigator} from 'react-navigation';
import Profile from './src/Profile';


export default class App extends  React.Component {
  render() {
    return (
   <AppNavigation/>
    );
  }
}
const AppNavigation=createStackNavigator({
  Profile : {
    screen:Profile,
  }
})
