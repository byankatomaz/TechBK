import { View, Text, TouchableOpacity } from "react-native"
import styles from "../css/Global"
import React from "react"
interface CardDetailsProps{
    nome?: string,
    codigo?: string
}
export default function CardDetails({nome, codigo}:CardDetailsProps){

    return(

            <View style={styles.cardDetails}>
                <View style={{display:"flex", flexDirection:"row",  width:"100%",height:25, justifyContent:"center", bottom:10, borderBottomWidth:1, borderBottomColor:"#009898"}}>
                    <Text style={{color:"white", paddingRight:40}}>Nome</Text>
                    <Text style={{color:"white", paddingLeft:20}}>Código do produto</Text>
                </View>
                <View style={{display:"flex", flexDirection:"row"}}>
                    <Text style={{color:"white", paddingRight:40}}>{nome}</Text>
                    <Text style={{color:"white", paddingLeft:20}}>{codigo}</Text>
                </View>
        </View>

    )
}