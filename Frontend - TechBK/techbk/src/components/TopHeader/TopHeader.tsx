import { Feather } from '@expo/vector-icons'
import React, { useContext } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import styles from './styles'
import Input from '../Inputs/Inputs'
import ModalInfo from '../Modal/Modal'
import { TechContext } from '../../context/TechBkContext'

interface TopHeaderProps {
  text?: string,
  icon: any,
  typeTopHeader?: boolean,
  screen?: any ,
}

const TopHeader: React.FC<TopHeaderProps> = ({ text, icon, typeTopHeader, screen }) => {
  const { visible, findProducts, filter, bag } = useContext(TechContext)
  const navigation = useNavigation()

  const handleNavigate = () => {
    if (screen) {
      navigation.navigate(screen)
    }
  }

  return (
    <View style={styles.topheader}>
      {typeTopHeader ? (
        <View style={[styles.headers, {top:10}]}>
          <Input
            bgColor="#252525"
            textColor="white"
            placeholder="Search products:"
            onChangeText={text => findProducts(text)}
          />
        </View>
      ) : (
        <View style={[styles.headers, { justifyContent: 'flex-end' }]}>
          <Text style={styles.text}>{text}</Text>
          <TouchableOpacity onPress={handleNavigate}>
            <View style={{ width: 65, height: 68, borderRadius: 30, display: "flex", alignItems: "center", justifyContent: "center" }}>
              <Feather name={icon} size={30} color="white" />
            </View>
          </TouchableOpacity>
        </View>
      )}

    </View>
  )
}

export default TopHeader
