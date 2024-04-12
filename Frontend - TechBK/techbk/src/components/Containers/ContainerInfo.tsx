import { Feather } from '@expo/vector-icons'
import React, { useState } from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'
import styles from './styles'
import stylesG from '../../css/global'
import Input from '../Inputs/Inputs'



interface ContainerInfoProps{
  text?: string,
  icon: any
}

const ContainerInfo = ({text, icon}:ContainerInfoProps) => {
    const [iconUser, setIconUser] = useState<string>("user");
  return (
    <View style={styles.containerInfo}>
      <Input bgColor={"#252525"} rigth={25} textColor='white' placeholder={"Search prdoucts:"} bottom={19}/>
        <TouchableOpacity>
            <View style={{width:65, height:68, borderRadius:30,  display:"flex", alignItems:"center", justifyContent:"center"}}>
                 <Feather name={icon} size={40} color={'white'}/>
            </View>
            </TouchableOpacity>

            <View style={{marginLeft:14}}>
              <Text style={styles.text}>{text}</Text>
            </View>
        </View>
  )
}

export default ContainerInfo;