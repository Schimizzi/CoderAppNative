import { useNavigation, useRoute } from '@react-navigation/native'
import { FlatList, StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import ProductosJSON from '../../data/products.json'
import PrimaryButton from '../../components/shared/PrimaryButton'
import GlobalStyles from '../../styles/GlobalStyles'



const ProductsScreen = () => {

  const navigation = useNavigation()


  const route = useRoute()
  const { label: itemCategories } = route.params

  const productosFiltrados = ProductosJSON.filter(producto => producto.category === itemCategories);
  console.log(productosFiltrados)

  const RenderProducts = ({ item }) => (
    <View style={GlobalStyles.renderProducts} >
      {/* <Image source={{ uri: item.thumbnail }} /> */}
      <Text style={GlobalStyles.buttonTextBold} >{item.title}</Text>
      <Text style={GlobalStyles.buttonText}>${item.price}000</Text>
      <PrimaryButton
        onPress={() => navigation.navigate('Product', { label: item })}
        label='Detalles'
      />
    </View>
  );

  
  return (
    <View style={GlobalStyles.container} >
      <FlatList
        data={productosFiltrados}
        renderItem={RenderProducts}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  )
}

export default ProductsScreen

const styles = StyleSheet.create({})