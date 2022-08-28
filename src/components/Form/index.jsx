import React from 'react';
import { Button, Text, TextInput, View } from 'react-native';
import ResultImc from '../ResultImc';

function Form() {
  return (
    <View>
      <View>
        <Text>Altura em cm</Text>
        <TextInput keyboardType='numeric' placeholder='175' />

        <Text>Peso em Kg</Text>
        <TextInput keyboardType='numeric' placeholder='70' />

        <Button title='Calcular IMC' />
      </View>
      <ResultImc result='10 IMC' />
    </View>
  );
}

export default Form;
