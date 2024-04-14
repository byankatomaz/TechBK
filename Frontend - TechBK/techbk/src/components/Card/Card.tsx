import { Text, View, TouchableOpacity } from "react-native"
import styles from "./styles";
import { useState } from "react";
import { Feather } from "@expo/vector-icons";
import React from "react";
import stylesGlobal from "../../css/global";
interface CardProps{
    name: string
}

export default function Card({name}:CardProps){

   
    
    return(
        <View style={styles.card}>
            <View>
            <Text style={stylesGlobal.text}>Deseja remover o item?</Text>
            </View>
          
            <View style={{display:"flex", flexDirection:"row", width:"100%",justifyContent:"space-around",alignItems:"center", height:100}}>
              
                <TouchableOpacity  style={{ width:40, display:"flex", alignItems:"center", }}>
                    <Feather name="x" color={'white'} size={35} />
                </TouchableOpacity>
                <TouchableOpacity  style={{ width:40, display:"flex", alignItems:"center", }}>
                    <Feather name="check" color={'white'} size={35} />
                </TouchableOpacity>
            </View>
    </View>
    )
}