import React from "react";
import {NavigationContainer} from '@react-navigation/native';
import { useAuth } from "../hooks/auth";
import AuthRoutes from './auth.routes';
import SigIn from '../pages/SignIn';

export function Routes() {
  const {user} = useAuth();
  return( 
    <NavigationContainer>
     {user.id ?  <AuthRoutes/> : <SigIn />}
    </NavigationContainer>
  );
}