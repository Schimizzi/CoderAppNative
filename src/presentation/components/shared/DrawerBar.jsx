import { DrawerActions, useNavigation } from '@react-navigation/native';
import { View, Text } from 'react-native'
import React, { useEffect, Pressable } from 'react'


const DrawerBar = () => {

  const navigation = useNavigation();

  return (
    
    useEffect(() => {
      navigation.setOptions({
        headerLeft: () => (
          <Pressable onPress={() => navigation.dispatch(DrawerActions.toggleDrawer)}>
            <Text>menu</Text>
          </Pressable>
        )
      })

    }, []))
}

export default DrawerBar