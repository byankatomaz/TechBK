
import { Image, SafeAreaView, ScrollView, View } from "react-native";
import styles from "../css/global";

import React from "react";
import { useForm } from "react-hook-form";
import stylesComponent from "../components/Inputs/styles";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import Button from "../components/Button/Button";
import Input from "../components/Inputs/Inputs";

// import { UserRegister } from "../services/UserService";
export default function Register() {
    const { handleSubmit, setValue, getValues } = useForm();

    const onSubmit = (data: any) => {
        // UserRegister(data);
        console.log(data.name)
    };


    return (

        <View style={styles.container}>

            <View style={styles.containerImage}>
                <Image source={require("./../../assets/logo.png")} style={[styles.image, { top: 80 }]} />
            </View>
            <ScrollView style={{ flex: 1, width: "100%", height: "160%", top: 70 }}>
                <SafeAreaView style={[stylesComponent.containerInput, { height: "100%", }]}>


                    <Input onChangeText={text => setValue("name", text)} placeholder={"Digite seu nome: "} bgColor={"white"} />
                    <Input onChangeText={text => setValue("email", text)} placeholder={"Digite seu email: "} bgColor={"white"} />
                    <Input onChangeText={text => setValue("password", text)} placeholder={"Digite sua senha: "} bgColor={"white"} />
                    <Input onChangeText={text => setValue("neighborhood", text)} placeholder={"Digite seu bairro: "} bgColor={"white"} />
                    <Input onChangeText={text => setValue("street", text)} placeholder={"Digite seu Logradouro: "} bgColor={"white"} />
                    <Input onChangeText={text => setValue("pac", text)} placeholder={"Digite seu Cep: "} bgColor={"white"} />
                    <Button onPress={handleSubmit(() => onSubmit(getValues()))} size={0} text={"Registrar"} colorText={"white"} width={"50%"} top={0} />

                </SafeAreaView>

            </ScrollView>

        </View>

    )
}