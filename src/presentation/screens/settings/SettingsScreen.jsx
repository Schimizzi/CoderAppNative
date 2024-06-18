import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import GlobalStyles from '../../styles/GlobalStyles'
import PrimaryButton from '../../components/shared/PrimaryButton'
import { StackActions, useNavigation } from '@react-navigation/native'
import HomeScreen from '../home/HomeScreen'

const SettingsScreen = () => {

  const navigator = useNavigation()

  return (
    <View style={GlobalStyles.container} >
      <Text>Settings Screen</Text>
      <PrimaryButton
        label='Inicio'
        onPress={ () => navigator.dispatch( StackActions.popToTop(HomeScreen))}
      />
      <PrimaryButton
        label='Regresar'
        onPress={() => navigator.goBack()}
      />

    </View>
  )
}

export default SettingsScreen

const styles = StyleSheet.create({})