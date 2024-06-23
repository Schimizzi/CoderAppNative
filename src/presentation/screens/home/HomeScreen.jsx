import { DrawerActions, useNavigation } from '@react-navigation/native';
import { Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import GlobalStyles from '../../styles/GlobalStyles'
import PrimaryButton from '../../components/shared/PrimaryButton';
import DrawerBar from '../../components/shared/DrawerBar';

const HomeScreen = () => {

  const navigation = useNavigation();


  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <Pressable onPress={() => navigation.dispatch(DrawerActions.toggleDrawer)}>
          <Text>menu</Text>
        </Pressable>
      )
    })

  }, [])




  return (

      <View style={GlobalStyles.container} >

        <Text>foto y promociones</Text>
        {/*  <PrimaryButton
        onPress={ () => navigation.navigate('Home') }
        label='arranque'
        />
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
        /> */}
      </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})