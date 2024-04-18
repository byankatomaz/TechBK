import React, { useContext, useState } from "react"
import { Image, Text, TouchableOpacity, View } from "react-native"
import styles from "./styles"
import Product from "../../interfaces/Product"
import stylesGlobal from "../../css/global"
import { TechContext } from "../../context/TechBkContext"
import { Feather } from "@expo/vector-icons";

export default function CardBag({ title, thumbnail, price }: Product) {
    const [amount, setAmount] = useState<number>(1);
    const [total, setTotal] = useState<number>(price);
    const { changeVisible } = useContext(TechContext)

    return (

        <View style={styles.CardBag}>
            <View style={[stylesGlobal.containerImage, { height: 100, width: 100, bottom: 0 }]}>
                <Image style={stylesGlobal.image} source={{ uri: thumbnail }} />
            </View>
            <View style={{ height: 100, width: 280, display: "flex", flexDirection: 'column', gap: 6 }}>
                <Text style={[stylesGlobal.text, {fontSize:16}]}>{title}</Text>
                <View style={{height:"100%", width:"100%", display:"flex", flexDirection:"row"}}>
            
                <View style={styles.moreOrLess}>
                    <TouchableOpacity onPress={() => {
                        amount == 1 ? changeVisible(true) : false
                        setAmount(amount <= 1 ? amount : (amount - 1))
                        setTotal((amount - 1) <= 1 ? amount * parseFloat(price) : (amount - 1) * parseFloat(price))
                    }}>

                        <Feather name="minus" size={17} color={"white"} />

                    </TouchableOpacity>
                    <Text style={styles.textAmount}>{amount}</Text>
                    <TouchableOpacity onPress={() => {
                        setAmount(amount + 1)
                        setTotal((amount + 1) * parseFloat(price))
                    }}>

                        <Feather name="plus" color={"white"} size={17} />
                    </TouchableOpacity>
                </View>
                <View style={{ width: "60%", alignItems: "flex-end",  }}><Text style={[stylesGlobal.text, { color: "#009898" }]}>R$ {total}</Text></View>
            </View>
        
            </View>


        </View>

    )
}