import React from 'react'
import { StyleSheet, View, Text, TextInput } from 'react-native'


export default function comment() {
  return (
    <View >
      <TextInput style={styles.input} />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    width: 200,
    borderWidth: 1,
    borderColor: '#777',
    borderRadius: 5,
    padding: 8,
    margin: 20
  }
});