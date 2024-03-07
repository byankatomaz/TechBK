import React, {useState} from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import styles from "../css/global";
import { FlatList } from "react-native-gesture-handler";
import { Feather } from "@expo/vector-icons";

import StatusBarC from "../Components/StatusBar";
import ContainerInfo from "../Components/ContainerInfo";


export default function Home({navigation}){
   
  
    const DATA = [
        {
          id: '1',
          title: 'Pedidos',
          screen:"Requests",
          icon:'box'
        },
        {
          id: '2',
          title: 'Entregas feitas',
          icon:'check-square',
          screen:"DeliveryDone",
        }
       
      ];
      
      type ItemProps = {title: string};
      
      const Item = ({title, icon}: ItemProps) => (
        <View style={styles.item}>
           <Feather name={icon} color={"white"} size={40} />
           <View style={{paddingTop:5}}>
                <Text style={styles.text}>{title}</Text>
           </View>
        
        </View>
      )
    return(
        <>
        <StatusBarC/>
        <View style={styles.container}>
        <ContainerInfo text={"Olá Keven!"} icon={"user"}/>
        <View style={{ width:"60%",position:"absolute",   alignItems:"center", justifyContent:"center"}}>
            <FlatList  data={DATA}
            renderItem={
                ({item}) => 
                <TouchableOpacity onPress={()=> navigation.navigate(item.screen)}>
                    <Item title={item.title} icon={item.icon} />   
                </TouchableOpacity>
              
            }
            keyExtractor={item => item.id}
      />
        </View>
        </View>
        
        </>
    )
}