import { useNavigation } from '@react-navigation/native'
import { View, Text } from 'react-native'
import GlobalStyles from '../../styles/GlobalStyles'
import { FlatList } from 'react-native-gesture-handler'
import PrimaryButton from '../../components/shared/PrimaryButton'
import DrawerBar from '../../components/shared/DrawerBar'
import { useGetCategoriesQuery } from '../../services/shopServices'


const CategoriesScreen = () => {

  const navigation = useNavigation();
  const { data } = useGetCategoriesQuery()
  console.log('de firebase ' + data)

  return (
    <View style={GlobalStyles.container} >
      <DrawerBar />
      <Text>Categorias</Text>
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <PrimaryButton
            onPress={() => navigation.navigate('Products', { label: item })}
            label={item}
          />
        )}
      />
      <PrimaryButton
        onPress={() => navigation.navigate('Settings')}
        label='Ajustes'
      />

    </View>
  )
}

export default CategoriesScreen