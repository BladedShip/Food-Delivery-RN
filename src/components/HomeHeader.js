import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Colors, Parameters, GlobalStyles } from "../global/Styles";
import { Icon, withBadge } from "@rneui/base";

let notifCount = 0;
const CartIcon = withBadge(notifCount)(Icon);

export default function HomeHeader() {

    return (
        <View style={styles.header}>

            <View style={{alignItems:"center",justifyContent:"center",marginLeft:15}}>
                <Icon 
                    type="material-community"
                    name="menu"     
                    size={32} 
                    color={Colors.prim600} 
                />
            </View>

            <View style={{alignContent:"center",justifyContent:"center"}}>
                <Text style={{color:Colors.prim600,fontSize:25,fontWeight:"bold"}}>FaithFood</Text>
            </View>

            <View style={{alignContent:"center",justifyContent:"center",marginRight:15}}>
                <Badge/>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: Colors.green600,
        height: Parameters.headerHeight,
        flexDirection:"row",
        justifyContent:"space-between",
    }
})

Badge=()=>{
    if(notifCount==0){
        return(
                <Icon
                    type="material-community"
                    name="cart"
                    size={32}
                    color={Colors.prim600}
                />
        )
    }
    else{
        return(
                <CartIcon
                    type="material-community"
                    name="cart"
                    size={32}
                    color={Colors.prim600}
                />
        )
    }
}