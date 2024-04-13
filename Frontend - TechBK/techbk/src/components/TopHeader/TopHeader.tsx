import { Feather } from '@expo/vector-icons'
import React, { useContext } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'

import styles from './styles'
import Input from '../Inputs/Inputs'
import ModalInfo from '../Modal/Modal'
import { TechContext } from '../../context/TechBkContext'



interface ToHeaderProps {
  text?: string,
  icon: any,
  typeTopHeader?: boolean,
  
}

const TopHeader = ({ text, icon, typeTopHeader }: ToHeaderProps) => {
  const {visible, changeVisible} = useContext(TechContext)
  const TopHeaderProductList = () => (
    <View style={styles.headers}>
      <Input bgColor={"#252525"} textColor='white' placeholder={"Search prdoucts:"} bottom={19} />
      <TouchableOpacity>
        <View style={{ width: 65, height: 68, borderRadius: 30, display: "flex", alignItems: "center", justifyContent: "center" }}>
          <Feather name={icon} size={30} color={'white'} />
        </View>
      </TouchableOpacity>
    </View>
  )
  const TopHeaderProductDetails = () => (
    <View style={styles.headers}>
     
      <Text style={styles.text}>{text}</Text>
      <TouchableOpacity onPress={()=>changeVisible(tr)}>
        <View style={{ width: 65, height: 68, borderRadius: 30, display: "flex", alignItems: "center", justifyContent: "center" }}>
          <Feather name={icon} size={30} color={'white'} />
        </View>
      </TouchableOpacity>
    </View>
  )
  return (
    <View style={styles.topheader}>
      {typeTopHeader == true ? <TopHeaderProductList /> :<TopHeaderProductDetails/>}
    <ModalInfo isVisible={visible}/>
    </View>
  )
}

export default TopHeader;