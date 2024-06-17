import { View, Text, Pressable } from 'react-native'
import React from 'react'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { DrawerActions, useNavigation } from '@react-navigation/native'
import PrimaryButton from '../../components/shared/PrimaryButton'

const ProfileScreen = () => {

  const insents = useSafeAreaInsets()
  const navigation = useNavigation()

  return (
    <View style={{flex:1, padding: 20, marginTop: insents.top}} >
      <Text>Profile Screen</Text>
      <PrimaryButton 
        onPress={ () => {navigation.dispatch(DrawerActions.toggleDrawer)}}
        label='Drawer = Cajón'
      />
    </View>
  )
}

export default ProfileScreen