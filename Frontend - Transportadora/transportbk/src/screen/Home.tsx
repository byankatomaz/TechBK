import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { Feather } from "@expo/vector-icons";
import styles from "../css/global";
import ContainerInfo from "../components/ContainerInfo";

export default function Home({ navigation }: any) {
  type DataType = {
    id: string;
    title: string;
    screen: string;
    icon: any;
  }[];

  const DATA: DataType = [
    {
      id: '1',
      title: "Pedidos",
      screen: "Requests",
      icon: "box",
    },
    {
      id: '2',
      title: "Entregas feitas",
      icon: "check-square",
      screen: "DeliveryDone",
    },
  ];

  type ItemProps = { title: string; icon: any };

  const Item = ({ title, icon }: ItemProps) => (
    <View style={styles.item}>
      <Feather name={icon} color={"white"} size={40} />
      <View style={{ paddingTop: 5 }}>
        <Text style={styles.text}>{title}</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <ContainerInfo text={"Olá Keven!"} icon={"user"} />
      <View
        style={{
          width: "60%",
          position: "absolute",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <FlatList
          data={DATA}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => navigation.navigate(item.screen)}>
              <Item title={item.title} icon={item.icon} />
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item.id}
        />
      </View>
    </View>
  );
}
