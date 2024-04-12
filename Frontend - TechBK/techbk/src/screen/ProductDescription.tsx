import { View, Text } from 'react-native'
import React from 'react'
import styles from '../css/global'
import Product from '../interfaces/Product';

const ProductDescription = ({navigation, route}:any) => {
    const {product}:Product = route.params;
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{product.price}</Text>
    </View>
  )
}

export default ProductDescription