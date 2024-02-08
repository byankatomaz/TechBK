import { Text, TouchableOpacity } from "react-native";
import styles from "../css/global";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "expo-router";

function Button ({text, colorText, func, size, width, top}){
    const navigation = useNavigation()
    return(
        <TouchableOpacity style={[styles.button, {width:width, top:top}]} onPress={()=> navigation.navigate(func)}>
            <Text style={{color:colorText}}>{text}</Text>
            <Feather style={{marginLeft:10}} name="arrow-right" color={"white"} size={size} / >
        </TouchableOpacity>
    )
}
export default Button;