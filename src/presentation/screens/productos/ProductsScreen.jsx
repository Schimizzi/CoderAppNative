import { useNavigation, useRoute } from '@react-navigation/native'
import { FlatList, Text, View, Image, ActivityIndicator } from 'react-native'
import React, { useEffect } from 'react'
import PrimaryButton from '../../components/shared/PrimaryButton'
import GlobalStyles from '../../styles/GlobalStyles'
import DrawerBar from '../../components/shared/DrawerBar'
import { useDispatch, useSelector } from 'react-redux'
import { categoryName } from '../../../features/counter/CounterSlice'
import { useGetProductsQuery } from '../../services/shopServices'

const ProductsScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const route = useRoute();
  const { label: itemCategories } = route.params;

  const { data: products, isLoading, error } = useGetProductsQuery(itemCategories); // firebase

  useEffect(() => {
    if (itemCategories) {
      dispatch(categoryName(itemCategories));
    }
  }, [itemCategories, dispatch]);

  const categoryTitle = useSelector((state) => state.category.categoryName);
  console.log('para Redux, Category en Products: ' + categoryTitle);

  useEffect(() => {
    if (products) {
      products.forEach((product) => {
        console.log(`ProductoForEach : `, product);
        console.log(`Productos : `, products);
      });
    }
  }, [products]);

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

  if (isLoading) {
    return (
      <View style={[GlobalStyles.container, GlobalStyles.center]}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  if (error) {
    return (
      <View style={GlobalStyles.container}>
        <Text style={GlobalStyles.errorText}>error!!!</Text>
      </View>
    );
  }

  return (
    <View style={GlobalStyles.container}>
      <DrawerBar />
      <FlatList
        data={products}
        renderItem={RenderProducts}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

export default ProductsScreen;
