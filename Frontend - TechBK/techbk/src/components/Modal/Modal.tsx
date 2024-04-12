import React, { useContext } from 'react';
import { Image, Modal, View } from 'react-native';
import styles from '../Card/styles';

import { TechContext } from '../../context/TechBkContext';
import Button from '../Button/Button';
import CardDetails from '../Card/CardDetails';

interface ModalProps {
    isVisible: boolean
}

const ModalInfo = ({ isVisible }: ModalProps) => {
    const { changeVisible } = useContext(TechContext)
    return (
        <Modal presentationStyle={"overFullScreen"} transparent={true} style={{ display: "flex", justifyContent: "center", alignItems: "flex-end" }} animationType="slide" visible={isVisible} >
            <View style={{ display: "flex", backgroundColor: "#252525", height: "60%", width: "90%", alignItems: "center", borderRadius: 7, left: 20, top: 130 }}>

                <View style={{ width: '100%', height: "50%", backgroundColor: "white" }}>
                    <Image source={require("../../../assets/cell.jpeg")} style={{ width: "100%", height: "100%" }} />
                </View>
                <View style={[styles.cards, { width: "100%" }]}>
                    <CardDetails />
                </View>
                <Button top={60} width={250} onPress={() => changeVisible(false)} text='Sair' colorText='white' />

            </View>
        </Modal>
    )
}

export default ModalInfo