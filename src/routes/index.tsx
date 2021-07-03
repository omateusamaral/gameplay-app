import React from "react";
import {NavigationContainer} from '@react-navigation/native';
import { useAuth } from "../hooks/auth";
import SigIn from '../pages/SignIn';
import AppRoutes from './app.routes';

export function Routes() {
  const {user} = useAuth();
  return( 
    <NavigationContainer>
     {user.id ?  <AppRoutes/> : <SigIn />}
    </NavigationContainer>
  );
}