import { Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import GlobalStyles from '../../styles/GlobalStyles'
import DrawerBar from '../../components/shared/DrawerBar';
import Counter from '../../../features/counter/Counter';

const HomeScreen = () => {

  return (

      <View style={GlobalStyles.container} >
        <DrawerBar />
        <Text>foto y promociones</Text>
        <Counter />
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
        onPress={ () => navigation.navigate('Settings') }
        label='Ajustes'
        /> */}
      </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})