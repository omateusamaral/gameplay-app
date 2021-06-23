import React, { useState } from "react";
import { View, FlatList, Text } from 'react-native';
import ButtonAdd from "../../Components/ButtonAdd";
import Profile from "../../Components/Profile";
import CategorySelect from "../../Components/CategorySelect";
import ListHeader from "../../Components/ListHeader";
import ListDivider from "../../Components/ListDivider";
import Appointment from "../../Components/Appointment";
import { styles } from './styles';

export default function Home() {
  const [category, setCategory] = useState('');

  const appointments = [
    {
      id: '1',
      guild: {
        id: '1',
        name: 'lendarios',
        icon: null,
        owner: true
      },
      category: "1",
      date: '22/06 às 20:40h',
      description: 'É hoje que vamos chegar ao challenger'
    },

    {
      id: '2',
      guild: {
        id: '2',
        name: 'lendarios',
        icon: null,
        owner: true
      },
      category: "1",
      date: '22/06 às 20:40h',
      description: 'É hoje que vamos chegar ao challenger'
    }
  ]
  function handleCategorySelect(categoryId: string) {
    categoryId === category ? setCategory('') : setCategory(categoryId);
  }
  return (

    <View style={styles.container}>
      <View style={styles.header}>
        <Profile />
        <ButtonAdd />
      </View>
      
      <CategorySelect
        categorySelected={category}
        setCategory={handleCategorySelect}
      />

      <View style={styles.content}>
        <ListHeader
          title="Partidas Agendadas"
          subtitle="Total 6"
        />

        <FlatList
          data={appointments}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <Appointment data={item} />
          )}
          style={styles.matches}
          showsVerticalScrollIndicator={false}
          ItemSeparatorComponent={()=><ListDivider />}
        />
          
      </View>

    </View>
  );
}