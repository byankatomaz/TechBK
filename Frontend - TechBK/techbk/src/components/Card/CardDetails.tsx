import React from "react"
import { Text, View } from "react-native"
import styles from "./styles"

interface CardDetailsProps{
    name?: string,
    product_code?: string
}
export default function CardDetails({name, product_code}:CardDetailsProps){

    return(

            <View style={styles.cardDetails}>
                <View style={{display:"flex", flexDirection:"row",  width:"100%",height:25, justifyContent:"center", bottom:10, borderBottomWidth:1, borderBottomColor:"#009898"}}>
                    <Text style={{color:"white", paddingRight:40}}>Nome</Text>
                    <Text style={{color:"white", paddingLeft:20}}>Código do produto</Text>
                </View>
                <View style={{display:"flex", flexDirection:"row"}}>
                    <Text style={{color:"white", paddingRight:40}}>{name}</Text>
                    <Text style={{color:"white", paddingLeft:20}}>{product_code}</Text>
                </View>
        </View>

    )
}