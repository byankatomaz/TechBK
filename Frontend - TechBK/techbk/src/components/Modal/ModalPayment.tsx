
import { Modal, Text, View } from 'react-native'
import Product from '../../interfaces/Product'
import { useContext } from 'react'
import { TechContext } from '../../context/TechBkContext'
import Button from '../Button/Button'
import stylesGlobal from '../../css/global'
import { styles } from './styles'


export default function ModalPayment() {
    const {changeVisiblePayment, bag, visiblePay} = useContext(TechContext)
    let total = 0;
    if(bag){
        bag.forEach(element =>{
            total = total+=(element.price*element.amount);
           
        })
       
    }
    
  return (
    <Modal transparent={true} animationType="slide" visible={visiblePay} >
            <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
                <Text style={stylesGlobal.text}>Deseja confirmar a compra?</Text>
                <Button text='Sim' colorText='white'  top={50} width='50%' onPress={()=>changeVisiblePayment(false)}/>
                
            </View>
           

            </View>
        </Modal>
  )
}
