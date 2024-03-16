import { View, Image , KeyboardAvoidingView, Dimensions} from "react-native";
import styles from "../css/global";
import Logo from "../../assets/images/logo.png";
import Button from "../Components/Button";
import Input from "../Components/Inputs";
import React from "react";


export const width = Dimensions.get("window").width
export const height = Dimensions.get("window").height

export default function Login({navigation}:any){

    return(
        <KeyboardAvoidingView behavior="padding" style={{flex:1}}>
            <View style={styles.container}>
                <View style={styles.containerImg}>
                    <Image source={Logo} style={[styles.logoImage, {bottom:100}]} />
                </View>

                <View>
                    <Input  placeholder={"Digite seu usuario: "} bgColor={"white"}/>
                    <Input   placeholder={"Digite sua senha: "} bgColor={"white"}/>
                </View>
                
                    <Button size={0} text={"Não possui login? Cadastre-se"} colorText={"white"} onPress={()=> navigation.navigate("Register")} backgroundColor={"transparent"} width={250} top={20}/>

                <Button size={0} text={"Login"} colorText={"white"}  width={150} top={40} onPress={() => {navigation.navigate("Home")}}/>
            </View>
            </KeyboardAvoidingView>
    
    )
}