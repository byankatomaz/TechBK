import React, { useContext } from 'react';
import { Modal, View } from 'react-native';

import { TechContext } from '../../context/TechBkContext';
import Button from '../Button/Button';
import Card from '../Card/Card';

interface ModalProps {
    name?:string,
    type?:string
}

const ModalInfo = ({  name, type }: ModalProps) => {
    const { changeVisible, visible } = useContext(TechContext)
    
    return (
        <Modal transparent={true} animationType="slide" visible={visible} >
            <View style={{ display: "flex", backgroundColor: "rgba(0, 0, 0, 0.6)", height: "100%", width: "100%", alignItems: "center", justifyContent: "center", borderRadius: 7, flex: 1 }}>
             
                {!type && <Card name={name}/>}
                {type && <Button top={60} width={"50%"} onPress={() => changeVisible(false)} text={'Sair'} colorText='white' />}

            </View>
        </Modal>
    )
}

export default ModalInfo