import React, { useState } from "react"
import { Image, Text, TouchableOpacity, View } from "react-native"
import styles from "./styles"
import Product from "../../interfaces/Product"
import stylesGlobal from "../../css/global"

export default function CardBag({ name, image, price }: Product) {
    const [quantity, setQuantity] = useState<number>(1);
    const [total, setTotal] = useState<number>(price);
    
    return (

        <View style={[styles.CardBag]}>
            <View style={[stylesGlobal.containerImage, { height: "100%", width: 100, bottom: 0 }]}>
                <Image style={stylesGlobal.image} source={image} />
            </View>
            <View style={{height:"100%",  width:"100%"}}>
                <Text style={stylesGlobal.text}>{name}</Text>
                <View style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", width: 85, borderRadius: 6, padding: 4, backgroundColor: "gray",marginTop:30 }}>
                    <TouchableOpacity onPress={() => {setQuantity(quantity <= 1 ? quantity : (quantity - 1))
                      setTotal((quantity-1)<=1?quantity*parseFloat(price):(quantity-1)*parseFloat(price))
                    }}>
                        <Text style={stylesGlobal.text}>--</Text>
                    </TouchableOpacity>
                    <Text style={stylesGlobal.text}>{quantity}</Text>
                    <TouchableOpacity onPress={() =>{ 
                        setQuantity(quantity + 1)
                        setTotal((quantity+1)*parseFloat(price))
                        }}>
                        
                        <Text style={stylesGlobal.text}>+</Text>
                    </TouchableOpacity>
                </View>
                <View style={{width:"60%", alignItems:"flex-end", bottom:35}}><Text style={[stylesGlobal.text, {color:"#009898"}]}>R$ {total}</Text></View>
            </View>



        </View>

    )
}