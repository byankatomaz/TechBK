import { View, Text, Image, ScrollView, SafeAreaView } from 'react-native'
import React from 'react'
import styles from '../css/global'
import stylesComponent from '../components/TopHeader/styles'
import stylesInput from '../components/Inputs/styles'
import { TouchableOpacity } from 'react-native'
import Input from '../components/Inputs/Inputs'
import { height } from './Login'

const User = () => {
    return (
        <View style={styles.container}>
            <View style={[stylesComponent.topheader, { justifyContent: "flex-start"}]}>
                <Text style={styles.text}>Usuário</Text>
            </View>

            <ScrollView style={{  width: "100%", height:"100%", marginTop: 90 }}>
            <SafeAreaView style={{ width: "100%", height: 650, display: "flex", justifyContent: "center", alignItems: "center",  }}>


                <TouchableOpacity style={{ width: "50%", height: "30%", borderRadius: 200, display: "flex", marginBottom:12 }}>
                    <View>
                        <Image style={{ width: "100%", height: "100%", borderRadius: 200 }} source={require("../../assets/cell.jpeg")} />
                    </View>
                </TouchableOpacity>
                <View style={[stylesInput.containerInput]}>
                    <Input bgColor='white' placeholder={"keven"}/>
                    <Input bgColor='white' placeholder={"keven"}/>
                    <Input bgColor='white' placeholder={"keven"}/>
                    <Input bgColor='white' placeholder={"keven"}/>
                    <Input bgColor='white' placeholder={"keven"}/>
                </View>
            </SafeAreaView>
    </ScrollView>
        </View>
    )
}

export default User