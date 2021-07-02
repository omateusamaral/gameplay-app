import React from 'react';
import { Text, View, Image,Alert,ActivityIndicator } from 'react-native';
import {useAuth} from '../../hooks/auth';
import illustrationImg from '../../assets/illustration2.png';
import { styles } from './styles';
import ButtonIcon from '../../Components/ButtonIcon';
import Background from '../../Components/Background';
import { theme } from '../../global/styles/theme';

export default function SignIn() {
  const {user, sigIn, loading} = useAuth();
  
  async function handleSignIn() {
    try {
      await sigIn();
    } catch (error) {
      Alert.alert(error);
    }
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
          {
            loading ? <ActivityIndicator color={theme.colors.primary}/> :
          <ButtonIcon
          title="Entrar com o Discord"
          onPress={handleSignIn}
        />
          }

        </View>
      </View>
    </Background>
  );
}