import React, { useContext, useEffect, useState } from "react"
import { Image, Text, TouchableOpacity, View } from "react-native"
import styles from "./styles"
import Product from "../../interfaces/Product"
import stylesGlobal from "../../css/global"
import { TechContext } from "../../context/TechBkContext"
import { Feather } from "@expo/vector-icons";
import ModalInfo from "../Modal/Modal"

interface CardProps{
    product:Product
}

export default function CardBag({ product }: CardProps) {
    const [amount, setAmount] = useState<number>(1);
    const [totalV, setTotal] = useState<number>(product.price);
    const { changeVisible, total, changeTotal, amountProduct } = useContext(TechContext)
    changeTotal(totalV)
    return (

        <View style={styles.CardBag}>
            <View style={[stylesGlobal.containerImage, { height: 100, width: 100, bottom: 0 }]}>
                <Image style={stylesGlobal.image} source={{ uri: product.thumbnail }} />
            </View>
            <View style={{ height: 100, width: 280, display: "flex", flexDirection: 'column', gap: 6 }}>
                <Text style={[stylesGlobal.text, {fontSize:16, width:"95%"}]}>{product.title}</Text>
                <View style={{height:"100%", width:"100%", display:"flex", flexDirection:"row"}}>
            
                <View style={styles.moreOrLess}>
                    <TouchableOpacity onPress={() => {
                        let amountIn:number = amount == 1 ? amount : (amount - 1)
                        setAmount(amount == 1 ? amount : (amount - 1))
                        amount == 1 ? changeVisible(true) : changeVisible(false)
                        console.log("aaaaaaaaaaa", total)
                        amountProduct(product, amountIn)
                        setTotal( amountIn * parseFloat(product.price))
                    }}>

                        <Feather name="minus" size={17} color={"white"} />

                    </TouchableOpacity>
                    <Text style={styles.textAmount}>{amount}</Text>
                    <TouchableOpacity onPress={() => {
                       
                        console.log(product.amount)
                        setAmount(amount + 1)
                        setTotal((amount + 1) * parseFloat(product.price))
                        amountProduct(product, amount+1)
                    }}>

                        <Feather name="plus" color={"white"} size={17} />
                    </TouchableOpacity>
                </View>
                <View style={{ width: "60%", alignItems: "flex-end",  }}><Text style={[stylesGlobal.text, { color: "#009898" }]}>R$ {(product.amount*product.price).toFixed(2)}</Text></View>
            </View>
            <ModalInfo name={product.title}/>
            </View>


        </View>

    )
}