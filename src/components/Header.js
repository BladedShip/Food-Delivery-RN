import React from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import { Colors, Parameters } from "../global/Styles";
import { Icon } from "@rneui/themed";

export default function Header({ title, type,navigation }) {
    return (
        <View style={styles.header}>
            <View style={{ marginLeft: 20 }}>
                <Icon
                    type="material-community"
                    name={type}
                    color={Colors.prim600}
                    size={28}
                    onPress={() => {
                        navigation.goBack()
                    }}
                />
            </View>
            <View>
                <Text style={styles.headerText}>{title}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        flexDirection: "row",
        backgroundColor: Colors.green600,
        height: Parameters.headerHeight,
    },
    headerText: {
        color: Colors.prim600,
        fontSize: 22,
        fontWeight: "bold",
        marginLeft: 30,
    }
})