import {  PressableProps, Text, Pressable,View } from "react-native";
import styles from "../css/global";
import { Feather } from "@expo/vector-icons";
import { IconProps } from "@expo/vector-icons/build/createIconSet";
import React from "react";

interface CustomButtonProps extends PressableProps {
    text?: string;
    backgroundColor?: string;
    colorText?: string;
    size?: number;
    width?: number;
    top?: number;
    iconName?:string
  }
  
  const Button: React.FC<CustomButtonProps> = ({
    text,
    backgroundColor,
    colorText,
    size,
    width,
    top,
    iconName,
    ...rest
  }) => {
    return (
      <Pressable
        {...rest}
        style={[
          styles.button,
          { width: width, top: top, backgroundColor: backgroundColor || "#009898" },
        ]}
      >
        <Text style={{ color: colorText }}>{text}</Text>
        <View style={{ marginLeft: 10 }}>
          <Feather name={iconName} color={"white"} size={size} />
        </View>
      </Pressable>
    );
  };
export default Button;