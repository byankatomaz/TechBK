import { View, Text, TouchableOpacity, Image } from "react-native";
import styles from "../css/global";
import ContainerInfo from "../Components/ContainerInfo";
import StatusBarC from "../Components/StatusBar";
import Card from "../Components/Card";

import Input from "../Components/Inputs";
import { Feather } from "@expo/vector-icons";
import { useContext, useState } from "react";
import Modal from "../Components/Modal";
import { TechContext } from "../context/TechBkContext";

export default function DeliveryDone() {
    const {visible, changeVisible}= useContext(TechContext)

    const toggleModal = () => {
        changeVisible(true);
    };
    return (
        <>
            <StatusBarC />
            <View style={[styles.container]}>
                <ContainerInfo text={"Entregas feitas"} icon={"check-square"} />
                <View style={{ display: "flex", justifyContent: "flex-start", width: "80%", paddingBottom: 12, flexDirection: "row", marginBottom: 10 }}>
                    <Input placeholder={"Filtro"} bgColor={"#252525"} textColor={"white"} />
                    <TouchableOpacity style={{ width: 70, backgroundColor: "#009898", height: 50, borderRadius: 7, top: 35, display: "flex", justifyContent: "center", alignItems: "center" }}>
                        <Feather size={35} name="search" />
                    </TouchableOpacity>
                </View>
                <View style={styles.cards}>
                    <TouchableOpacity onPress={toggleModal}>
                        <Card nome={"mARIA ANTONIA DE APARECISA DSE"}/>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={toggleModal}>
                        <Card nome={"mARIA ANTONIA DE APARECISA DSE"}/>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={toggleModal}>
                        <Card nome={"mARIA ANTONIA DE APARECISA DSE"}/>
                    </TouchableOpacity>
                </View>
            <Modal visible={visible}/>
            </View>

        </>
    )
}