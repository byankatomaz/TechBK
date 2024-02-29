import { View, Text } from "react-native";
import styles from "../css/global";
import Card from "../Components/Card";
import StatusBarC from "../Components/StatusBar";


export default function Requests() {
    return (
        <>
        <StatusBarC/>
            <View style={styles.container}>
                <View style={styles.containerInfo}>
                    <Text style={styles.text}>Pedidos</Text>
                </View>
                <View style={{ width: "100%", display: "flex", alignItems: "center", height: "70%" }}>

                    <Card nome={"Relogio"} codigo={16161616161616} />
                    <Card nome={"Sapato"} codigo={16161616161616} />
                    <Card nome={"Tenis"} codigo={16161616161616} />
                    <Card nome={"Celular"} codigo={16161616161616} />
                    <Card nome={"Notebook"} codigo={16161616161616} />
                </View>


            </View>
        </>
    )
}