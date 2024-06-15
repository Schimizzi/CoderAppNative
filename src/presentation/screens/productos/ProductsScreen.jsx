import { FlatList, StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import ProductosJSON from '../../data/products.json'
import { useRoute } from '@react-navigation/native'



const ProductsScreen = () => {

  const route = useRoute()
  const { label : itemCategories } = route.params
  
  const productosFiltrados = ProductosJSON.filter(producto => producto.category === itemCategories);
  console.log(productosFiltrados)

  const RenderProduct = ({ item }) => (
    <View style={styles.itemContainer}>
        <Image source={{ uri: item.thumbnail }} style={styles.thumbnail} />
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.description}>{item.description}</Text>
        <Text style={styles.price}>${item.price}</Text>
    </View>
);

  return (
    <View>
      <FlatList
        data={productosFiltrados}
        renderItem={RenderProduct}
        keyExtractor={item => item.id.toString()}
        />
        
    </View>
  )
}

export default ProductsScreen

const styles = StyleSheet.create({})