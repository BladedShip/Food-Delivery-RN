import React,{useState} from "react";
import { View, Text, StyleSheet,TouchableOpacity } from "react-native";
import { Colors,GlobalStyles,Parameters } from "../global/Styles";

export default function HomeMakerMap({navigation}) {
    const [delivery, setDelivery] = useState(false);
    return (
        <View>
            <View style={{ marginTop: 10, flexDirection: "row", justifyContent: "space-evenly" }}>

                <TouchableOpacity
                    onPress={() => {
                        setDelivery(true);
                        navigation.navigate("ClientTabs");
                    }}
                >
                    <View style={[{ backgroundColor: delivery ? Colors.green600 : Colors.prim600, }, styles.deliveryBtn]}>
                        <Text style={[{ color: delivery ? Colors.prim600 : Colors.green600 }, styles.deliveryText]}>Delivery</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => {
                        setDelivery(false);
                    }}
                >
                    <View style={[{ backgroundColor: delivery ? Colors.prim600 : Colors.green600, }, styles.deliveryBtn]}>
                        <Text style={[{ color: delivery ? Colors.green600 : Colors.prim600 }, styles.deliveryText]}>Pickup</Text>
                    </View>
                </TouchableOpacity>

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    deliveryBtn: {
        paddingHorizontal: 20,
        borderRadius: 15,

    },
    deliveryText: {
        margin: 5,
        fontSize: 16,
    }
})