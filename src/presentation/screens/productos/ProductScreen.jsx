import { useRoute } from '@react-navigation/native';
import { FlatList, Text, View, Image } from 'react-native';
import React from 'react';
import GlobalStyles from '../../styles/GlobalStyles';
import Counter from '../../../features/counter/Counter';
import DrawerBar from '../../components/shared/DrawerBar';

const ProductScreen = () => {
  const route = useRoute();
  const { label: producto } = route.params;
  
  if (!producto) {
    console.error('Producto no encontrado en params');
    return null; 
  }

  console.log('para Redux, el nombre el producto en Product: ' + producto.title);

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
