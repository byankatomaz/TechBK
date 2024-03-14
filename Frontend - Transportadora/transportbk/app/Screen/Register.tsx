
import { View, Image} from "react-native";
import styles from "../css/global";
import logo from "./../../assets/images/logo.png";
import Button from "../Components/Button";
import Input from "../Components/Inputs";
import StatusBar from "../Components/StatusBar";



export default function Register(){
    return(
        <>
       <StatusBar/>
        <View style={styles.container}>
            <View style={styles.containerImg}>
                <Image source={logo} style={[styles.logoImage, {bottom:100}]} />
            </View>

            <View>
               <Input placeholder={"Digite seu email: "} bgColor={"white"}/>
               <Input placeholder={"Digite seu número: "} bgColor={"white"}/>
               <Input placeholder={"Digite sua senha: "} bgColor={"white"}/>
            </View>
           
            <Button size={0} text={"Registrar"} colorText={"white"} func={""} width={150} top={40}/>
        </View>
      
        </>
    )
}