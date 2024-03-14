
import styles from "../css/global";
import { TextInput } from "react-native-gesture-handler";
import React from "react";

interface InputProps{
    placeholder: string,
    bgColor: string,
    textColor: string
}
function Input ({placeholder, bgColor, textColor}:InputProps){
    return(
       <TextInput placeholder={placeholder} style={[styles.input, {backgroundColor:bgColor, color:textColor}]} placeholderTextColor={textColor}/>
    )
}
export default Input;