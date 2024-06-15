import { StyleSheet, Text, View } from 'react-native'
import GlobalColors from './GlobalColors'

const GlobalStyles = StyleSheet.create({

  container: {
    flex: 1,
    padding: 20,
    backgroundColor: GlobalColors.background,


  },

  primaryButton: {
    backgroundColor: GlobalColors.primary,
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
    width: '100%',
    alignItems: 'center',

  },

  buttonText: {
    color: GlobalColors.background,
    fontSize: 18,

  }


})

export default GlobalStyles

