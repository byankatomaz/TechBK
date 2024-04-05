
import { View, Image } from "react-native";
import styles from "../css/global";

import Button from "../components/Button";
import Input from "../components/Inputs";
import React from "react";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { useForm } from "react-hook-form";
import { UserRegister } from "../services/UserService";
export default function Register() {
    const { handleSubmit, setValue, getValues } = useForm();

    const onSubmit = (data:any) => {
        UserRegister(data);
        console.log(data.email)
    };

    
    return (
        <KeyboardAwareScrollView>
            <View style={styles.container}>
                <View style={styles.containerImg}>
                    <Image source={require("./../../assets/logo.png")} style={[styles.logoImage, { bottom: 100 }]} />
                </View>
                <View>
                    <Input  onChangeText={text => setValue("name", text)} placeholder={"Digite seu nome: "} bgColor={"white"} />
                    <Input onChangeText={text => setValue("email", text)} placeholder={"Digite seu número: "} bgColor={"white"} />
                    <Input onChangeText={text => setValue("password", text)} placeholder={"Digite sua senha: "} bgColor={"white"} />
                </View>
                <Button  onPress={handleSubmit(() => onSubmit(getValues()))} size={0} text={"Registrar"} colorText={"white"} width={150} top={40} />
            </View>
        </KeyboardAwareScrollView>
    )
}