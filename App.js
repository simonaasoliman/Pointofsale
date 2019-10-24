import React, { Component } from 'react';
import { AppRegistry, Text, View } from 'react-native';
import ListView from './src/ListView';
import AddNew from './src/AddNew';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

const MainNavigator = createStackNavigator({
  ListView: {screen: ListView},
  AddNew: {screen: AddNew},
});

const App = createAppContainer(MainNavigator);

export default App;
