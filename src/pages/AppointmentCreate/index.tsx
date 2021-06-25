import React, { useState } from 'react';
import { RectButton } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';
import {
  Text,
  View,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import Background from '../../Components/Background';
import Header from '../../Components/Header';
import GuildIcon from '../../Components/GuildIcon';
import SmallInput from '../../Components/SmallInput';
import TextArea from '../../Components/TextArea';
import Button from '../../Components/Button';


import ModalView from '../../Components/ModalView';
import Guilds from '../Guilds';

import CategorySelect from '../../Components/CategorySelect';
import { theme } from '../../global/styles/theme';
import { styles } from './styles';
import { GuildProps } from '../../Components/Appointment';

export default function AppointmentCreate() {
  const [category, setCategory] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [guild, setGUild] = useState<GuildProps>({} as GuildProps);


  function handleGuildSelect(guildSelected: GuildProps) {
    setGUild(guildSelected);
    setShowModal(false);
  }

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <KeyboardAvoidingView style={styles.container}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
        <ScrollView>
          <Header
            title="Agendar Partida"
          />
          <Text style={
            [styles.label,
            { marginLeft: 24, marginTop: 36, marginBottom: 18 }
            ]
          }>Categoria</Text>
          <CategorySelect hasCheckBox
            setCategory={setCategory}
            categorySelected={category} />
          <View style={styles.form}>
            <RectButton onPress={() => setShowModal(true)}>
              <View style={styles.select}>
                {

                  guild.icon ?
                    <GuildIcon /> :
                    <View
                      style={styles.image}
                    />

                }
                <View style={styles.selectBody}>
                  <Text style={styles.label}>
                    {
                      guild.name ? guild.name : 'Selecione um servidor'
                    }
                  </Text>
                </View>

                <Feather
                  name="chevron-right"
                  color={theme.colors.heading}
                  size={18}
                />
              </View>
            </RectButton>

            <View style={styles.field}>
              <View>
                <Text style={styles.label}>
                  Dia e Mês
                </Text>
                <View style={styles.column}>
                  <SmallInput maxLength={2} />
                  <Text style={styles.divider}>
                    /
                  </Text>
                  <SmallInput maxLength={2} />
                </View>
              </View>

              <View>
                <Text style={styles.label}>
                  Hora e Minuto
                </Text>
                <View style={styles.column}>
                  <SmallInput maxLength={2} />
                  <Text style={styles.divider}>
                    :
                  </Text>
                  <SmallInput maxLength={2} />
                </View>
              </View>
            </View>
            <View style={[styles.field, { marginBottom: 12 }]}>
              <Text style={styles.label}>
                Descrição
              </Text>

              <Text style={styles.caracteresLimit}>
                Max 100 caracteres
              </Text>
            </View>
            <TextArea multiline
              maxLength={100}
              numberOfLines={5}
              autoCorrect={false}
            />
            <View style={styles.footer}>
              <Button title="Agendar" />
            </View>
          </View>
        </ScrollView>
        <ModalView visible={showModal}>
          <Guilds handleGuildSelect={handleGuildSelect} />
        </ModalView>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  )
}