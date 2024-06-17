import { useNavigation, useRoute } from '@react-navigation/native'
import { FlatList, Text, View, Image } from 'react-native'
import React from 'react'
import PrimaryButton from '../../components/shared/PrimaryButton'
import GlobalStyles from '../../styles/GlobalStyles'

const ProductScreen = () => {

  const { label: producto, descuento } = useRoute().params
  console.log(producto.brand)

  const RenderProducts = ({ item }) => (
    <View style={GlobalStyles.renderProducts} >
      {/* <Image source={{ uri: item.thumbnail }} /> */}
      <Text style={GlobalStyles.buttonText}>{item.brand}</Text>
      <Text style={GlobalStyles.buttonTextBold}>{item.title}</Text>
      <Text style={GlobalStyles.buttonText}>{item.description}</Text>
      <Text style={GlobalStyles.buttonTextBold}>${item.price}000</Text>
    </View>
  );

  return (
    <View style={GlobalStyles.container} >
      <FlatList
        data={[producto]}
        renderItem={RenderProducts}
        keyExtractor={item => item.id.toString()}
      />
      <PrimaryButton
        onPress={() => console.log('ir al carrito')}
        label='Carrito'
      />

    </View>
  )
}

export default ProductScreen

