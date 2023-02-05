import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Dimensions, Image } from "react-native";
import { Icon } from "@rneui/base";

import { Colors, Parameters, GlobalStyles } from "../global/Styles";

export default function FoodCard({
    onPressFoodCard,
    homemakerName,
    deliveryAvailable,
    discountAvailable,
    discountPercent,
    reviewCount,
    businessAddress,
    distance,
    averageRating,
    images,
    screenWidth
}) {
    return (
        <TouchableOpacity>
            <View style={[styles.container, { width: screenWidth }]}>

                <Image
                    style={[styles.image, { width: screenWidth }]}
                    source={{ uri: images }}
                />
                <View>
                    <View>
                        <Text style={styles.hmName}>{homemakerName}</Text>
                    </View>

                    <View style={{ flex: 1, flexDirection: "row",marginVertical:5 }}>
                        <View style={styles.dist}>
                            <Icon
                                type="material-community"
                                name="map-marker"
                                size={18}
                                color={Colors.text500}
                                iconStyle={{ marginTop: 3 }}
                            />
                            <Text style={styles.minutes}>{distance} min</Text>
                        </View>
                        <View style={{ flex: 9, flexDirection: "row" }}>
                            <Text style={styles.addr}>{businessAddress}</Text>
                        </View>
                    </View>
                </View>
            </View>

            <View style={styles.review}>
                <View style={{flexDirection:"row",alignItems:"center"}}>
                    <Text style={styles.avgRating}>{averageRating}</Text>
                    <Icon
                        type="material-community"
                        name="star"
                        size={18}
                        color='yellow'
                    />
                </View>
                <Text style={styles.reviewText}>{reviewCount} Reviews</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 9,
        borderTopRightRadius: 5,
        borderTopLeftRadius: 5,
        borderWidth: StyleSheet.hairlineWidth,
        borderColor: Colors.text500,
        borderBottomLeftRadius: 5,
        borderBottomRightRadius: 5,
    },
    image: {
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5,
        height: 150,
    },
    hmName: {
        fontSize: 17,
        fontWeight: "bold",
        color: Colors.text500,
        marginTop: 5,
        marginLeft: 15,
    },
    dist: {
        flex: 4,
        flexDirection: "row",
        borderRightColor: Colors.text500,
        alignItems: "center",
        paddingHorizontal: 5,
        borderRightWidth: 1,
        marginLeft: 10,
    },
    minutes: {
        fontSize: 12,
        fontWeight: "bold",
        color: Colors.text500,
    },
    addr: {
        fontSize: 12,
        paddingTop: 5,
        color: Colors.text500,
        paddingHorizontal: 10,
    },
    review: {
        position: "absolute",
        top: 0,
        right: 10,
        backgroundColor: 'rgba(52,52,52,0.3)',
        padding: 2,
        alignItems: "center",
        justifyContent: "center",
        borderTopRightRadius: 5,
        borderBottomLeftRadius: 12,
    },
    avgRating: {
        color: Colors.prim600,
        fontSize: 20,
        fontWeight: "bold",
        marginTop: -3,
    },
    reviewText: {
        color: Colors.prim600,
        fontSize: 13,
        marginRight: 10,
        marginLeft: 10,
    },

})