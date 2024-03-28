import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Constants} from '../../utils/constants';
import UserInfoScreen from './UserInfo';
import FarmInfoScreen from './FarmInfo';
import {PaperProvider} from 'react-native-paper';
import UserVerificationScreen from './UserVerification';
import BussinessScheduleScreen from './BussinessSchedule';
import SignUpSuccessfulScreen from './SignUpSuccessful';
const Stack = createNativeStackNavigator();

function SignUpScreens() {
  return (
    <PaperProvider>
      <Stack.Navigator
        initialRouteName={Constants.navigationScreens.SPLASH}
        screenOptions={{headerShown: false}}>
        <Stack.Screen
          name={Constants.navigationScreens.UserInfo}
          component={UserInfoScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={Constants.navigationScreens.FarmInfo}
          component={FarmInfoScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={Constants.navigationScreens.UserVerification}
          component={UserVerificationScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={Constants.navigationScreens.BussinessSchedule}
          component={BussinessScheduleScreen}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name={Constants.navigationScreens.SignUpSuccessful}
          component={SignUpSuccessfulScreen}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </PaperProvider>
  );
}

export default SignUpScreens;
