import React from "react";
import { View, Text, StyleSheet, StatusBar } from "react-native";
import { Colors } from "./src/global/Styles";
import RootNav from "./src/navigation/RootNav";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="light-content"
        backgroundColor={Colors.green600}
      />
      <RootNav/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})