import { useNavigation } from '@react-navigation/native'
import { View, Text } from 'react-native'
import React from 'react'
import CategoriesJSON from '../../data/categories.json'
import GlobalStyles from '../../styles/GlobalStyles'
import { FlatList } from 'react-native-gesture-handler'
import PrimaryButton from '../../components/shared/PrimaryButton'


const CategoriesScreen = () => {

  const navigation = useNavigation();

  return (
    <View style={GlobalStyles.container} >
      <Text>Categorias</Text>
      <FlatList
        data={CategoriesJSON}
        renderItem={({ item }) => (
          <PrimaryButton
            onPress={ () => navigation.navigate('Products', {label : item}) }
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