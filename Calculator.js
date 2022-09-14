import React, { useState } from "react";
import { View,Text,TextInput, StyleSheet, Button } from "react-native";

export default function Calculator( { navigation }) {
  const [luku1, setLuku1] = useState('');
  const [luku2, setLuku2] = useState('');
  const [result, setResult] = useState('');
  const [history, setHistory] = useState([]);

  const summa = () => {
    const plus = luku1 + luku2;
    setResult(plus);
    setHistory([...history, {key: luku1 + ' + ' + luku2 + ' = ' + plus}]);
    setLuku1('');
    setLuku2('');
    
  }

  const erotus = () => {
    const minus = luku1 - luku2;
    setResult(minus);
    setHistory([...history, {key: luku1 + ' - ' + luku2 + ' = ' + minus}])
    setLuku1('');
    setLuku2('');
  }


  
  
    return(
    <View style={styles.container}>

        <Text>Result {result}</Text>
        <TextInput style={styles.input}
            value={luku1}
            onChangeText={text => setLuku1(Number(text))}
            keyboardType='numeric'
        />
        <TextInput style={styles.input}
            value={luku2}
            onChangeText={text => setLuku2(Number(text))}
            keyboardType='numeric'
        />

        <View style={styles.buttons}>
            <Button title=' +'  onPress={summa}/>
            <Button title=' - ' onPress={erotus}/>
            <Button title='History' onPress={() => navigation.navigate('History', {history: history})}/>
        
        </View>

        


        
    
    
    
    
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    input: {
        width: 150,
        borderColor: 'blue',
        borderWidth: 1,
        marginTop: 5
    },
    buttons: {
        alignItems: 'flex-start',
        flexDirection: 'row',
        justifyContent: 'space-around',
        
    }
  });
  