import { useRoute } from '@react-navigation/native';
import { FlatList, Text, View, Image } from 'react-native';
import React, { useEffect } from 'react';
import GlobalStyles from '../../styles/GlobalStyles';
import Counter from '../../../features/counter/Counter';
import DrawerBar from '../../components/shared/DrawerBar';
import { useDispatch, useSelector } from 'react-redux';
import { productName } from '../../../features/counter/CounterSlice';
import { useGetProductQuery } from '../../services/shopServices';

const ProductScreen = () => {
  const route = useRoute();
  const dispatch = useDispatch();
  const { label: producto } = route.params;

  useEffect(() => { //a revisar
    if (producto) {
      dispatch(productName(producto.title));
    }
  }, [dispatch, producto]);

  const productoTitle = useSelector((state) => state.product.productName);
  console.log('productoTitle: ' +productoTitle )
  const { data, isLoading, error } = useGetProductQuery(producto.id);
  console.log('data del useGetProductQuery')
  console.log(data)
  console.log('data del producto')
  console.log(producto)

  if (isLoading) {
    return (
      <View style={GlobalStyles.container}>
        <Text style={GlobalStyles.loadingText}>Cargando...</Text>
      </View>
    );
  }

  if (error) {
    return (
      <View style={GlobalStyles.container}>
        <Text style={GlobalStyles.errorText}>Error al cargar el producto</Text>
      </View>
    );
  }

  if (!producto) {
    return (
      <View style={GlobalStyles.container}>
        <Text style={GlobalStyles.errorText}>Producto no encontrado</Text>
      </View>
    );
  }

  const RenderProducts = ({ item }) => (
    <View style={GlobalStyles.renderProducts}>
      <Text style={GlobalStyles.buttonText}>{item.brand}</Text>
      <Text style={GlobalStyles.buttonTextBold}>{item.title}</Text>
      <Text style={GlobalStyles.buttonText}>{item.description}</Text>
      <Text style={GlobalStyles.buttonTextBold}>${item.price}000</Text>
      <FlatList
        data={item.images}
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
          keyExtractor={(item) => item.id.toString()}
        />
      </View>
      <View style={{ flex: 2 }}>
        <Counter producto={producto} />
      </View>
    </View>
  );
};

export default ProductScreen;
