import React, { useState, useCallback } from "react";
import { View, FlatList } from 'react-native';
import AsyncStorage from "@react-native-async-storage/async-storage";
import { COLLECTION_APPOINTMENTS } from "../../configs/database";
import { useNavigation, useFocusEffect } from "@react-navigation/native";
import ButtonAdd from "../../Components/ButtonAdd";
import Profile from "../../Components/Profile";
import CategorySelect from "../../Components/CategorySelect";
import ListHeader from "../../Components/ListHeader";
import ListDivider from "../../Components/ListDivider";
import Appointment, { AppointmentProps } from "../../Components/Appointment";
import { styles } from './styles';
import Background from '../../Components/Background';
import Load from '../../Components/Load';

export default function Home() {
  const [category, setCategory] = useState('');
  const [loading, setLoading] = useState(true);
  const [appointments, setAppointments] = useState<AppointmentProps[]>([]);

  const navigation = useNavigation();

  function handleAppointmentDetails(guildSelected:AppointmentProps) {
    navigation.navigate("AppointmentDetails",{guildSelected});
  }

  function handleAppointmentCreate() {
    navigation.navigate("AppointmentCreate");
  }

  function handleCategorySelect(categoryId: string) {
    categoryId === category ? setCategory('') : setCategory(categoryId);
  }

  async function loadAppointments() {
    const response = await AsyncStorage.getItem(COLLECTION_APPOINTMENTS);
    const storage: AppointmentProps[] = response ? JSON.parse(response) : [];

    if (category) {
      setAppointments(storage.filter(item => item.category === category));
    }
    else {
      setAppointments(storage);
    }
    
    setLoading(false);

  }
  useFocusEffect(useCallback(() => {
     loadAppointments();
  }, [category]));
  return (
    <Background>
      <View style={styles.container}>
        <View style={styles.header}>
          <Profile />
          <ButtonAdd onPress={handleAppointmentCreate} />
        </View>

        <CategorySelect
          categorySelected={category}
          setCategory={handleCategorySelect}
        />

        {
          loading ? <Load /> :
            <>
              <ListHeader
                title="Partidas Agendadas"
                subtitle="Total 6"
              />

              <FlatList
                data={appointments}
                keyExtractor={item => item.id}

                renderItem={({ item }) => (
                  <Appointment
                    data={item}
                    onPress={()=>handleAppointmentDetails(item)}
                  />
                )}
                style={styles.matches}
                showsVerticalScrollIndicator={false}
                ItemSeparatorComponent={() => <ListDivider />}
                contentContainerStyle={{ paddingBottom: 69 }}

              />
            </>
        }
      </View>
    </Background>
  );
}