import { Text, View } from 'react-native'
import CardBag from '../components/Card/CardBag'
import stylesComponent from '../components/TopHeader/styles'
import styles from '../css/global'
import Product from '../interfaces/Product';

export default function Bag({navigation, route}:any) {
    const {productBag}:Product = route.params;
    return (
        <View style={styles.container}>
            <View style={[stylesComponent.topheader, { justifyContent: "flex-start" }]}>
                <Text style={styles.text}>Carrinho</Text>
            </View>

            <CardBag name={productBag.name} price={productBag.price} image={productBag.image}/>
        </View>
    )
}
