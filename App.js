/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
} from 'react-native';
import { useFonts } from 'expo-font';

import { NavigationContainer } from '@react-navigation/native';
import MainNavigator from './navigation/NavigationStack'
const App = () => {
  const [loaded] = useFonts({
    'Helvetica-Bold': require('./assets/fonts/Helvetica-Bold.ttf'),
    'Helvetica-Light': require('./assets/fonts/Helvetica-Light.ttf'),
    'Helvetica-Regular': require('./assets/fonts/Helvetica-Regular.ttf'),

  });

  if (!loaded) {
    return null;
  }
  return ( 
    <NavigationContainer>
        <SafeAreaView style={{flex: 1}}>
          <MainNavigator />
        </SafeAreaView>
    </NavigationContainer>
  );
};
export default App;
