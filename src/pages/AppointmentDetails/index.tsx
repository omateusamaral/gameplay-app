import React from 'react';
import { Fontisto } from '@expo/vector-icons';
import { View, ImageBackground, Text, FlatList } from 'react-native';
import { BorderlessButton } from 'react-native-gesture-handler';
import Background from '../../Components/Background';
import ListHeader from '../../Components/ListHeader';

import Header from '../../Components/Header';
import ButtonIcon from '../../Components/ButtonIcon';

import { styles } from './styles';
import Banner from '../../assets/banner.png';
import { theme } from '../../global/styles/theme';
import Member from '../../Components/Member';
import ListDivider from '../../Components/ListDivider';

export default function AppointmentDetails() {
  const members = [
    {
      id: '1',
      username: 'Mateus',
      avatar_url: 'https://github.com/omateusamaral.png',
      status: 'online'
    },

    {
      id: '2',
      username: 'Mateus',
      avatar_url: 'https://github.com/omateusamaral.png',
      status: 'offline'
    },
  ]
  return (
    <Background>
      <Header
        title="Detalhes"
        action={
          <BorderlessButton>
            <Fontisto
              name="share"
              size={24}
              color={theme.colors.primary}
            />
          </BorderlessButton>
        }
      />
      <ImageBackground
        style={styles.banner}
        source={Banner}>
        <View style={styles.bannerContent}>
          <Text style={styles.title}>Lendários</Text>
          <Text style={styles.subtitle}>É hoje que vamos chegar ao challenger</Text>
        </View>
      </ImageBackground>
      <ListHeader
        title="Jogadores"
        subtitle="total 3"
      />
      <FlatList
        data={members}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <Member data={item} />
        )}
        ItemSeparatorComponent={() => <ListDivider />}
        contentContainerStyle={{ paddingBottom: 69 }}
        style={styles.members}
        showsVerticalScrollIndicator={false}
      />
      <View style={styles.footer}>
        <ButtonIcon title="Entrar na partida" />
      </View>
    </Background>
  )
}