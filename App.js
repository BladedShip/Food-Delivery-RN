import React from "react";
import { View, Text, StyleSheet, StatusBar } from "react-native";
import { Colors } from "./src/global/Styles";
import SignIn from "./src/screens/authScreens/SignInScreen";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="light-content"
        backgroundColor={Colors.green600}
      />
      <SignIn/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})