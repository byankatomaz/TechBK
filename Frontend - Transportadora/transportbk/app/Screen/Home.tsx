import React, {useState} from "react";
import { View, Text, TouchableOpacity } from "react-native";
import styles from "../css/global";
import { FlatList } from "react-native-gesture-handler";
import { Feather } from "@expo/vector-icons";

export default function Home(){
    const DATA = [
        {
          id: '1',
          title: 'Produtos entregues',
        },
        {
          id: '2',
          title: 'Produtos a entregar',
        },
        {
          id: '3',
          title: 'Produtos com Defeitos',
        },
      ];
      
      type ItemProps = {title: string};
      
      const Item = ({title}: ItemProps) => (
        <View style={{backgroundColor:"#009898", marginTop:50, width:250, height:100, justifyContent:"center", alignItems:"center"}}>
          <Text style={{color:"white"}}>{title}</Text>
          <Feather name="box" color={"white"} size={40}/>
        </View>
      )
    return(
        <>
        <View style={styles.container}>
        <View style={{borderWidth:2, borderBottomColor:"#009898", width:"95%", position:"absolute", top:40, padding:5}}>
            <Text style={{color:"white", fontSize:25}}>Inicio</Text>
        </View>
        <View style={{ width:"60%",position:"absolute", top:100,  alignItems:"center", }}>
            <FlatList  data={DATA}
            renderItem={
                ({item}) => 
                <TouchableOpacity>
                    <Item title={item.title} />   
                </TouchableOpacity>
              
            }
            keyExtractor={item => item.id}
      />
        </View>
        </View>
        
        </>
    )
}