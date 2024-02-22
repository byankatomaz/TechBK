import React, {useState} from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import styles from "../css/global";
import { FlatList } from "react-native-gesture-handler";
import { Feather } from "@expo/vector-icons";
import logo from './../../assets/images/logo.png';
import StatusBarC from "../Components/StatusBar";


export default function Home({navigation}){
    const [iconUser, setIconUser] = useState<String>("user");
  
    const DATA = [
        {
          id: '1',
          title: 'Pedidos',
          screen:"Requests",
          icon:'box'
        },
        {
          id: '2',
          title: 'Pedidos feitos',
          icon:'check-square'
        },
        {
          id: '3',
          title: 'Logistica Pedidos',
          icon:'bar-chart-2'
        },
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
        <View style={styles.containerInfo}>
        <TouchableOpacity>
            <View style={{width:65, height:68, borderRadius:30,  display:"flex", alignItems:"center"}}>
  
                {iconUser == "user" ? <Feather name="user" size={55} color={'white'}/>: <Image source={logo} style={styles.logoImage}/>}
              
            </View>
            </TouchableOpacity>

            <View style={{marginLeft:14}}>
              <Text style={styles.text}>Olá Keven!</Text>
            </View>
        </View>
        <View style={{ width:"60%",position:"absolute", top:150,  alignItems:"center"}}>
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