import { SafeAreaView, Text, TouchableOpacity, View } from 'react-native'
import CardBag from '../components/Card/CardBag'
import stylesComponent from '../components/TopHeader/styles'
import styles from '../css/global'
import Product from '../interfaces/Product';
import { ScrollView } from 'react-native-gesture-handler';
import Button from '../components/Button/Button';
import { useContext } from 'react';
import { TechContext } from '../context/TechBkContext';
import ModalInfo from '../components/Modal/Modal';

export default function Bag({ navigation, route }: any) {
    const { productBag }: Product = route.params;
    const {visible, changeVisible} = useContext(TechContext)
    return (
        
        <View style={styles.container}>
            
            <View style={[stylesComponent.topheader, { justifyContent: "flex-start" }]}>
                <Text style={styles.text}>Carrinho</Text>
            </View>

            <SafeAreaView style={{ width: "100%", height: "64%",padding:6 }}>

                <ScrollView >
                    <View style={{ width: "100%", height: 180, display:"flex" }}>
                        {productBag.title && <CardBag title={productBag.title} price={productBag.price} thumbnail={productBag.thumbnail} />}
                    </View>
                </ScrollView>
            </SafeAreaView>
            <Button width='85%' top={55} text='Checkout' colorText='white'/>
            <ModalInfo isVisible={visible} name={productBag.title} price={productBag.price} image={productBag.thumbnail}/>

        </View>
    )
}
