
import { Modal, Text, View } from 'react-native'
import Product from '../../interfaces/Product'
import { useContext } from 'react'
import { TechContext } from '../../context/TechBkContext'
import Button from '../Button/Button'
import stylesGlobal from '../../css/global'


export default function ModalPayment() {
    const {changeVisiblePayment, bag, visiblePay} = useContext(TechContext)
    let total = 0;
    if(bag){
        bag.forEach(element =>{
            total = total+=element.price;
        })
    }
  return (
    <Modal transparent={true} animationType="slide" visible={visiblePay} >
            <View style={{ display: "flex", backgroundColor: "rgba(0, 0, 0,0.95)", height: "50%", width: "100%", alignItems: "center", justifyContent: "center", borderRadius: 7, flex: 1 }}>
            <View style={{height:"50%"}}>
                <Text style={stylesGlobal.text}>Valor total da compra: {total}</Text>
            </View>
            <Button text='Realizar a compra' colorText='white' width='50%' onPress={()=>changeVisiblePayment(false)}/>

            </View>
        </Modal>
  )
}
