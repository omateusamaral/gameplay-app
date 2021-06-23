import React from "react";
import { RectButton,RectButtonProps} from 'react-native-gesture-handler';
import { Image } from 'react-native';
import { styles } from './styles';


export default function GuildIcon() {
  const uri = 'https://www.pdvg.it/wp-content/uploads/2021/03/Discord.jpeg';
  return (
      <Image source={{uri}}
      style={styles.image}
      resizeMode="cover"
      />

      
  );
}