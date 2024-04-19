import { View, Text, Image } from 'react-native'
import React, { useContext } from 'react'
import styles from '../css/global'
import Product from '../interfaces/Product';
import TopHeader from '../components/TopHeader/TopHeader';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { Feather } from "@expo/vector-icons";
import Button from '../components/Button/Button';
import { TechContext } from '../context/TechBkContext';


function ProductDetails({ navigation, route }: any) {
  const { product }: Product = route.params;
  const { changeVisible } = useContext(TechContext)

  return (
    <View style={styles.container}>
     
      <TopHeader typeTopHeader={false} text={product.name} icon={"shopping-cart"} />
      
      <View style={[styles.item, { height:"50%",width: "90%", backgroundColor: "transparent", top:20 }]}>
        <View style={[styles.containerImage, { bottom: 0, height: 345 }]}>
          <Image source={{ uri: product.thumbnail }} style={styles.image} />
        </View>
      </View>
      <View style={{ width: "100%", display: "flex", alignItems: "flex-start", justifyContent:"center", padding: 20, gap:5 }}>
        <Text style={styles.text}>{product.official_store_name}</Text>
        <Text style={[styles.text, { fontSize: 35 }]}>{product.title}</Text>
        <Text style={[styles.text, { fontSize: 28, fontWeight: 'bold', color: "#009898",}]}>R$ {product.price}</Text>
      </View>
      <View style={{ width: "100%", display: "flex", flexDirection: "row", padding: 10, justifyContent: "space-between",top:15 }}>
        <Button onPress={() => navigation.navigate("Bag", { productBag: product })} width={"48%"} text={'Comprar'} colorText={'white'} size={30}  />
        <Button onPress={() => navigation.navigate("Bag", { productBag: product })} width={"48%"} text={'Adicionar ao carrnho'} colorText={'white'} size={30} />
      </View>


    </View>
  )
}

export default ProductDetails