import { Text, View, TouchableOpacity } from "react-native"
import styles from "../css/global"
import { useState } from "react";
import { Feather } from "@expo/vector-icons";
export default function Card({nome}:string){

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
            <View style={{display:"flex", flexDirection:"row",  width:"52%",height:25, justifyContent:"space-between", bottom:10, borderBottomWidth:1, borderBottomColor:"#009898"}}>
                <Text style={{color:"white"}}>Nome</Text>
                <Text style={{color:"white", left:105}}>Status</Text>
            </View>
            <View style={{display:"flex", flexDirection:"row", width:310, height:100}}>
                <Text style={{color:"white"}}>{nome}</Text>
                <TouchableOpacity onPress={changeColor} style={{ width:40, display:"flex", alignItems:"center", marginLeft:nome == null?260:33}}>
                    <Feather name="square" color={color} size={25} />
                </TouchableOpacity>
            </View>
    </View>
    )
}