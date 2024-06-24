import { useNavigation } from '@react-navigation/native'
import { View, Text } from 'react-native'
import React from 'react'
import CategoriesJSON from '../../data/categories.json'
import GlobalStyles from '../../styles/GlobalStyles'
import { FlatList } from 'react-native-gesture-handler'
import PrimaryButton from '../../components/shared/PrimaryButton'
import DrawerBar from '../../components/shared/DrawerBar'


const CategoriesScreen = () => {

  const navigation = useNavigation();
  return (
    <View style={GlobalStyles.container} >
      <DrawerBar />
      <Text>Categorias</Text>
      <FlatList
        data={CategoriesJSON}
        renderItem={({ item }) => (
          <PrimaryButton
            onPress={ () => navigation.navigate('Products', {label : item})}
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