import React, { useState } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { TransitionPresets } from "@react-navigation/stack";
import Welcome from "../screens/Welcome";
import SignIn from "../screens/authScreens/SignInScreen";
import ClientTabs from "./ClientTabs";
import HomeMakerMap from "../screens/HomeMakerMap";

const Auth = createNativeStackNavigator();

export default function AuthStack() {
    return (
        <Auth.Navigator initialRouteName="Welcome">
            <Auth.Screen
                name="Welcome"
                component={Welcome}
                options={{
                    headerShown: false,
                }}
            />

            <Auth.Screen
                name="SignIn"
                component={SignIn}
                options={{
                    headerShown: false,
                }}
            />

            <Auth.Screen
                name="ClientTabs"
                component={ClientTabs}
                options={{
                    headerShown: false,
                }}
            />

            <Auth.Screen
                name="HomeMakerMap"
                component={HomeMakerMap}
                options={{
                    headerShown: false,
                }}
            />
        </Auth.Navigator>
    )
}