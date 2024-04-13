import { Feather } from "@expo/vector-icons";
import React, { useContext, useState } from "react";
import { Image,  Text, TouchableOpacity, View } from "react-native";
import { FlatList, ScrollView } from "react-native-gesture-handler";
import styles from "../css/global";
import cell from '../../assets/cell.png';
import Product from "../interfaces/Product";
import TopHeader from "../components/TopHeader/TopHeader";

export default function ProductList({ navigation }: any) {
  
  
  type DataType = {
    id: string;
    name: string;
    price: string;
    brand: string

  }[];

  const DATA: DataType = [
    {
      id: '1',
      name: "Galaxy A54",
      price: "700",
      brand:"Samsung"

    },
    {
      id: '2',
      name: "Galaxy A55",
      price: "600",
      brand:"Samsung"
    },
    {
      id: '3',
      name: "Galaxy A56",
      price: "500",
      brand:"Samsung"
    },
    {
      id: '4',
      name: "Gakaxy S23 FE",
      price: "400",
      brand:"Samsung"
    },
    {
      id: '5',
      name: "Iphone 13",
      price: "300",
      brand:"Samsung"
    },
    {
      id: '6',
      name: "Galaxy Z Fold5",
      price: "200",
      brand:"Samsung"
    },
  ];

  type ItemProps = { name: string; productType: string,price:string};

  const Item = ({ name, productType, price }: ItemProps) => (
    <View style={styles.item}>
      <View style={styles.itemIcon}>
        <TouchableOpacity>
          <Feather name={"bookmark"} color={"gray"} size={30} />
        </TouchableOpacity>
      </View>
      <View style={[styles.containerImage, { bottom: 0, height: 100 }]}>
        <Image source={cell} style={styles.image} />
      </View>

      <View style={{ paddingTop: 20, width:"100%", display:"flex", alignItems:"center" }}>
        <Text style={[styles.text, {fontSize:10}]}>{productType}</Text>
        <Text style={[styles.text, {fontSize:20}]}>{name}</Text>
        <Text style={[styles.text, {fontSize:15, color:"#009898"}]}>R$ {price}</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <TopHeader typeTopHeader={true}  icon={"search"} />
      <View
        style={{
          width: "100%",
          height: "60%",
          marginTop:100,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        
        }}
      >
        <ScrollView>
          <FlatList
            data={DATA}
            horizontal={false}
            numColumns={2}
            renderItem={({ item }) => (

              <TouchableOpacity style={{ margin: 6.5 }} onPress={() => {
                const product:Product = {
                  name:item.name,
                  price: item.price,
                  quantity:2,
                  image:cell,
                  brand:item.brand
                }
               navigation.navigate("ProductDetails", {
                  product:product
                })}
              }>
                <Item name={item.name} price={item.price} productType={"cellphone"} />
              </TouchableOpacity>




            )}
            keyExtractor={(item) => item.id}
          />
        
        </ScrollView>
      
      </View>
    </View>
  );
}
