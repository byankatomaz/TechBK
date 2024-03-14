import {  PressableProps, Text, TouchableOpacity, TouchableOpacityProps, View } from "react-native";
import styles from "../css/global";
import { Feather } from "@expo/vector-icons";

import React from "react";


interface ButtonProps extends PressableProps {
    text?: string,
    colorText?: string,
    size?: number,
    width?: string,
    top?: string,
    backgroundColor?: string,

}

const Button = ({text, colorText, size, width, top, backgroundColor, ...rest}:ButtonProps)=>{
    return(
        // style={[styles.input, {backgroundColor:bgColor, color:textColor}]}
        <TouchableOpacity {...rest} style={[styles.button, {width:width, top:top, backgroundColor:backgroundColor || "#009898"}]}>
            <Text style={{color:colorText}}>{text}</Text>
            <Feather style={{marginLeft:10}} name="arrow-right" color={"white"} size={size} />
        </TouchableOpacity>
    )
}
export default Button;