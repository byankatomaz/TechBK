import { View, Text, Image, Alert } from 'react-native'
import React, { useContext, useEffect } from 'react'
import styles from '../css/global'
import Product from '../interfaces/Product';
import TopHeader from '../components/TopHeader/TopHeader';
import Button from '../components/Button/Button';
import { TechContext } from '../context/TechBkContext';
import { NotificationContentInput, scheduleNotificationAsync } from 'expo-notifications';
import { SafeAreaView } from 'react-native-safe-area-context';


function ProductDetails({ navigation, route }: any) {
  const { product }: any = route.params;
  const { addProduct } = useContext(TechContext)

  return (
    <SafeAreaView style={styles.container}>

      <TopHeader typeTopHeader={false} text={product.name} icon={"shopping-cart"} screen='Bag' />

      <View style={[styles.item, { height: "50%", width: "90%", backgroundColor: "transparent", top: 20 }]}>
        <View style={[styles.containerImage, { bottom: 0, height: 345, }]}>
          <Image source={{ uri: product.thumbnail }} style={styles.image} />
        </View>
      </View>
      <View style={{ width: "100%", display: "flex", alignItems: "flex-start", justifyContent: "center", padding: 20, gap: 5 }}>
        <Text style={styles.text}>{product.official_store_name}</Text>
        <Text style={[styles.text, { fontSize: 25 }]}>{product.title}</Text>
        <Text style={[styles.text, { fontSize: 28, fontWeight: 'bold', color: "#009898", }]}>R$ {product.price}</Text>
      </View>
      <View style={{ width: "100%", display: "flex", flexDirection: "row", padding: 10, justifyContent: "space-between", top: 35 }}>
        <Button onPress={() => {
          addProduct(product)
          
          navigation.navigate("Bag")
        }} width={"48%"} text={'Comprar'} colorText={'white'} size={30} />
        <Button onPress={() => {
          addProduct(product)
          Alert.alert("Produto adicionado no carrinho!",)
        }} width={"48%"} text={'Adicionar ao carrnho'} colorText={'white'} size={30} />
      </View>


    </SafeAreaView>
  )
}

export default ProductDetails