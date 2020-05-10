import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'

export default function App() {
  return (
    <View style={styles.container}>
      <View >
        <Text>Ahmed Yagoub</Text>
      </View>
      <View >
        <Text>Open up App.tsx to start working on your app!</Text>
      </View>
      <View style={styles.footer}>
        <Icon name='heart' />
        <Icon name='comment' />
        <Icon name='share' />
        <Icon name='retweet' />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10
  }
});