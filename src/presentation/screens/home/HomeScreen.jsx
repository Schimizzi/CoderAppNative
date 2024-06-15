import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import GlobalStyles from '../../styles/GlobalStyles'
import PrimaryButton from '../../components/shared/PrimaryButton';
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {

  const navigation = useNavigation();


  return (
    <View style={GlobalStyles.container} >
      <PrimaryButton
        onPress={ () => navigation.navigate('Home') }
        label='Inicio'
      />
      <PrimaryButton
        onPress={ () => navigation.navigate('Categories') }
        label='Categorias'
      />
      <PrimaryButton
        onPress={ () => navigation.navigate('Offers') }
        label='Ofertas'
      />
      <PrimaryButton
        onPress={ () => navigation.navigate('Settings') }
        label='Ajustes'
      />
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})