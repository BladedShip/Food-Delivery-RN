import React, { useState, useRef } from "react";
import { View, Text, StyleSheet, Dimensions, TextInput } from "react-native";
import { Colors, Parameters, GlobalStyles } from "../../global/Styles";
import { Icon } from "@rneui/themed";
import Header from "../../components/Header";
import * as Animatable from "react-native-animatable";

export default function SignIn() {

    const[textInputFocus,setTextInputFocus] = useState(false);

    const textInput = useRef(1);
    const textInputAlt = useRef(2);

    return (
        <View style={styles.container}>
            <Header title="Account Login" type="arrow-left" />

            <View style={{ marginLeft: 20, marginTop: 10 }}>
                <Text style={GlobalStyles.title}>Sign In</Text>
            </View>
            <View style={{ marginTop: 10, alignItems: 'center' }}>
                <Text style={styles.text1}>Enter your email and password</Text>
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
                <View style={styles.textInputAlt}>
                    <Animatable.View animation={textInputFocus?"":"fadeInRight"} duration={400}>
                        <Icon
                            name="lock"
                            iconStyle={{ color: Colors.text200 }}
                            type="material"
                            style={{}}
                        />
                    </Animatable.View>
                    <TextInput
                        style={{ width: "80%" }}
                        placeholder="Password"
                        ref={textInputAlt}
                        onFocus = {()=>{
                            setTextInputFocus(false)
                        }}
                        onBlur = {()=>{
                            setTextInputFocus(true)
                        }}
                    />
                    <Animatable.View animation={textInputFocus?"":"fadeInLeft"} duration={400}>
                        <Icon
                            name="visibility-off"
                            iconStyle={{ color: Colors.text200 }}
                            type="material"
                            style={{ marginRight: 10 }}
                        />
                    </Animatable.View>
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
    textInputAlt: {
        borderWidth: 1,
        borderColor: Colors.text100,
        marginHorizontal: 20,
        borderRadius: 12,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignContent: "center",
        alignItems: 'center',
        paddingLeft: 15
    }
})