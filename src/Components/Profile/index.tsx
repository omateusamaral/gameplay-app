import React from "react";
import { View, Text } from 'react-native';
import Avatar from "../Avatar";
import { styles } from './styles';

export default function Profile() {
  return (
    <View style={styles.container}>
      <Avatar urlImage="https://github.com/omateusamaral.png"/>
      <View>
        <View style={styles.user}>
          <Text style={styles.greeting}>Olá,</Text>
          <Text style={styles.username}>
            Mateus
          </Text>
        </View>
        <Text style={styles.message}>Hoje é dia de vitória</Text>
      </View>
    </View>
  );
}