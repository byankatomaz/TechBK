import { Text, TouchableOpacity } from "react-native";
import styles from "../css/global";
import { Feather } from "@expo/vector-icons";
import { TextInput } from "react-native-gesture-handler";

function Input ({placeholder, bgColor, textColor}:String){
    return(
       <TextInput placeholder={placeholder} style={[styles.input, {backgroundColor:bgColor, color:textColor}]} placeholderTextColor={textColor}/>
    )
}
export default Input;