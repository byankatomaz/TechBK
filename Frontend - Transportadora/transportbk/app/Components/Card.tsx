import { View, Text, TouchableOpacity } from "react-native"
import styles from "../css/global"
import { Feather } from "@expo/vector-icons"
import { useState } from "react"

export default function Card({nome, codigo}){
    const [color, setColor] = useState<String>("red");
    const [countTouch, setCountTouch] =  useState<Number>(1);
    
    const changeColor = () =>{
        let n:Number = countTouch;
        setCountTouch(n+=1);
        console.log(countTouch);
        countTouch == 3?setCountTouch(1):console.log("continue the same thing")
        change(n)
    }
    const change = (n:Number)=>{
        switch(n){
            
            case 2:
                setColor("green");
                break;

            case 3:
                setColor("yellow");
                break;
            default:
                setColor("red")
                break;
        }
    }
    return(
        <View style={styles.card}>
            <View style={{display:"flex", flexDirection:"row",  width:"100%",height:25, justifyContent:"center", bottom:10, borderBottomWidth:1, borderBottomColor:"#009898"}}>
            <Text style={{color:"white", paddingRight:40}}>Nome</Text>
            <Text style={{color:"white", paddingLeft:20}}>Código do produto</Text>
            <Text style={{color:"white", paddingLeft:50}} >Status</Text>

           
            </View>
            <View style={{display:"flex", flexDirection:"row"}}>
            <Text style={{color:"white", paddingRight:40}}>{nome}</Text>
            <Text style={{color:"white", paddingLeft:20}}>{codigo}</Text>
            <TouchableOpacity onPress={changeColor}>
            <Feather name="square" style={{paddingLeft:50, marginLeft:nome == null?155:0}} color={color} size={25} />
            </TouchableOpacity>
         
            </View>
        </View>

    )
}