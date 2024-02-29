
import { View, Image , Text} from "react-native";
import styles from "../css/global";
import logo from "./../../assets/images/logo.png";
import Button from "../Components/Button";
import Input from "../Components/Inputs";
import StatusBarC from "../Components/StatusBar";



export default function Login(){
    return(
        <>
       <StatusBarC/>
        <View style={styles.container}>
            <View style={styles.containerImg}>
                <Image source={logo} style={[styles.logoImage, {bottom:100}]} />
            </View>

            <View>
               <Input placeholder={"Digite seu usuario: "} bgColor={"white"}/>
               <Input placeholder={"Digite sua senha: "} bgColor={"white"}/>
            </View>
            <View>
                <Button size={0} text={"Não possui login? Cadastre-se"} colorText={"white"} func={"Register"} backgroundColor={"transparent"} width={250} top={20}/>
            </View>
            <Button size={0} text={"Login"} colorText={"white"} func={"Home"} width={150} top={40}/>
        </View>
      
        </>
    )
}