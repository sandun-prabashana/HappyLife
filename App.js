import 'react-native-gesture-handler';
import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import  SplashScreen  from './screens/SplashScreen';
import  SignInScreen  from './screens/SignInScreen';
import  SignUpScreen  from './screens/SignUpScreen';
import  ProfileScreen  from './screens/ProfileScreen';
import  DetailsScreen  from './screens/DetailsScreen';
import  loadScreen  from './screens/loadScreen';


const Stack = createStackNavigator();


export default class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator >
        
          <Stack.Screen options={{headerShown: false}} name="SplashScreen" component={SplashScreen}  />
          <Stack.Screen options={{headerShown: false}} name="SignInScreen" component={SignInScreen}  />
          <Stack.Screen options={{headerShown: false}} name="SignUpScreen" component={SignUpScreen}  />
          <Stack.Screen options={{headerShown: false}} name="ProfileScreen" component={ProfileScreen}  />
          <Stack.Screen options={{headerShown: false}} name="DetailsScreen" component={DetailsScreen}  />
          <Stack.Screen options={{headerShown: false}} name="loadScreen" component={loadScreen}  />
        </Stack.Navigator>
    </NavigationContainer>
    );
  }
}
