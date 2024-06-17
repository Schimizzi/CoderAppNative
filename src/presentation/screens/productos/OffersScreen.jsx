import { useNavigation, useRoute } from '@react-navigation/native'
import { FlatList, StyleSheet, Text, View, Image } from 'react-native'
import ProductosJSON from '../../data/products.json'
import PrimaryButton from '../../components/shared/PrimaryButton'
import GlobalStyles from '../../styles/GlobalStyles'



const OffersScreen = () => {
  
  const navigation = useNavigation()


  const productosFiltrados = ProductosJSON.filter(producto => producto.stock > 140);

  const RenderProducts = ({ item }) => (
    <View style={GlobalStyles.renderProducts} >
      {/* <Image source={{ uri: item.thumbnail }} /> */}
      <Text style={GlobalStyles.buttonTextBold} >{item.title}</Text>
      <Text style={GlobalStyles.buttonText}>
        30% off <Text style={{fontWeight: 'bold'}}>${item.price}000</Text>
      </Text>
      <PrimaryButton
        onPress={() => navigation.navigate('Product', { label: item})}
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
export default OffersScreen