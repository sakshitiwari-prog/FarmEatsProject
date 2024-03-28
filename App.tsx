import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Constants} from './src/utils/constants';
import LoginScreen from './src/screens/Login';
import SplashScreen from './src/screens/Splash';
import MainScreen from './src/screens/Main';
import SignUpScreen from './src/screens/SignUp';
import HomeScreen from './src/screens/Home';
import ProfileScreen from './src/screens/Profile';
import QuoteHistoryScreen from './src/screens/QuoteHistory';
import SignUpScreens from './src/screens/SignUpScreens';
import OtpVerificationScreen from './src/screens/OtpVerification';
import ForgotPasswordScreen from './src/screens/ForgotPassword';
import PasswordResetScreen from './src/screens/PasswordReset';
import UserVerificationScreen from './src/screens/UserVerification';
const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer >
      <Stack.Navigator
        initialRouteName={Constants.navigationScreens.Main}
        screenOptions={{headerShown: false}}>
          
        <Stack.Screen
          name={Constants.navigationScreens.SPLASH}
          component={SplashScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={Constants.navigationScreens.Main}
          component={MainScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={Constants.navigationScreens.ForgotPassword}
          component={ForgotPasswordScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={Constants.navigationScreens.OtpVerification}
          component={OtpVerificationScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={Constants.navigationScreens.PasswordReset}
          component={PasswordResetScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={Constants.navigationScreens.Login}
          component={LoginScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={Constants.navigationScreens.SignUpScreens}
          component={SignUpScreens}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={Constants.navigationScreens.Home}
          component={HomeScreen}
          options={{headerShown: false}}
        />
       
        <Stack.Screen
          name={Constants.navigationScreens.Profile}
          component={ProfileScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={Constants.navigationScreens.QuoteHistory}
          component={QuoteHistoryScreen}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
