import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function MyAccount() {
    return (
        <View style={styles.container}>
            <Text>My Account</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
})