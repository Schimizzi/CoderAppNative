import { Button, Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import GlobalStyles from "../../presentation/styles/GlobalStyles";
import { settingValue } from "./CounterSlice";
import GlobalColors from "../../presentation/styles/GlobalColors";


const Counter = () => {

  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()

  const [inputToAdd, setInputToAdd] = useState(null);
  
  const handleAddCart = () => {
    //agregar
  }

  return (
    <View style={GlobalStyles.container}>
      <View style={{flexDirection: "row"}}>
        <TextInput
          placeholder="Cantidad deseada"
          style={{marginRight: 10, textAlign: 'center'}}
          onChangeText={setInputToAdd}
          value={inputToAdd}
          
        />
        <Button title="Add cart" onPress={handleAddCart}></Button>
        <Pressable
          style={{padding: 3, borderRadius: 5, backgroundColor: GlobalColors.primary}}
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
