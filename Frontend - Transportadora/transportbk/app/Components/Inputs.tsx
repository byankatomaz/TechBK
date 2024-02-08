import { Text, TouchableOpacity } from "react-native";
import styles from "../css/global";
import { Feather } from "@expo/vector-icons";
import { TextInput } from "react-native-gesture-handler";

function Input ({placeholder}){
    return(
       <TextInput placeholder={placeholder} style={styles.input}/>
    )
}
export default Input;