import React from "react";

import { View,FlatList} from "react-native";
import { GuildProps } from "../../Components/Appointment";
import Guild from "../../Components/Guild";
import ListDivider from "../../Components/ListDivider";

import {styles} from './styles';


type Props = {
  handleGuildSelect: (guild:GuildProps)=> void;
}
export default function Guilds({handleGuildSelect}:Props){
  const guilds = [
    {
      id:'1',
      name:'Lendários',
      icon:'image.png',
      owner:true
    }
  ]
  return(
    <View style={styles.container}>
      <FlatList 
        data={guilds}
        keyExtractor={item=>item.id}
        renderItem={({item})=>(
            <Guild data={item}
              onPress={()=>handleGuildSelect(item)}
            />
        )}
        showsVerticalScrollIndicator={false}
        ItemSeparatorComponent={()=><ListDivider isCentered/>}
        ListHeaderComponent={()=><ListDivider isCentered/>}
        contentContainerStyle={{paddingBottom:69, paddingTop:103}}
        style={styles.guilds}
      />

    </View>
  )
}