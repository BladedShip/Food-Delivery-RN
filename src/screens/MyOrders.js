import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function MyOrders() {
    return (
        <View style={styles.container}>
            <Text>My Orders</Text>
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