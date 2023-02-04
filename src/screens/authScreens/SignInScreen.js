import React, { useState, useRef } from "react";
import { View, Text, StyleSheet, Dimensions, TextInput } from "react-native";
import { Colors, Parameters, GlobalStyles } from "../../global/Styles";
import { Icon, Button, SocialIcon } from "@rneui/themed";
import Header from "../../components/Header";
import * as Animatable from "react-native-animatable";

export default function SignIn({ navigation }) {

    const [textInputFocus, setTextInputFocus] = useState(false);

    const textInput = useRef(1);
    const passInput = useRef(2);

    return (
        <View style={styles.container}>
            <Header title="Account Login" type="arrow-left" navigation={navigation} />

            <View style={{ marginLeft: 20, marginTop: 10 }}>
                <Text style={GlobalStyles.title}>Sign In</Text>
            </View>

            <View style={{ marginTop: 10, alignItems: 'center' }}>
                <Text style={styles.text1}>Enter the email and password</Text>
                <Text style={styles.text1}>registered with your account</Text>
            </View>

            <View style={{ marginTop: 20 }}>
                <View>
                    <TextInput
                        style={styles.textInput}
                        placeholder="Email"
                        ref={textInput}
                    />
                </View>
                <View style={styles.passInput}>
                    <Animatable.View animation={textInputFocus ? "" : "fadeInRight"} duration={400}>
                        <Icon
                            name="lock"
                            iconStyle={{ color: Colors.text200 }}
                            type="material"
                        />
                    </Animatable.View>
                    <TextInput
                        style={{ width: "80%" }}
                        placeholder="Password"
                        ref={passInput}
                        onFocus={() => {
                            setTextInputFocus(false)
                        }}
                        onBlur={() => {
                            setTextInputFocus(true)
                        }}
                    />
                    <Animatable.View animation={textInputFocus ? "" : "fadeInLeft"} duration={400}>
                        <Icon
                            name="visibility-off"
                            iconStyle={{ color: Colors.text200 }}
                            type="material"
                            style={{ marginRight: 10 }}
                        />
                    </Animatable.View>
                </View>
            </View>

            <View style={{ marginHorizontal: 20, marginTop: 30 }}>
                <Button
                    title="Sign In"
                    buttonStyle={GlobalStyles.styledButton}
                    titleStyle={GlobalStyles.titleButton}
                    onPress={() => { 
                        navigation.navigate("HomeScreen")
                    }}
                />
            </View>
            <View style={{ alignItems: 'center', marginTop: 16 }}>
                <Text style={[styles.text1, { textDecorationLine: 'underline' }]}>Forgot Password?</Text>
            </View>

            <View style={{ alignItems: "center", marginTop: 10, marginBottom: 20, flexDirection: "row", alignItems: "center", justifyContent: 'space-evenly' }}>
                <View style={[styles.dumLine, { marginLeft: 20 }]}></View>
                <Text style={{ fontSize: 16, fontWeight: "bold" }}>OR</Text>
                <View style={[styles.dumLine, { marginRight: 20 }]}></View>
            </View>

            <View style={{ marginHorizontal: 20, marginTop: 10, alignItems: 'center' }}>
                <SocialIcon
                    title="Sign in with Facebook"
                    button
                    type="facebook"
                    style={styles.socialIcon}
                    onPress={() => { }}
                />
            </View>
            <View style={{ marginHorizontal: 20, marginTop: 10, alignItems: 'center' }}>
                <SocialIcon
                    title="Sign in with Google"
                    button
                    type="google"
                    style={styles.socialIcon}
                    onPress={() => { }}
                />
            </View>

            <View style={{ marginHorizontal: 20, marginTop: 24, flexDirection: 'row', alignItems: "center", alignSelf: "center" }}>
                <Text style={styles.text1}>New on FaithFood?</Text>
                <View style={{ marginLeft: 20 }}>
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
    container: {
        flex: 1,
    },
    text1: {
        color: Colors.text300,
        fontSize: 16
    },
    textInput: {
        borderWidth: 1,
        borderColor: Colors.text100,
        marginHorizontal: 20,
        borderRadius: 12,
        marginBottom: 20,
        paddingLeft: 15
    },
    passInput: {
        borderWidth: 1,
        borderColor: Colors.text100,
        marginHorizontal: 20,
        borderRadius: 12,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignContent: "center",
        alignItems: 'center',
        paddingLeft: 15
    },
    socialIcon: {
        borderRadius: 12,
        height: 50,
        width: '100%'
    },
    createAcc: {
        backgroundColor: 'white',
        alignContent: 'center',
        justifyContent: "center",
        borderRadius: 12,
        borderWidth: 1,
        borderColor: Colors.green600,
        height: 40,
        paddingHorizontal: 20
    },
    createAccText: {
        color: Colors.green600,
        fontSize: 16,
        alignItems: "center",
        justifyContent: 'center',
        marginTop: -3
    },
    dumLine: {
        backgroundColor: Colors.green400,
        height: 2,
        width: '40%',
    }
})