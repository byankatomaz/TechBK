import { Feather } from "@expo/vector-icons";
import React, { useContext } from "react";
import { Image,  Text, TouchableOpacity, View } from "react-native";
import { FlatList, ScrollView } from "react-native-gesture-handler";
import ContainerInfo from "../components/Containers/ContainerInfo";
import styles from "../css/global";
import cell from '../../assets/cell.png';
import { TechContext } from "../context/TechBkContext";
import ModalInfo from '../components/Modal/Modal';

export default function Home({ navigation }: any) {
  const {visible, changeVisible} = useContext(TechContext)
  type DataType = {
    id: string;
    title: string;
    price: string;

  }[];

  const DATA: DataType = [
    {
      id: '1',
      title: "Pedidos",
      price: "R$ 700,00",

    },
    {
      id: '2',
      title: "Entregas feitas",

      price: "R$ 600,00",
    },
    {
      id: '3',
      title: "Entregas feitas",
      price: "R$ 500,00",
    },
    {
      id: '4',
      title: "Entregas feitas",
      price: "R$ 400,00",
    },
    {
      id: '5',
      title: "Entregas feitas",
      price: "R$ 300,00",
    },
    {
      id: '6',
      title: "Entregas feitas",
      price: "R$ 200,00",
    },
  ];

  type ItemProps = { title: string; productType: string,price:string,};

  const Item = ({ title, productType, price }: ItemProps) => (
    <View style={styles.item}>
      <View style={{ width: "100%",padding:2, display: "flex", alignItems: "flex-end", justifyContent: "center" }}>
        <TouchableOpacity>
          <Feather name={"bookmark"} color={"gray"} size={30} />
        </TouchableOpacity>
      </View>
      <View style={[styles.containerImg, { bottom: 0, height: 100 }]}>
        <Image source={cell} style={styles.image} />
      </View>

      <View style={{ paddingTop: 20, width:"100%", display:"flex", alignItems:"center" }}>
        <Text style={[styles.text, {fontSize:10}]}>{productType}</Text>
        <Text style={[styles.text, {fontSize:20}]}>{title}</Text>
        <Text style={[styles.text, {fontSize:15, color:"#009898"}]}>{price}</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <ContainerInfo icon={"search"} />
      <View
        style={{
          width: "100%",
          height: "60%",
          marginTop:100,
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "center",
        }}
      >
        <ScrollView>
          <FlatList
            data={DATA}
            horizontal={false}
            numColumns={2}
            renderItem={({ item }) => (

              <TouchableOpacity style={{ margin: 6.5 }} onPress={() => changeVisible(true)}>
                <Item title={item.title} price={item.price} productType={"cellphone"} />
              </TouchableOpacity>




            )}
            keyExtractor={(item) => item.id}
          />
        
        </ScrollView>

      </View>
    </View>
  );
}
