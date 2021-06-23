import React from "react";
import {LinearGradient} from 'expo-linear-gradient';
import { View, Text } from 'react-native';
import { styles } from './styles';
type Props={
title:string,
subtitle:string,
}
export default function ListHeader({title,subtitle}:Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        {title}
      </Text>
      <Text style={styles.subtitle}>
        {subtitle}
      </Text>
    </View>
  );
}