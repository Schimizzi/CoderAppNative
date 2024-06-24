import { View, Text } from 'react-native'
import React from 'react'
import GlobalStyles from '../../styles/GlobalStyles'
import DrawerBar from '../../components/shared/DrawerBar'
import { useSelector } from 'react-redux'


const CartScreen = () => {

  const count = useSelector((state) => state.counter.value)

  return (
    <View style={GlobalStyles.container} >
      <DrawerBar />
      <Text>carrito con {count} productos</Text>
    </View>
  )
}

export default CartScreen