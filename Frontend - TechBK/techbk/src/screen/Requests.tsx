import { View, Text, SafeAreaView, FlatList } from 'react-native'
import React from 'react'
import styles from '../css/global'
import Product from '../interfaces/Product'
import CardBag from '../components/Card/CardBag'
import stylesComponent from '../components/TopHeader/styles'
const Requests = () => {
    const productList: Product[] = [
        {
            title: "Produto 1",
            price: 10.99,
            amount: 3,
            thumbnail: "imagem_produto_1.jpg",
            official_store_name: "Loja 1"
        },
        {
            title: "Produto 2",
            price: 25.50,
            amount: 5,
            thumbnail: "imagem_produto_2.jpg",
            official_store_name: "Loja 2"
        },
        {
            title: "Produto 3",
            price: 5.75,
            amount: 10,
            thumbnail: "imagem_produto_3.jpg",
            official_store_name: "Loja 3"
        }

    ];
    return (
        <View style={styles.container}>
            <View style={[stylesComponent.topheader, { justifyContent: "flex-start" }]}>
                <Text style={styles.text}>Pedidos feitos</Text>
            </View>
            <SafeAreaView style={{ height: "69%", width:"95%" }}>
                <FlatList
                    data={productList}
                    renderItem={({ item }) => (
                        <View style={{ height: 130 }}>
                            <CardBag product={item} />
                        </View>
                    )}
                    keyExtractor={(item) => item.id}
                />
            </SafeAreaView>

        </View>
    )
}

export default Requests