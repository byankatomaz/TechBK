
import { Image, View } from "react-native";
import styles from "../css/global";

import React from "react";
import { useForm } from "react-hook-form";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import Button from "../components/Button/Button";
import Input from "../components/Inputs/Inputs";
// import { UserRegister } from "../services/UserService";
export default function Register() {
    const { handleSubmit, setValue, getValues } = useForm();

    const onSubmit = (data:any) => {
        // UserRegister(data);
        console.log(data.email)
    };

    
    return (
        <KeyboardAwareScrollView>
            <View style={styles.container}>
                <View style={styles.containerImg}>
                    <Image source={require("./../../assets/logo.png")} style={[styles.image, { bottom: 100 }]} />
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