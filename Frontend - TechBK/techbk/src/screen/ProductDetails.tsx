import { View, Text, Image, Alert } from 'react-native';
import React, { useContext } from 'react';
import styles from '../css/global';
import TopHeader from '../components/TopHeader/TopHeader';
import Button from '../components/Button/Button';
import { TechContext } from '../context/TechBkContext';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ProductService } from '../services/ProductService';
import { api } from '../../api/ApiProducts';
import { useForm } from 'react-hook-form';

function ProductDetails({ navigation, route }:any) {
  const { product } = route.params;
  const { addProduct, changeTotal, token } = useContext(TechContext);

  const sendRequest = async () => {
    let produtoApi:any = {
      produto_nome: "product.title",
      produto_preco: "product.price",
      produto_desc: "product.official_store_name"
    };
    
 
    
    try {
      const response = await ProductService.addProducts(produtoApi);
      const { status, data } = response;
      
      console.log(status);
      if (status === 200 || status === 201) {
        changeTotal();
        // navigation.navigate("Bag");
      } else {
        console.error("Failed to add product:", data);
        Alert.alert("Error", "Failed to add product to the API.");
      }
    } catch (error) {
      console.error("API request error:", error);
      Alert.alert("Error", "An error occurred while sending the request.");
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <TopHeader typeTopHeader={false} text={product.name} icon={"shopping-cart"} screen='Bag' />

      <View style={[styles.item, { height: "50%", width: "90%", backgroundColor: "transparent", top: 20 }]}>
        <View style={[styles.containerImage, { bottom: 0, height: 445 }]}>
          <Image source={{ uri: product.thumbnail }} style={styles.image} />
        </View>
      </View>

      <View style={{ width: "100%", display: "flex", alignItems: "flex-start", justifyContent: "center", padding: 20, gap: 5 }}>
        <Text style={styles.text}>{product.official_store_name}</Text>
        <Text style={[styles.text, { fontSize: 25 }]}>{product.title}</Text>
        <Text style={[styles.text, { fontSize: 28, fontWeight: 'bold', color: "#009898" }]}>R$ {product.price}</Text>
      </View>

      <View style={{ width: "100%", display: "flex", flexDirection: "row", padding: 10, justifyContent: "space-between", top: 35 }}>
        <Button onPress={sendRequest} width={"48%"} text={'Comprar'} colorText={'white'} size={30} />
        <Button onPress={() => {
          addProduct(product);
          changeTotal();
          Alert.alert("Produto adicionado no carrinho!");
        }} width={"48%"} text={'Adicionar ao carrinho'} colorText={'white'} size={30} />
      </View>
    </SafeAreaView>
  );
}

export default ProductDetails;
