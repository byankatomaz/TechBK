
import { View, Image } from "react-native";
import styles from "./../css/global";
import logo from "./../../assets/images/logo.png";
import Button from "../Components/Button";
import Input from "../Components/Inputs";

import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'


export default function Login(){
    return(
        <>
      

      
        <View style={styles.container}>
            <View style={styles.containerImg}>
                <Image source={logo} style={[styles.logoImage, {bottom:100}]} />
            </View>

            <View>
               <Input placeholder={"Digite seu usuario: "}/>
               <Input placeholder={"Digite sua senha: "}/>
            </View>
            <Button size={0} text={"Login"} colorText={"white"} func={""} width={150} top={40}/>
        </View>
      
        </>
    )
}