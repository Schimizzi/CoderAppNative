import { View, Text, Pressable } from 'react-native'
import React from 'react'
import { DrawerActions, useNavigation } from '@react-navigation/native'
import PrimaryButton from '../../components/shared/PrimaryButton'
import GlobalStyles from '../../styles/GlobalStyles'

const ProfileScreen = () => {

  const navigation = useNavigation()

  return (
    <View style={GlobalStyles.container} >
      <Text>Profile Screen</Text>
      <PrimaryButton 
        onPress={ () => {navigation.dispatch(DrawerActions.toggleDrawer)}}
        label='Drawer = Cajón'
      />
    </View>
  )
}

export default ProfileScreen