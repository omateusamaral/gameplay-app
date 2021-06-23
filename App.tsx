import React from 'react';
import { StatusBar } from 'react-native';
import { useFonts } from 'expo-font';
import { Inter_500Medium, Inter_400Regular,Inter_700Bold } from '@expo-google-fonts/inter';
import AppLoading from 'expo-app-loading';
import Background from './src/Components/Background';
import { Routes } from './src/routes/';

export default function App() {
  const [fontsLoading] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Inter_700Bold
 
  });

  if (!fontsLoading) {

    <AppLoading />
  }
  return (
    <Background>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <Routes />
    </Background>
  );
}


