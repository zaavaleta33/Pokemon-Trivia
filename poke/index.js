import { AppRegistry } from 'react-native';
import React, {useState, useEffect } from 'react';
import { Button, View, Text, Image, StyleSheet } from 'react-native';


import HomeScreen from './HomeScreen';
import TriviaScreen from './TriviaScreen';
import SuprizeScreen from './SuprizeScreen';
import LeaderScreen from './LeaderScreen';
import AboutScreen from './AboutScreen';
import NameInputScreen from './NameInputScreen';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import axios from 'axios';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="HomeScreen"screenOptions={{
    headerStyle: {
      backgroundColor: '#659157', 
    },
  }}>
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="AboutScreen" component={AboutScreen} />
        <Stack.Screen name="LeaderScreen" component={LeaderScreen} />
        <Stack.Screen name="SuprizeScreen" component={SuprizeScreen} />
        <Stack.Screen name="TriviaScreen" component={TriviaScreen} />
        <Stack.Screen name="NameInputScreen" component={NameInputScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#A1C084', 
    padding: 16,
  },
 imageLeft: {
    width: 50,
    height: 50,
    resizeMode: 'contain',
    marginHorizontal: 8,
    transform: [{ scaleX: -1 }],

  },
  leaderboardText: {
    fontSize: 20,
    marginHorizontal: 16,
    marginHorizontal: 8,
  },
  image: {
    width: 300,
    height: 300,
    resizeMode: 'contain',
  }, 
  imagecram: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
  },
  imageRight: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
    marginHorizontal: 8,
  },});


AppRegistry.registerComponent('poke', () => App);
