import { View, Text } from 'react-native'
import React from 'react'
import GlobalStyles from '../../styles/GlobalStyles'
import DrawerBar from '../../components/shared/DrawerBar'
import { useSelector } from 'react-redux'


const CartScreen = () => {

  const count = useSelector((state) => state.counter.value)
  const category = useSelector((state) => state.category.categoryName)
  const product = useSelector((state) => state.product.productName)
  return (
    <View style={GlobalStyles.container} >
      <DrawerBar />
      <Text>categoria del producto: {category}</Text>
      <Text>nombre del producto: {product}</Text>
      <Text>carrito con {count} productos</Text>
    </View>
  )
}

export default CartScreen