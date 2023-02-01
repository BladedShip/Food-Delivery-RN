import React, { useState, useRef } from "react";
import { View, Text, StyleSheet, Dimensions, TextInput, Image } from "react-native";
import { Colors, Parameters, GlobalStyles } from "../global/Styles";
import { Icon, Button, SocialIcon } from "@rneui/themed";
import * as Animatable from "react-native-animatable";
import Swiper from "react-native-swiper";

export default function Welcome() {

    return (
        <View style={{ flex: 1 }}>

            <View style={{ flex: 3, justifyContent: "flex-start", alignItems: "center", paddingTop: 20 }}>
                <Text style={{ fontSize: 24, color: Colors.green600 }}>Making every meal feel like</Text>
                <Text style={{ fontSize: 28, color: Colors.green600, fontWeight: 'bold' }}>a hug from home</Text>
            </View>

            <View style={{ flex: 4, justifyContent: "center" }}>

                <Swiper autoplay={true} autoplayTimeout={5}>
                    <View style={styles.slideA}>
                        <Image
                            source={require('../assets/images/slideA.jpg')}
                            style={{ height: '100%', width: '100%' }}
                        />
                    </View>

                    <View style={styles.slideB}>
                        <Image
                            source={require('../assets/images/slideB.jpg')}
                            style={{ height: '100%', width: '100%' }}
                        />
                    </View>

                    <View style={styles.slideC}>
                        <Image
                            source={require('../assets/images/slideC.jpg')}
                            style={{ height: '100%', width: '100%' }}
                        />
                    </View>

                    <View style={styles.slideD}>
                        <Image
                            source={require('../assets/images/slideD.jpg')}
                            style={{ height: '100%', width: '100%' }}
                        />
                    </View>
                </Swiper>
            </View>

            <View style={{ flex: 4,justifyContent:'flex-end',marginBottom:20 }}>
                <View style={{ marginHorizontal: 20, marginTop: 30 }}>
                    <Button
                        title="Sign In"
                        buttonStyle={GlobalStyles.styledButton}
                        titleStyle={GlobalStyles.titleButton}
                    />
                </View>

                <View style={{ marginHorizontal: 20,marginTop:20 }}>
                    <Button
                        title="Create an account"
                        buttonStyle={styles.createAcc}
                        titleStyle={styles.createAccText}
                    />
                </View>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    slideA: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: Colors.green200,
    },
    slideB: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: Colors.green400,
    },
    slideC: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: Colors.green600,
    },
    slideD: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: Colors.green800,
    },
    createAcc: {
        backgroundColor: 'white',
        alignContent: 'center',
        justifyContent: "center",
        borderRadius: 12,
        borderWidth: 1,
        borderColor: Colors.green600,
        height: 50,
        paddingHorizontal: 20
    },
    createAccText: {
        color: Colors.green600,
        fontSize: 16,
        fontWeight:'bold',
        alignItems: "center",
        justifyContent: 'center',
        marginTop: -3
    },
})