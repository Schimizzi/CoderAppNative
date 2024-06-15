import { Pressable, StyleSheet, Text, View } from 'react-native'
import GlobalStyles from '../../styles/GlobalStyles'


const PrimaryButton = ({onPress, label}) => {


  return (
    <Pressable style={GlobalStyles.primaryButton}
      onPress={ onPress }>
      <Text style={GlobalStyles.buttonText} >{label}</Text>

    </Pressable>
  )
}

export default PrimaryButton

const styles = StyleSheet.create({})