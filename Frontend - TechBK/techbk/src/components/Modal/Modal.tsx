import React, { useContext } from 'react';
import { Modal, View } from 'react-native';

import { TechContext } from '../../context/TechBkContext';
import Button from '../Button/Button';
import Product from '../../interfaces/Product';
import Card from '../Card/Card';

interface ModalProps {
    isVisible: boolean,
    name:string,
    price:string,
    image:any
}

const ModalInfo = ({ isVisible, name, price,image }: ModalProps) => {
    const { changeVisible } = useContext(TechContext)
    return (
        <Modal transparent={true} animationType="slide" visible={isVisible} >
            <View style={{ display: "flex", backgroundColor: "rgba(0, 0, 0, 0.6)", height: "100%", width: "100%", alignItems: "center", justifyContent: "center", borderRadius: 7, flex: 1 }}>
                <View></View>
                <Card name={name} image={image} price={price}/>
                <Button top={60} width={"50%"} onPress={() => changeVisible(false)} text={'Sair'} colorText='white' />

            </View>
        </Modal>
    )
}

export default ModalInfo