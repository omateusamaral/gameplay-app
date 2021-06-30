import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Text, View, Image } from 'react-native';
import illustrationImg from '../../assets/illustration2.png';
import { styles } from './styles';
import ButtonIcon from '../../Components/ButtonIcon';
import Background from '../../Components/Background';

export default function SignIn() {
  const navigation = useNavigation();
  function handleSignIn() {
    navigation.navigate('Home');
  }
  return (
    <Background>
      <View style={styles.container}>

        <Image
          source={illustrationImg}
          style={styles.image}
          resizeMode="contain"
        />

        <View style={styles.content}>
          <Text style={styles.title}>
            Conecte-se {'\n'}
            e organize suas{'\n'}
            jogatinas
          </Text>

          <Text style={styles.subtitle}>
            crie grupos para jogar seus games {'\n'}
            favoritos com seus amigos
          </Text>
          <ButtonIcon
            title="Entrar com o Discord"
            onPress={handleSignIn}
          />
        </View>
      </View>
    </Background>
  );
}