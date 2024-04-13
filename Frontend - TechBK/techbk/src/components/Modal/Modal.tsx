import React, { useContext } from 'react';
import { Modal, View } from 'react-native';

import { TechContext } from '../../context/TechBkContext';
import Button from '../Button/Button';

interface ModalProps {
    isVisible: boolean
}

const ModalInfo = ({ isVisible }: ModalProps) => {
    const { changeVisible } = useContext(TechContext)
    return (
        <Modal transparent={true} animationType="slide" visible={isVisible} >
            <View style={{ display: "flex", backgroundColor: "rgba(0, 0, 0, 0.6)", height: "100%", width: "100%", alignItems: "center", justifyContent: "center", borderRadius: 7, flex: 1 }}>


                <Button top={60} width={"50%"} onPress={() => changeVisible(false)} text={'Sair'} colorText='white' />

            </View>
        </Modal>
    )
}

export default ModalInfo