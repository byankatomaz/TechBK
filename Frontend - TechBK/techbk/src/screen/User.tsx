import { View, Text, Image, ScrollView, SafeAreaView, Modal } from 'react-native'
import React, { useRef, useState } from 'react'
import styles from '../css/global'
import stylesComponent from '../components/TopHeader/styles'
import stylesInput from '../components/Inputs/styles'
import { TouchableOpacity } from 'react-native'
import Input from '../components/Inputs/Inputs'
import * as ImagePicker from 'expo-image-picker'
import { Modalize } from 'react-native-modalize'
import {MaterialIcons} from '@expo/vector-icons'
const User = () => {
    const [imageG, setImageG] = useState<string | undefined>()
    const [imageJ, setImageJ] = useState<string | undefined>()
    const [isGalleryOrCamera, setIsGaleryOrCamera] = useState<boolean>(false)
    const [visible, setVisible] = useState<boolean>(false)
        
    const modalizeRef = useRef(<Modalize />);
    const gallery = async () => {
        let result: any = ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        })

        console.log((await result).assets[0].uri)

        if (!(await result).canceled) {
            setImageG((await result).assets[0].uri)
        }

        setIsGaleryOrCamera(true)
    }

    const camera = async () => {
        let result: any = ImagePicker.launchCameraAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        })

        console.log((await result).assets[0].uri)

        if (!(await result).canceled) {
            setImageJ((await result).assets[0].uri)
        }

    }
    const openModal = () => {

        modalizeRef.current?.open();
    };
    return (
        <View style={styles.container}>
            <Modalize ref={modalizeRef} modalHeight={250} modalStyle={styles.modal} >
                <View style={styles.confirm}>
                    <Text style={{fontSize:20, left:10, color:"white"}}>Escolha a foto de usuário: </Text>
                    <View style={styles.cameraOuGalery}>
                        <TouchableOpacity  style={{left:-30, position:"relative"}} onPress={camera}>
                            <Text style={{fontSize:15, left:-2, color:"white"}}>Camera</Text>
                            <MaterialIcons
                                name='camera-alt'
                                size={50}
                                color={"white"}
                            ></MaterialIcons>
                        </TouchableOpacity>

                        <TouchableOpacity style={{left:30}} onPress={gallery}>
                        <Text  style={{fontSize:15, left:-1, color:"white"}}>Galeria</Text>
                            <MaterialIcons
                                name='image'
                                color={"white"}
                                size={50}
                            ></MaterialIcons>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modalize>
            <View style={[stylesComponent.topheader, { justifyContent: "flex-start" }]}>
                <Text style={styles.text}>Usuário</Text>
            </View>

            <ScrollView style={{ width: "100%", height: "100%", marginTop: 90 }}>
                <SafeAreaView style={{ width: "100%", height: 650, display: "flex", justifyContent: "center", alignItems: "center", }}>


                    <TouchableOpacity style={{ width: "50%", height: "30%", borderRadius: 200, display: "flex", marginBottom: 12 }} onPress={openModal}>
                        <View style={{backgroundColor:"#252525",borderRadius: 200}}>
                            <Image style={{ width: "100%", height: "100%", borderRadius: 200 }} source={{ uri: (isGalleryOrCamera == true ? imageG : imageJ) }} />
                        </View>
                    </TouchableOpacity>
                    <View style={[stylesInput.containerInput]}>
                        <Input bgColor='white' placeholder={"keven"} />
                        <Input bgColor='white' placeholder={"keven"} />
                        <Input bgColor='white' placeholder={"keven"} />
                        <Input bgColor='white' placeholder={"keven"} />
                        <Input bgColor='white' placeholder={"keven"} />
                    </View>
                </SafeAreaView>
            </ScrollView>
        </View>
    )
}

export default User