
import React from "react";
import { TextInputProps } from "react-native";
import { TextInput } from "react-native";
import styles from "./styles";

interface InputProps extends TextInputProps {
    placeholder: string,
    bgColor: string,
    textColor?: string,
    bottom?:any,
    left?:any,
    rigth?:any,
    width?:any
 
}
function Input({ placeholder, bgColor, left, rigth, textColor, bottom,width, ...rest }: InputProps) {
    return (
        <TextInput {...rest} placeholder={placeholder} style={[styles.input, { backgroundColor: bgColor, color: textColor, bottom:bottom, left:left, right:rigth, width:width == null?250:width}]} placeholderTextColor={textColor} />
    )
}
export default Input;