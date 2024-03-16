import { View, Text, Image, TouchableOpacity } from 'react-native'
import { Feather } from '@expo/vector-icons'
import styles from '../css/global'
import React, { useState } from 'react'
import logo from './../../assets/images/logo.png';

const ContainerInfo = ({text, icon}:String) => {
    const [iconUser, setIconUser] = useState<string>("user");
  return (
    <View style={styles.containerInfo}>
        <TouchableOpacity>
            <View style={{width:65, height:68, borderRadius:30,  display:"flex", alignItems:"center"}}>
  
                {iconUser == "user" ? <Feather name={icon} size={55} color={'white'}/>: <Image source={logo} style={styles.logoImage}/>}
              
            </View>
            </TouchableOpacity>

            <View style={{marginLeft:14}}>
              <Text style={styles.text}>{text}</Text>
            </View>
        </View>
  )
}

export default ContainerInfo;