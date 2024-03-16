
import { View, Image } from "react-native";
import styles from "../css/global";
import logo from "./../../assets/images/logo.png";
import Button from "../Components/Button";
import Input from "../Components/Inputs";
import React from "react";



export default function Register() {
    return (

        <View style={styles.container}>
            <View style={styles.containerImg}>
                <Image source={logo} style={[styles.logoImage, { bottom: 100 }]} />
            </View>

            <View>
                <Input placeholder={"Digite seu email: "} bgColor={"white"} />
                <Input placeholder={"Digite seu número: "} bgColor={"white"} />
                <Input placeholder={"Digite sua senha: "} bgColor={"white"} />
            </View>

            <Button size={0} text={"Registrar"} colorText={"white"} width={150} top={40} />
        </View>


    )
}