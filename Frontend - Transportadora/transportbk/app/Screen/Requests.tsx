import { View, Text, TouchableOpacity } from "react-native";
import styles from "../css/global";
import Card from "../Components/Card";
import StatusBarC from "../Components/StatusBar";
import ContainerInfo from "../Components/ContainerInfo";


export default function Requests() {
    return (
        <>
        <StatusBarC/>
            <View style={styles.container}>
                <ContainerInfo text={"Pedidos"} icon={"box"}/>
                <View style={{ width: "100%", display: "flex", alignItems: "center", height: "70%" }}>

                <View style={styles.cards}>
                    <TouchableOpacity onPress={console.log("aaaaaa")}>
                        <Card nome={"MARIA ANTONIA DE APARECISA DSE"}/>
                    </TouchableOpacity>
                </View>
                </View>

            </View>
        </>
    )
}