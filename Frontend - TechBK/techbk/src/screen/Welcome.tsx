
import React from "react";
import { Image, View, } from "react-native";
import Button from "../components/Button/Button";
import styles from "../css/global";


export default function Welcome({ navigation }: any) {

    return (
        <View style={styles.container}>
            <View style={styles.containerImage}>
                <Image source={require("../../assets/logo.png")} style={styles.image} />
            </View>
            <View>
                <Button text={"Bem-vindo(a) ao E-commerce TechBK"} colorText={"white"} onPress={() => navigation.navigate("Login")} size={30} top={100} width={"80%"} />
            </View>
        </View>
    )
}