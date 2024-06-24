import { useNavigation, useRoute } from '@react-navigation/native'
import { FlatList, Text, View, Image } from 'react-native'
import React, { useEffect } from 'react'
import ProductosJSON from '../../data/products.json'
import PrimaryButton from '../../components/shared/PrimaryButton'
import GlobalStyles from '../../styles/GlobalStyles'
import DrawerBar from '../../components/shared/DrawerBar'
import { useDispatch, useSelector } from 'react-redux'
import { categoryName } from '../../../features/counter/CounterSlice'

const ProductsScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  
  const route = useRoute();
  const { label: itemCategories } = route.params;
  
  const productosFiltrados = ProductosJSON.filter(producto => producto.category === itemCategories);
  
  useEffect(() => {
    dispatch(categoryName(itemCategories))
  }, [itemCategories, dispatch])
  
  const categoryTitle = useSelector((state) => state.category.categoryName)
  console.log('para Redux, Category en Products: ' + categoryTitle)
  
  const RenderProducts = ({ item }) => (
    <View style={GlobalStyles.renderProducts}>
      <Text style={GlobalStyles.buttonTextBold}>{item.title}</Text>
      <Text style={GlobalStyles.buttonText}>${item.price}000</Text>
      <Image
        source={{ uri: item.thumbnail }}
        style={{ width: 200, height: 300 }}
        resizeMode="contain"
      />
      <PrimaryButton
        onPress={() => navigation.navigate('Product', { label: item })}
        label='Detalles'
      />
    </View>
  );

  return (
    <View style={GlobalStyles.container}>
      <DrawerBar />
      <FlatList
        data={productosFiltrados}
        renderItem={RenderProducts}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  );
};

export default ProductsScreen
