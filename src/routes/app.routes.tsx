import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../pages/Home';
import AppointmentDetails from '../pages/AppointmentDetails';
import AppointmentCreate from '../pages/AppointmentCreate';
import { theme } from '../global/styles/theme';


const { Navigator, Screen } = createStackNavigator();


export default function AppRoutes() {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: {
          backgroundColor: theme.colors.secondary100
        }
      }}
      headerMode="none"
    >
      <Screen name="Home" component={Home} />
      <Screen name="AppointmentDetails" component={AppointmentDetails} />
      <Screen name="AppointmentCreate" component={AppointmentCreate} />


    </Navigator>
  )
}