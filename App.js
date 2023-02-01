import React from "react";
import { View,Text,StyleSheet,StatusBar } from "react-native";
import Header from "./src/components/Header";
import { Colors } from "./src/global/Styles";

export default function App(){
  return(
    <View style={styles.container}>
      <StatusBar
        barStyle="light-content"
        backgroundColor={Colors.green600}
      />
      <Header title="Hello"/>
    </View>
  )
}

const styles=StyleSheet.create({
  container:{
    flex:1
  }
})