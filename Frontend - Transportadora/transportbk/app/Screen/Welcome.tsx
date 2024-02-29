
import { View, Image ,} from "react-native";
import styles from "../css/global";
import logo from "./../../assets/images/logo.png";
import Button from "../Components/Button";
import StatusBarC from "../Components/StatusBar";





 


export default function Welcome({navigation}){
   
   
    return(
        <>
        <StatusBarC/>
        <View style={styles.container}>
       
            <View style={styles.containerImg}>
                <Image source={logo} style={styles.logoImage} />
            </View>

            <View>
                <Button  text={"Bem-vindo(a) ao BK Transport"} colorText={"white"} func={"Login"} size={30} top={100} width={280}/>
            </View>
        </View>
        </>
    )
}