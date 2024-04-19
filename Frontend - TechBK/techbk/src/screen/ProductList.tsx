import { Feather } from "@expo/vector-icons";
import React, { useContext, useEffect, useState } from "react";
import { Image,  Text, TouchableOpacity, View } from "react-native";
import { FlatList, ScrollView } from "react-native-gesture-handler";
import styles from "../css/global";
import cell from '../../assets/cell.png';
import Product from "../interfaces/Product";
import TopHeader from "../components/TopHeader/TopHeader";
import { apiProducts } from "../../api/ApiProducts";
import { ProductService } from "../services/ProductService";
import { TechContext } from "../context/TechBkContext";
import { ActivityIndicator } from "react-native";

export default function ProductList({ navigation }: any) {
  const [products, setProducts] = useState<Product[]>([]);
  const {filter} = useContext(TechContext)
  
  // type Product = {
  //   id: string;
  //   title: string;
  //   price: number;
  //   brand: string

  // }[];

  // const DATA: DataType = [
  //   {
  //     id: '1',
  //     name: "Galaxy A54",
  //     price: "700",
  //     brand:"Samsung"

  //   },
  //   {
  //     id: '2',
  //     name: "Galaxy A55",
  //     price: "600",
  //     brand:"Samsung"
  //   },
  //   {
  //     id: '3',
  //     name: "Galaxy A56",
  //     price: "500",
  //     brand:"Samsung"
  //   },
  //   {
  //     id: '4',
  //     name: "Gakaxy S23 FE",
  //     price: "400",
  //     brand:"Samsung"
  //   },
  //   {
  //     id: '5',
  //     name: "Iphone 13",
  //     price: "300",
  //     brand:"Samsung"
  //   },
  //   {
  //     id: '6',
  //     name: "Galaxy Z Fold5",
  //     price: "200",
  //     brand:"Samsung"
  //   },
  // ];
  useEffect(()=>{

    const response = ProductService.getProducts(filter).then(function(response){
      const data = response.map(each=>{
        return each
      })
      setProducts(data)
    })
    
    
  },[filter])
  
  console.log(products)
  const Item = ({ title, official_store_name, thumbnail, price }: Product) => (
    <View style={styles.item}>
      {/* <View style={styles.itemIcon}>
        <TouchableOpacity>
          <Feather name={"bookmark"} color={"gray"} size={30} />
        </TouchableOpacity>
      </View> */}
      <View style={[styles.containerImage, { bottom: 0, height: 150, width:150 }]}>
        <Image source={{uri: thumbnail}} style={styles.image} />
      </View>

      <View style={{padding: 10, width:"98%", height: '43%', display:"flex", alignItems:"center", justifyContent: 'center' }}>
        <Text style={[styles.text, {fontSize:10}]}>{official_store_name}</Text>
        <Text style={[styles.text, {fontSize:18}]}>{title}</Text>
      </View>

      <View style={{width: '100%', height: '8%', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
        <Text style={[styles.text, {fontSize:18, fontWeight: 'bold', color:"#009898"}]}>R$ {price}</Text>
      </View>
    </View>
  );
  
  return (
    <View style={styles.container}>
      <TopHeader typeTopHeader={true}  icon={"search"} />
     
      <View
        style={{
          width: "100%",
          height: "80%",
          marginTop:90,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        
        }}
      >
        <ScrollView>
          <FlatList
            data={products}
            horizontal={false}
            numColumns={2}
            renderItem={({ item }) => (
              
              <TouchableOpacity style={{ margin: 6.5 }} onPress={() => {
                const product:Product = {
                  title:item.title,
                  price: item.price,
                  thumbnail:item.thumbnail,
                  official_store_name:item.official_store_name
                }
              
               navigation.navigate("ProductDetails", {
                  product:product
                })}
              }>
                <Item title={item.title} price={item.price} thumbnail={item.thumbnail} official_store_name={item.official_store_name} />
              </TouchableOpacity>




            )}
            keyExtractor={(item) => item.id}
          />
           {<ActivityIndicator hidesWhenStopped={products != null?true:false}/>}
        
        </ScrollView>
     
      </View>
    </View>
  );
}
