import React, { useState } from "react";
import { createStackNavigator, TransitionPresets } from "@react-navigation/stack";
import Welcome from "../screens/Welcome";
import SignIn from "../screens/authScreens/SignInScreen";

const authStk = createStackNavigator();

export default function AuthStack() {
    return (
        <authStk.Navigator>
            <authStk.Screen
                name="Welcome"
                component={Welcome}
                options={{
                    headerShown: false,
                    ...TransitionPresets.RevealFromBottomAndroid
                }}
            />

            <authStk.Screen
                name="Sign In"
                component={SignIn}
                options={{
                    headerShown: false,
                    ...TransitionPresets.RevealFromBottomAndroid
                }}
            />
        </authStk.Navigator>
    )
}