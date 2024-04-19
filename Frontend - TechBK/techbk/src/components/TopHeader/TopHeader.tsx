import { Feather } from '@expo/vector-icons'
import React, { useContext, useState } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { useNavigation } from '@react-navigation/native'
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
  const { visible, findProducts, filter } = useContext(TechContext)

  const TopHeaderProductDetails = () => (
    <View style={[styles.headers, {justifyContent:"flex-end"}]}>

      <Text style={styles.text}>{text}</Text>
      <TouchableOpacity >
        <View style={{ width: 65, height: 68, borderRadius: 30, display: "flex", alignItems: "center", justifyContent: "center" }}>
          <Feather name={icon} size={30} color={'white'} />
        </View>
      </TouchableOpacity>
    </View>
  )
  return (
    <View style={styles.topheader}>
      {typeTopHeader == true ?
        <View style={styles.headers}>
          <Input bgColor={"#252525"} value={filter} textColor='white' placeholder={"Search prdoucts:"} onChangeText={(text) => findProducts(text)} />
        </View> 
        : <TopHeaderProductDetails />}
      <ModalInfo isVisible={visible} />
    </View>
  )
}

export default TopHeader;