import React, {useState} from "react";
import { View, Text, TouchableOpacity } from "react-native";
import styles from "../css/global";
import { FlatList } from "react-native-gesture-handler";

export default function Home(){
    const DATA = [
        {
          id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
          title: 'Produtos entregues',
        },
        {
          id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
          title: 'Produtos a entregar',
        },
        {
          id: '58694a0f-3da1-471f-bd96-145571e29d72',
          title: 'Produtos teste',
        },
      ];
      
      type ItemProps = {title: string};
      
      const Item = ({title}: ItemProps) => (
        <View style={{backgroundColor:"#009898", marginTop:50, width:250, height:100, justifyContent:"center", alignItems:"center"}}>
          <Text style={{color:"white"}}>{title}</Text>
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