import { DrawerActions, useNavigation, useRoute } from '@react-navigation/native'
import { FlatList, StyleSheet, Text, View, Image, Pressable } from 'react-native'
import { useEffect } from 'react'


const DrawerBar = () => {

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
  
  /* return <></> */
    
}

export default DrawerBar