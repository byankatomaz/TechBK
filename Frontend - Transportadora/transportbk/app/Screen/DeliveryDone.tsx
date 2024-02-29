import { View, Text, TouchableOpacity } from "react-native";
import styles from "../css/global";
import ContainerInfo from "../Components/ContainerInfo";
import StatusBarC from "../Components/StatusBar";
import Card from "../Components/Card";

import Input from "../Components/Inputs";
import { Modal } from "react-native";
import { Feather } from "@expo/vector-icons";
import { useState } from "react";

export default function DeliveryDone(){
    const [visible, setVisible] = useState<boolean>(false)

    const toggleModal = () => {
        setVisible(false);
      };
    return (
        <>
        <StatusBarC/>
        <View style={[styles.container]}>
            <ContainerInfo text={"Entregas feitas"} icon={"check-square"}/>
            <View style={{display:"flex", justifyContent:"flex-start", width:"80%", paddingBottom:12, flexDirection:"row", marginBottom:10}}>
               <Input placeholder={"Filtro"} bgColor={"#252525"} textColor={"white"}/>
               <TouchableOpacity onPress={()=> setVisible(true)} style={{width:70, backgroundColor:"#009898", height:50, borderRadius:7, top:35, display:"flex", justifyContent:"center", alignItems:"center"}}>
                <Feather size={35} name="search"/>
               </TouchableOpacity>
            </View>
            <View style={styles.cards}>
            <Card />
            </View>
           
            <Modal presentationStyle={"overFullScreen"} transparent={true}  style={{display:"flex", justifyContent:"center", alignItems:"flex-end"}}  animationType="slide" visible={visible} >
                <View style={{display:"flex", backgroundColor:"#252525",height:"60%", width:"85%",justifyContent:"center", alignItems:"center",borderRadius:7, left:31, top:170 }}>
               

                <TouchableOpacity style={[styles.button, {top:300}]} onPress={toggleModal} >
                    <Text style={{ color:"white", }}>Confirmar</Text>
                </TouchableOpacity>
             </View>
            </Modal>



        </View>
        
        </>
    )
}