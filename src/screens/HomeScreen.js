import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Pressable, FlatList, Image } from "react-native";
import { Colors, Parameters, GlobalStyles } from "../global/Styles";
import { Icon } from "@rneui/base";
import { FlashList } from "@shopify/flash-list";

import HomeHeader from "../components/HomeHeader";
import { filterData } from "../global/Data";

export default function HomeScreen() {

    const [address, setAddress] = useState("Maleshwaram Area");
    const [delivery, setDelivery] = useState(true);
    const [time, setTime] = useState("Now");
    const [indexChecked, setIndexChecked] = useState("0");

    return (
        <View style={styles.container}>
            <HomeHeader />
            <ScrollView
                stickyHeaderIndices={[0]}
                showsVerticalScrollIndicator={true}
            >
                <View>
                    <View style={{ marginTop: 10, flexDirection: "row", justifyContent: "space-evenly" }}>

                        <TouchableOpacity
                            onPress={() => setDelivery(true)}
                        >
                            <View style={[{ backgroundColor: delivery ? Colors.green600 : Colors.prim600, }, styles.deliveryBtn]}>
                                <Text style={[{ color: delivery ? Colors.prim600 : Colors.green600 }, styles.deliveryText]}>Delivery</Text>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity
                            onPress={() => setDelivery(false)}
                        >
                            <View style={[{ backgroundColor: delivery ? Colors.prim600 : Colors.green600, }, styles.deliveryBtn]}>
                                <Text style={[{ color: delivery ? Colors.green600 : Colors.prim600 }, styles.deliveryText]}>Pickup</Text>
                            </View>
                        </TouchableOpacity>

                    </View>
                </View>

                <View style={styles.filterView}>
                    <View style={styles.addrView}>

                        <View style={{ flexDirection: "row", alignItems: "center", paddingLeft: 10 }}>
                            <Icon
                                type="material-community"
                                name="map-marker"
                                size={26}
                                color={Colors.text400}
                                onPress={() => { }}
                            />
                            <Text style={{ marginLeft: 5 }}>{address}</Text>
                        </View>

                        <View style={styles.clockView}>
                            <Icon
                                type="material-community"
                                name="clock-time-four"
                                size={26}
                                color={Colors.text400}
                            />
                            <Text style={{ marginLeft: 5 }}>{time}</Text>
                        </View>

                    </View>
                    <View>
                        <Icon
                            type="material-community"
                            name="tune"
                            size={26}
                            color={Colors.text400}
                            onPress={() => { }}
                        />
                    </View>

                </View>

                <View style={GlobalStyles.headerTextView}>
                    <Text style={GlobalStyles.headerText}>Categories</Text>
                </View>

                <View>
                    <FlatList
                        data={filterData}
                        showsHorizontalScrollIndicator={false}
                        keyExtractor={(item) => item.id}
                        extraData={indexChecked}
                        horizontal={true}
                        renderItem={({ item, index }) => (
                            <Pressable
                                onPress={() => setIndexChecked(item.id)}
                            >
                                <View style={[styles.cardSmall, { backgroundColor: indexChecked === item.id ? Colors.green600 : Colors.prim600 }]}>
                                    <Image
                                        style={{ width: 60, height: 60, borderRadius: 30 }}
                                        source={item.image}
                                    />
                                    <Text style={[styles.cardText, { color: indexChecked === item.id ? Colors.prim600 : Colors.text500, fontWeight: "bold" }]}>{item.name}</Text>
                                </View>
                            </Pressable>
                        )}
                    />
                </View>

                <View style={GlobalStyles.headerTextView}>
                    <Text style={GlobalStyles.headerText}>Available Now!</Text>
                </View>

            </ScrollView>

        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,

    },
    deliveryBtn: {
        paddingHorizontal: 20,
        borderRadius: 15,

    },
    deliveryText: {
        margin: 5,
        fontSize: 16,

    },
    filterView: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        marginHorizontal: 25,
        marginVertical: 10,

    },
    clockView: {
        flexDirection: "row",
        alignItems: "center",
        marginLeft: 20,
        backgroundColor: Colors.prim600,
        borderRadius: 12,
        paddingHorizontal: 5,
        marginRight: 10,

    },
    addrView: {
        flexDirection: "row",
        backgroundColor: Colors.text100,
        borderRadius: 15,
        paddingVertical: 5,
        justifyContent: "space-between",
        paddingHorizontal: 20,
        marginRight: 26
    },
    cardSmall: {
        borderRadius: 12,
        justifyContent: "center",
        alignItems: "center",
        padding: 5,
        width: 80,
        margin: 10,
        height: 100,
    },
})