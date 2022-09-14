import React, { useState } from "react";
import { View,Text,TextInput, StyleSheet, Button, FlatList } from "react-native";


export default function History( {route}) {
  
 const { history } = route.params;

    return(
    <View style={styles.container}>
        <Text>History: </Text>
        <FlatList
            data={history}
            renderItem={({item}) => <Text>{item.key}</Text>}
            
        />
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
        borderWidth: 1
    }
  });