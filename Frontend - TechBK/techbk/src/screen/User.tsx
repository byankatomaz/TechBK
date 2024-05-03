import { View, Text, Image, ScrollView, SafeAreaView } from 'react-native'
import React from 'react'
import styles from '../css/global'
import stylesComponent from '../components/TopHeader/styles'

import { TouchableOpacity } from 'react-native'

const User = () => {
    return (
        <View style={styles.container}>
            <View style={[stylesComponent.topheader, { justifyContent: "flex-start" }]}>
                <Text style={styles.text}>Usuário</Text>
            </View>


            <View style={{ width: "100%", height: "60%", display: "flex", justifyContent: "flex-start", alignItems: "center" }}>


                <TouchableOpacity style={{ width: "50%", height: "45%", borderRadius: 200, display: "flex" }}>
                    <View>
                        <Image style={{ width: "100%", height: "100%", borderRadius: 200 }} source={require("../../assets/cell.jpeg")} />
                    </View>
                </TouchableOpacity>
                <View>
                    <Text style={styles.text}>
                        KEVEN
                    </Text>
                    <Text style={styles.text}>
                        KEVEN
                    </Text>
                    <Text style={styles.text}>
                        KEVEN
                    </Text>
                    <Text style={styles.text}>
                        KEVEN
                    </Text>
                    <Text style={styles.text}>
                        KEVEN
                    </Text>
                
                </View>
            </View>

        </View>
    )
}

export default User