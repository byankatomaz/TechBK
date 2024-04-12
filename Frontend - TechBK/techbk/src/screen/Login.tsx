import React from "react";
import { Dimensions, Image, View } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import Button from "../components/Button/Button";
import Input from "../components/Inputs/Inputs";
import styles from "../css/global";
import stylesInput from "../components/Inputs/styles";
export const width = Dimensions.get("window").width
export const height = Dimensions.get("window").height

export default function Login({navigation}:any){
    
    return(
        <KeyboardAwareScrollView>
            <View style={styles.container}>
                <View style={[styles.containerImg, {bottom:0}]}>
                    <Image source={require("./../../assets/logo.png")} style={[styles.image, {bottom:100}]} />
                </View>
                <View style={[stylesInput.containerInput, {bottom:40}]}>
                    <Input  placeholder={"Digite seu usuario: "} bgColor={"white"}/>
                    <Input   placeholder={"Digite sua senha: "} bgColor={"white"}/>
                </View>
                    <Button size={0} text={"Não possui login? Cadastre-se"} colorText={"white"} onPress={()=> navigation.navigate("Register")} backgroundColor={"transparent"} width={250} top={20}/>
                <Button size={0} text={"Login"} colorText={"white"}  width={150} top={40} onPress={() => {navigation.navigate("Home")}}/>
            </View>
        </KeyboardAwareScrollView>
    
    )
}