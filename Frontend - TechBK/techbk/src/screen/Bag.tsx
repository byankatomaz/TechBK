import { Image, SafeAreaView, Text, TouchableOpacity, View } from 'react-native'
import CardBag from '../components/Card/CardBag'
import stylesComponent from '../components/TopHeader/styles'
import styles from '../css/global'
import { FlatList, } from 'react-native';
import Button from '../components/Button/Button';
import { useContext, useEffect, useState } from 'react';
import { TechContext } from '../context/TechBkContext';
import ModalPayment from '../components/Modal/ModalPayment';


export default function Bag({ navigation, route }: any) {

    const {changeVisiblePayment, bag, total, amountProduct} = useContext(TechContext)
  
    return (

        <View style={styles.container}>
        
            <View style={[stylesComponent.topheader, { justifyContent: "flex-start" }]}>
                <Text style={styles.text}>Carrinho</Text>
            </View>
            {bag.length == 0 && <Text style={[styles.text, { top: 100 }]}>Sem produtos no carrinho!</Text>}
            <SafeAreaView style={{ width: "100%", height: "70%", padding: 6, marginTop: 60 }}>
                <FlatList
                    data={bag}
                    renderItem={({ item }) => (
                        <View style={{ height: 130 }}>
                            <CardBag product={item} />
                        </View>
                    )}
                    keyExtractor={(item) => item.id}
                />

            </SafeAreaView>

            <View style={{ width: "100%", display: "flex", alignItems: "center",gap:12, borderTopWidth: 2, borderColor: "#009898" }}>
                <Text style={[styles.text, { top:10}]}>Total: R$ {bag.length == 0?0.00:total.toFixed(2)}</Text>
                <Button width='85%' top={17} onPress={() => { changeVisiblePayment(true) }} text='Confirmar compra' colorText='white' />
            </View>
           
            <ModalPayment/>
        </View>
    )
}
