import React, { useState } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { View, Text, StyleSheet } from "react-native";
import { Icon, withBadge } from "@rneui/base";

import HomeScreen from "../screens/HomeScreen";
import SearchScreen from "../screens/SearchScreen";
import MyOrders from "../screens/MyOrders";
import MyAccount from "../screens/MyAccount";
import { Colors } from "../global/Styles";

const TabNav = createBottomTabNavigator();

export default function ClientTabs() {

    const [orderCount, setOrderCount] = useState(0);

    return (
        <TabNav.Navigator
            initialRouteName="HomeScreen"
            screenOptions={{
                tabBarActiveTintColor: Colors.green600,
                headerShown: false,
            }}
        >
            <TabNav.Screen
                name="HomeScreen"
                component={HomeScreen}
                options={{
                    tabBarLabel: "Home",
                    tabBarIcon: ({ color, size }) => (
                        <Icon
                            type="material"
                            name="home"
                            size={size}
                            color={color}
                        />
                    )
                }}
            />

            <TabNav.Screen
                name="SearchScreen"
                component={SearchScreen}
                options={{
                    tabBarLabel: "Search",
                    tabBarIcon: ({ color, size }) => (
                        <Icon
                            type="material"
                            name="search"
                            size={size}
                            color={color}
                        />
                    )
                }}
            />

            <TabNav.Screen
                name="MyOrders"
                component={MyOrders}
                options={{
                    tabBarLabel: "Orders",
                    tabBarIcon: ({ color, size }) => (
                        <DynamicBadge
                            name="view-list"
                            type="material"
                            color={color}
                            size={size}
                            notif={orderCount}
                        />
                    )
                }}
            />

            <TabNav.Screen
                name="MyAccount"
                component={MyAccount}
                options={{
                    tabBarLabel: "Account",
                    tabBarIcon: ({ color, size }) => (
                        <Icon
                            type="material"
                            name="person"
                            size={size}
                            color={color}
                        />
                    )
                }}
            />

        </TabNav.Navigator>
    )
}

const styles = StyleSheet.create({

})

DynamicBadge = ({ notif, size, color, type, name }) => {
    if (notif == 0) {
        return (
            <Icon
                type={type}
                name={name}
                size={size}
                color={color}
            />
        )
    }
    else {
        const AccountIcon = withBadge(notif)(Icon);
        return (
            <AccountIcon
                type={type}
                name={name}
                size={size}
                color={color}
            />
        )
    }
}