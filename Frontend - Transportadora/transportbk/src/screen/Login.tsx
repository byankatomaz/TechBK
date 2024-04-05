import { View, Image, Dimensions} from "react-native";
import styles from "../css/global";
import Button from "../components/Button";
import Input from "../components/Inputs";
import React from "react";
import {KeyboardAwareScrollView} from "react-native-keyboard-aware-scroll-view"

export const width = Dimensions.get("window").width
export const height = Dimensions.get("window").height

export default function Login({navigation}:any){
    
    return(
        <KeyboardAwareScrollView>
            <View style={styles.container}>
                <View style={styles.containerImg}>
                    <Image source={require("./../../assets/logo.png")} style={[styles.logoImage, {bottom:100}]} />
                </View>
                <View>
                    <Input  placeholder={"Digite seu usuario: "} bgColor={"white"}/>
                    <Input   placeholder={"Digite sua senha: "} bgColor={"white"}/>
                </View>
                    <Button size={0} text={"Não possui login? Cadastre-se"} colorText={"white"} onPress={()=> navigation.navigate("Register")} backgroundColor={"transparent"} width={250} top={20}/>
                <Button size={0} text={"Login"} colorText={"white"}  width={150} top={40} onPress={() => {navigation.navigate("Home")}}/>
            </View>
        </KeyboardAwareScrollView>
    
    )
}