import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import GlobalStyles from "../../presentation/styles/GlobalStyles";
import { settingValue } from "./CounterSlice";
import GlobalColors from "../../presentation/styles/GlobalColors";


const Counter = ({producto}) => {

  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()

  const [inputToAdd, setInputToAdd] = useState(null);

  
  return (
    <View style={GlobalStyles.container}>
      <View >
        <Text style={[GlobalStyles.buttonText, {color: 'black'}]}>{count + ' item/s agregado/s'}</Text>
      </View>
      <View style={{flexDirection: "row"}}>
        <TextInput
          placeholder="Cantidad deseada"
          style={{marginRight: 10, textAlign: 'center'}}
          onChangeText={setInputToAdd}
          value={inputToAdd}
          
        />
        <Pressable
          style={{padding: 10, borderRadius: 5, backgroundColor: GlobalColors.primary }}
          onPress={() => {dispatch(settingValue(Number(inputToAdd)));
            setInputToAdd('');
          }}
        >
          <Text style={GlobalStyles.buttonText}>Cantidad</Text>
          
        </Pressable>
      </View>
    </View>
  );
};

export default Counter;
