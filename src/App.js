import React from 'react';
// import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import Router from './router';

const App = () => {
  return (
    <NavigationContainer>
      <Router />
    </NavigationContainer>
  )
}

export default App
