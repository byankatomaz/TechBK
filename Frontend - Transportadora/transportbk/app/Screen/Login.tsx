import { View, Image , KeyboardAvoidingView, Dimensions, Pressable, Text} from "react-native";
import styles from "../css/global";
import Logo from "../../assets/images/logo.png";
import Button from "../Components/Button";
import Input from "../Components/Inputs";
import StatusBar from "../Components/StatusBar";
import React from "react";


export const width = Dimensions.get("window").width
export const height = Dimensions.get("window").height

export default function Login({navigation}:any){
    return(
        <KeyboardAvoidingView behavior="padding" style={{flex:1}}>
            <StatusBar/>
            <View style={styles.container}>
                <View style={styles.containerImg}>
                    <Image source={Logo} style={[styles.logoImage, {bottom:100}]} />
                </View>

                <View>
                <Input textColor="" placeholder={"Digite seu usuario: "} bgColor={"white"}/>
                <Input  textColor="" placeholder={"Digite sua senha: "} bgColor={"white"}/>
                </View>
                <View>
                    <Pressable onPress={()=> navigation.navigate("Register")} style={{backgroundColor:"#f40", padding:5}}>
                        <Text>aqui</Text>
                    </Pressable>
                    <Button size={0} text={"Não possui login? Cadastre-se"} colorText={"white"} onPress={()=> navigation.navigate("Register")} backgroundColor={"transparent"} width={"250"} top={"20"}/>
                </View>
                <Button size={0} text={"Login"} colorText={"white"}  width={"250"} top={"40px"} onPress={() => {console.log('oi')}}/>
            </View>
            </KeyboardAvoidingView>
    
    )
}