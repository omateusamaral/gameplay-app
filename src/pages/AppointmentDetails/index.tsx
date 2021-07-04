import React, { useState, useEffect } from 'react';
import { Fontisto } from '@expo/vector-icons';
import {
  View,
  ImageBackground,
  Text,
  FlatList,
  Alert,
  Share,
  Platform,
} from 'react-native';
import * as Linking from 'expo-linking';
import { BorderlessButton } from 'react-native-gesture-handler';
import { useRoute } from '@react-navigation/native';
import { api } from '../../services/api';
import Load from '../../Components/Load';
import Background from '../../Components/Background';
import ListHeader from '../../Components/ListHeader';
import Header from '../../Components/Header';
import ButtonIcon from '../../Components/ButtonIcon';
import Member, { MembersProps } from '../../Components/Member';
import ListDivider from '../../Components/ListDivider';
import { AppointmentProps } from '../../Components/Appointment';

import Banner from '../../assets/banner.png';
import { theme } from '../../global/styles/theme';
import { styles } from './styles';

type Params = {
  guildSelected: AppointmentProps
}

type GuildWidget = {
  id: string;
  name: string;
  instant_invite: string;
  members: MembersProps[];  
}
export default function AppointmentDetails() {
  const [widget, setWidget] = useState<GuildWidget>({} as GuildWidget);
  const [loading, setLoading] = useState(true);
  const route = useRoute();
  const { guildSelected } = route.params as Params;
  async function fecthGuildWidget() {
    try {
      const response = await api.get(
        `/guilds/${guildSelected.guild.id}/widget.json`
      );
      setWidget(response.data);
    } catch (error) {
      Alert.alert('',
        'Verifique as configurações do servidor.Será que o widget está ativado?'
      );
    }
    finally {
      setLoading(false);
    }
  }

  function handleShareInvitation() {
      const message = Platform.OS === 'ios' ?
      `Junta-se a ${guildSelected.guild.name}`
      : widget.instant_invite;

    Share.share({
      message,
      url: widget.instant_invite
    });
  }

  function handleOpenGuild(){
    if(widget.instant_invite !== null){
      Linking.openURL(widget.instant_invite);
    }
    else{
      Alert.alert('','Não é possível entrar no servidor');
    }
  }

  useEffect(() => {
    fecthGuildWidget();
  }, []);
  return (
    <Background>
      <Header
        title="Detalhes"
        action={
          guildSelected.guild.owner &&
          <BorderlessButton onPress={handleShareInvitation}>
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
          <Text style={styles.title}>{guildSelected.guild.name}</Text>
          <Text style={styles.subtitle}>{guildSelected.description}</Text>
        </View>
      </ImageBackground>
      {
        loading ?
          <Load />
          :
          <>

            <ListHeader
              title="Jogadores"
              subtitle={`Total ${widget.members.length}`}
            />
            <FlatList
              data={widget.members}
              keyExtractor={item => item.id}
              renderItem={({ item }) => (
                <Member data={item} />
              )}
              ItemSeparatorComponent={() => <ListDivider isCentered />}
              contentContainerStyle={{ paddingBottom: 69 }}
              style={styles.members}
              showsVerticalScrollIndicator={false}
            />
            <View style={styles.footer}>
              <ButtonIcon title="Entrar na partida"
                onPress={handleOpenGuild}
              />
            </View>
          </>
      }

    </Background>
  )
}