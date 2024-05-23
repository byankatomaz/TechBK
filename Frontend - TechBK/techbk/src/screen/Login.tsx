import React, { useContext } from "react";
import { Dimensions, Image, View } from "react-native";
import Button from "../components/Button/Button";
import Input from "../components/Inputs/Inputs";
import styles from "../css/global";
import stylesInput from "../components/Inputs/styles";
import { useForm } from "react-hook-form";
import { UserService } from "../services/UserService";
import {  LoginInterface } from "../interfaces/Login";
import { TechContext } from "../context/TechBkContext";
import { api } from "../../api/ApiProducts";
export const width = Dimensions.get("window").width
export const height = Dimensions.get("window").height

export default function Login({ navigation }: any) {

    const { handleSubmit, setValue, getValues } = useForm<LoginInterface>();
    const { loggedIn } = useContext(TechContext)

    const onSubmit = async () => {
        let loginT:LoginInterface={
            email:getValues("email"),
            password: getValues("password")
        }
        const {status, data} = await UserService.login(loginT)
        console.log(data.auth_token)
        if(data.auth_token){
            api.defaults.headers.Authorization = `Token ${data.auth_token}`;
            loggedIn(data.auth_token)
            navigation.navigate("ProductList")
        
        }
  
       
    };
    return (

        <View style={styles.container}>
            <View style={[styles.containerImage, { bottom: 0 }]}>
                <Image source={require("./../../assets/logo.png")} style={[styles.image, { bottom: 100 }]} />
            </View>
            <View style={[stylesInput.containerInput, { bottom: 40 }]}>
                <Input placeholder={"Digite seu usuario: "} bgColor={"white"} onChangeText={(text)=>setValue("email", text)} />
                <Input placeholder={"Digite sua senha: "} bgColor={"white"}  onChangeText={(text)=>setValue("password", text)}/>
            </View>
            <Button size={0} text={"Não possui login? Cadastre-se"} colorText={"white"} onPress={() => navigation.navigate("Register")} backgroundColor={"transparent"} width={"60%"} top={0} />
            <Button size={0} text={"Login"} colorText={"white"} width={"50%"} top={0} onPress={handleSubmit(onSubmit)} />
        </View>


    )
}