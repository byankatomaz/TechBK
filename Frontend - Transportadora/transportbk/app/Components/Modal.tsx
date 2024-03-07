import { View, Text, Modal,TouchableOpacity, Image } from 'react-native'
import React, { useContext } from 'react'
import styles from '../css/global'
import imageCell from '../../assets/images/cell.jpeg';
import CardDetails from './CardDetails';
import { TechContext } from '../context/TechBkContext';
const ModalInfo = () => {
  const {visible, changeVisible} = useContext(TechContext)
  return (
    <Modal presentationStyle={"overFullScreen"} transparent={true} style={{ display: "flex", justifyContent: "center", alignItems: "flex-end" }} animationType="slide" visible={visible} >
    <View style={{ display: "flex", backgroundColor: "#252525", height: "60%", width: "85%", alignItems: "center", borderRadius: 7, left: 31, top: 130 }}>

        <View style={{ width: '100%', height: "50%", backgroundColor: "white" }}>
            <Image source={imageCell} style={{ width: "100%", height: "100%" }} />
        </View>
        <View style={[styles.cards, {width:"100%"}]}>
            <CardDetails/>
        </View>
        <TouchableOpacity style={[styles.button, { top: 60 }]} onPress={() => changeVisible(false)} >
            <Text style={{ color: "white", }}>Sair</Text>
        </TouchableOpacity>
    </View>
</Modal>
  )
}

export default ModalInfo