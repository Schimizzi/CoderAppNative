import { View, Text, Pressable } from 'react-native'
import React from 'react'
import { DrawerActions, useNavigation } from '@react-navigation/native'
import PrimaryButton from '../../components/shared/PrimaryButton'
import GlobalStyles from '../../styles/GlobalStyles'
import DrawerBar from '../../components/shared/DrawerBar'

const ProfileScreen = () => {

  const navigation = useNavigation()

  return (
    <View style={GlobalStyles.container} >
      <DrawerBar />
      <Text>Profile Screen</Text>
      <PrimaryButton 
        onPress={ () => {navigation.dispatch(DrawerActions.toggleDrawer)}}
        label='Drawer = Cajón'
      />
    </View>
  )
}

export default ProfileScreen