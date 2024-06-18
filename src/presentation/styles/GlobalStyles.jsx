import { StyleSheet, Text, View } from 'react-native'
import GlobalColors from './GlobalColors'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

const insents = useSafeAreaInsets

const GlobalStyles = StyleSheet.create({


  container: {
    flex: 1,
    padding: 20,
    backgroundColor: GlobalColors.background,
    marginTop: insents.top


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
  },

  buttonTextBold: {
    color: 'gainsboro',
    fontSize: 25,
    fontWeight: 'bold',
  },

  renderProducts: {
    backgroundColor: GlobalColors.card,
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
    width: '100%',
    alignItems: 'center',
    
  }


})

export default GlobalStyles

