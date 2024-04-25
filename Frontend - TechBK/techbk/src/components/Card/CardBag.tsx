import React, { useContext, useState } from "react"
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
    const { changeVisible, amountProduct, total } = useContext(TechContext)
    
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
                        amount == 1 ? changeVisible(true) : changeVisible(false)
                       
                        setAmount(amount <= 1 ? amount : (amount - 1))
                        console.log("aaaaaaaaaaa", total)
                        amountProduct(product, amount <= 1 ? amount : (amount - 1))
                        setTotal((amount - 1) <= 1 ? amount * parseFloat(product.price) : (amount - 1) * parseFloat(product.price))
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
                <View style={{ width: "60%", alignItems: "flex-end",  }}><Text style={[stylesGlobal.text, { color: "#009898" }]}>R$ {totalV.toFixed(2) === total.toFixed(2)?total:totalV}</Text></View>
            </View>
            <ModalInfo name={product.title}/>
            </View>


        </View>

    )
}