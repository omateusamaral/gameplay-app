import React, { useState } from 'react';
import {TextInput, TextInputProps} from 'react-native';
import { theme } from '../../global/styles/theme';
import { styles } from './styles';

export default function SmallInput({...rest}:TextInputProps) {
  return (
    <TextInput
      style={styles.container}
      keyboardType={'numeric'}
    />
  )
}