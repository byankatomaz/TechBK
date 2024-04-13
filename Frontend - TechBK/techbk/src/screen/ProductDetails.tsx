import { View, Text, Image } from 'react-native'
import React, { useContext } from 'react'
import styles from '../css/global'
import Product from '../interfaces/Product';
import TopHeader from '../components/TopHeader/TopHeader';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Feather } from "@expo/vector-icons";
import stylesComponent from '../components/Button/styles';
import Button from '../components/Button/Button';
import { TechContext } from '../context/TechBkContext';
function ProductDetails({ navigation, route }: any) {
  const { product }: Product = route.params;
  const {changeVisible} = useContext(TechContext)

  return (
    <View style={styles.container}>
      <TopHeader typeTopHeader={false} text={product.name} icon={"shopping-cart"} />
      <View style={[styles.item, { height: "45%", width: "90%", backgroundColor: "transparent" }]}>
        <View style={styles.itemIcon}>
          <TouchableOpacity>
            <Feather name={"bookmark"} color={"gray"} size={30} />
          </TouchableOpacity>
        </View>
        <View style={[styles.containerImage, { bottom: 0, height: "80%" }]}>
          <Image source={product.image} style={styles.image} />
        </View>
      </View>
      <View style={{width:"100%", display:"flex", alignItems:"flex-start", padding:25}}>
        <Text style={styles.text}>{product.brand}</Text>
        <Text style={[styles.text, {fontSize:35}]}>{product.name}</Text>
        <Text style={[styles.text, {color:"#009898"}]}>R$ {product.price}</Text>
      </View>
      <Button onPress={()=>navigation.navigate("Bag", {productBag:product})} width={"85%"} text={'Comprar'} colorText={'white'} size={30} top={80}>

      </Button>
    </View>
  )
}

export default ProductDetails