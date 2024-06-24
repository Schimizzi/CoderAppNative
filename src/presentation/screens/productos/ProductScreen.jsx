import { useRoute } from '@react-navigation/native';
import { FlatList, Text, View, Image } from 'react-native';
import React, { useEffect } from 'react';
import GlobalStyles from '../../styles/GlobalStyles';
import Counter from '../../../features/counter/Counter';
import DrawerBar from '../../components/shared/DrawerBar';
import { useDispatch, useSelector } from 'react-redux';
import { productName } from '../../../features/counter/CounterSlice';

const ProductScreen = () => {
  const route = useRoute();
  const dispatch = useDispatch()
  const { label: producto } = route.params;
  
  if (!producto) {
    console.error('Producto no encontrado en params');
    return null; 
  }
  useEffect(() => {
    dispatch(productName(producto.title))
  }, [dispatch, producto.title])

  console.log(producto.title)
  const productoTiTle = useSelector((state) => state.product.productName)
  console.log('para Redux, el nombre del producto en Product: ' + productoTiTle);

  const RenderProducts = ({ item }) => (
    <View style={GlobalStyles.renderProducts}>
      <Text style={GlobalStyles.buttonText}>{item.brand}</Text>
      <Text style={GlobalStyles.buttonTextBold}>{item.title}</Text>
      <Text style={GlobalStyles.buttonText}>{item.description}</Text>
      <Text style={GlobalStyles.buttonTextBold}>${item.price}000</Text>

      <FlatList
        data={producto.images}
        renderItem={({ item }) => (
          <Image
            source={{ uri: item }}
            style={{ width: 300, height: 350 }}
            resizeMode="contain"
          />
        )}
        keyExtractor={(imageUri, index) => index.toString()}
      />
    </View>
  );

  return (
    <View style={GlobalStyles.container}>
      <DrawerBar />
      <View style={{ flex: 8 }}>
        <FlatList
          data={[producto]}
          renderItem={RenderProducts}
          keyExtractor={item => item.id.toString()}
        />
      </View>
      <View style={{ flex: 2 }}>
        <Counter producto = {producto}/>
      </View>
    </View>
  );
};

export default ProductScreen;
