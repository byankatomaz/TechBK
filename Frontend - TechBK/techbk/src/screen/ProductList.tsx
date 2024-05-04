import React, { useContext, useEffect, useState } from "react";
import { Image, SafeAreaView, Text, TouchableOpacity, View } from "react-native";
import { FlatList, ScrollView } from "react-native";
import styles from "../css/global";
import Product from "../interfaces/Product";
import TopHeader from "../components/TopHeader/TopHeader";
import { ProductService } from "../services/ProductService";
import { TechContext } from "../context/TechBkContext";
import { ActivityIndicator } from "react-native";


export default function ProductList({ navigation }: any) {
  const [products, setProducts] = useState<Product[]>([]);
  const { filter } = useContext(TechContext)


  useEffect(() => {

    const response = ProductService.getProducts(filter).then(function (response) {
      const data = response.map((each: any) => {
        return each
      })
      setProducts(data)
    })


  }, [filter])

  const Item = ({ title, official_store_name, thumbnail, price }: Product) => (
    <View style={styles.item}>
      <View style={[styles.containerImage, { bottom: 0, height: 150, width: 150 }]}>
        <Image source={{ uri: thumbnail }} style={styles.image} />
      </View>

      <View style={{ padding: 10, width: "98%", height: '43%', display: "flex", alignItems: "center", justifyContent: 'center' }}>
        <Text style={[styles.text, { fontSize: 10 }]}>{official_store_name}</Text>
        <Text style={[styles.text, { fontSize: 18 }]}>{title}</Text>
      </View>

      <View style={{ width: '100%', height: '8%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Text style={[styles.text, { fontSize: 18, fontWeight: 'bold', color: "#009898" }]}>R$ {price}</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>

      <TopHeader typeTopHeader={true} icon={"search"} />

      <View
        style={{
          width: "100%",
          height: "80%",
          marginTop: 90,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",

        }}
      >

        <SafeAreaView>
          {products.length == 0 && <ActivityIndicator hidesWhenStopped={true} />}
          <FlatList
            data={products}
            horizontal={false}
            numColumns={2}
            renderItem={({ item }) => (

              <TouchableOpacity style={{ margin: 6.5 }} onPress={() => {
                const product: Product = {
                  title: item.title,
                  price: item.price,
                  amount: 1,
                  thumbnail: item.thumbnail,
                  official_store_name: item.official_store_name
                }

                navigation.navigate("ProductDetails", {
                  product: product
                })
              }
              }>
                <Item title={item.title} price={item.price} thumbnail={item.thumbnail} official_store_name={item.official_store_name} />
              </TouchableOpacity>
            )}
            keyExtractor={(item) => item.id}
          />

        </SafeAreaView>

      </View>

    </View>

  );
}
