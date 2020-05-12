import React from 'react';
import { StyleSheet, View } from 'react-native';
import TweetView from './component/view'
import Portrait from './component/portrait'
export default function App() {
  return (
    <View style={styles.container}>
      <Portrait />
      <TweetView />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
