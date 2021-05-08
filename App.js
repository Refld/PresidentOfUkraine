import React, {useState} from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import Constants from 'expo-constants';

export default function App() {
  
  const [result, setResult] = useState(0);
  const [a, setA] = useState(0);
  const [h, setH] = useState(0);

  function Sum(){
    var osn = Math.round(Math.random() * 25);
    var vbis = Math.round(Math.random() * 25);
    var sum = 1/2*osn*vbis;
    setA(osn);
    setH(vbis);
    setResult(sum);
  }

  return (
    <View>
      <Text>Расчет площади произвольного треугольника</Text>
      <Text>{'\t'}</Text>
      <Button title="Вычислить" onPress={Sum}/>
      <Text>Основание треугольника:</Text>
      <Text>{a}</Text>
      <Text>Высота треугольника: </Text>
      <Text>{h}</Text>
      <Text>{result}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ecf0f1',
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
