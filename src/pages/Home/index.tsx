import React, {useState} from "react";
import {View} from 'react-native';
import ButtonAdd from "../../Components/ButtonAdd";
import Profile from "../../Components/Profile";
import CategorySelect from "../../Components/CategorySelect";

import { styles } from "./styles";
export default function Home(){
  const [category,setCategory] = useState('');
  function handleCategorySelect(categoryId:string){
    categoryId === category ? setCategory('') : setCategory(categoryId);
  }
  return(

    <View style={styles.container}>
      <View style={styles.header}>
      <Profile/>
      <ButtonAdd/>
      </View>
        <View>
          <CategorySelect
            categorySelected={category}
            setCategory={handleCategorySelect}
          />
        </View>
      
      </View>
  );
}