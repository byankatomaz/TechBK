
import { View, Image, } from "react-native";
import styles from "../css/global";
import Button from "../components/Button";
import React from "react";


export default function Welcome({ navigation }: any) {

    return (
        <View style={styles.container}>
            <View style={styles.containerImg}>
                <Image source={require("./../../assets/logo.png")} style={styles.logoImage} />
            </View>
            <View>
                <Button text={"Bem-vindo(a) ao BK Transport"} colorText={"white"} onPress={() => navigation.navigate("Login")} size={30} top={100} width={280} />
            </View>
        </View>
    )
}