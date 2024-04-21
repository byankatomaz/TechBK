import {  Image,  SafeAreaView, Text, TouchableOpacity, View } from 'react-native'
import CardBag from '../components/Card/CardBag'
import stylesComponent from '../components/TopHeader/styles'
import styles from '../css/global'
import { FlatList, } from 'react-native';
import Button from '../components/Button/Button';
import { useContext, useState } from 'react';
import { TechContext } from '../context/TechBkContext';
import logo from '../../assets/logo.png'
import ModalPayment from '../components/Modal/ModalPayment';


export default function Bag({ navigation, route }: any) {
    
    const { visible, changeVisiblePayment, bag } = useContext(TechContext)
   
    return (

        <View style={styles.container}>
            <ModalPayment/>
            <View style={[stylesComponent.topheader, { justifyContent: "flex-start" }]}>
                <Text style={styles.text}>Carrinho</Text>
            </View>
            {bag.length == 0 && <Text style={[styles.text, {top:100}]}>Sem produtos no carrinho!</Text>}
            <SafeAreaView style={{ width: "100%", height: "64%", padding: 6 }}>
                    <FlatList
                        data={bag}
                        renderItem={({ item }) => (
                            <View style={{ height:130}}>
                                <CardBag title={item.title} price={item.price} thumbnail={item.thumbnail} official_store_name={item.official_store_name} />
                            </View>
                        )}
                        keyExtractor={(item) => item.id}
                    />
            
            </SafeAreaView>
            <Button width='85%' top={75} onPress={()=>{changeVisiblePayment(true) 
           
            }} text='Checkout' colorText='white' />
       
        </View>
    )
}
