import { View, Text, TouchableOpacity } from "react-native";
import styles from "../css/global";
import Card from "../components/Card";
import ContainerInfo from "../components/ContainerInfo";
import React from "react";

export default function Requests() {

    return (
        <View style={styles.container}>
            <ContainerInfo text={"Pedidos"} icon={"box"} />
            <View style={{ width: "100%", display: "flex", alignItems: "center", height: "70%" }}>

                <View style={styles.cards}>
                    
                    <Card name={"MARIA ANTONIA DE APARECISA DSE"} />
                    
                </View>
            </View>

        </View>

    )
}