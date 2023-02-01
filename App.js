import React from "react";
import { View, Text, StyleSheet, StatusBar } from "react-native";
import { Colors } from "./src/global/Styles";
import SignIn from "./src/screens/authScreens/SignInScreen";
import Welcome from "./src/screens/Welcome";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="light-content"
        backgroundColor={Colors.green600}
      />
      <Welcome/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})