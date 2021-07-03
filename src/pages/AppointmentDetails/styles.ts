import { Inter_100Thin } from "@expo-google-fonts/inter";
import {getBottomSpace} from 'react-native-iphone-x-helper';
import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";
export const styles = StyleSheet.create({
  container:{
    flex:1,
  },
  banner:{
    width: '100%',
    height: 234,
  },
  bannerContent:{
    flex: Inter_100Thin,
    justifyContent:'flex-end',
    paddingHorizontal:24,
    marginBottom:30
  },
  title:{
    fontSize:28,
    fontFamily:theme.fonts.title700,
    color: theme.colors.heading,
  },

  subtitle:{
    fontSize:13,
    fontFamily:theme.fonts.text400,
    color: theme.colors.heading,
    lineHeight:21
  },
  members:{
    marginLeft:24,
    marginTop:27,
  },
  footer:{
    paddingHorizontal:24,
    paddingVertical:20,
    margin: getBottomSpace(),
  }

});