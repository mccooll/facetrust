import React from 'react';
import { StyleSheet, Image, TouchableWithoutFeedback, View } from 'react-native';

export default function Portrait() {

  const onPress = () => {
    console.log('hi')
  }

  return (
    <View>
      <TouchableWithoutFeedback onPress={onPress}>
        <Image
          style={styles.portrait}
          source={require('../assets/splash.png')}
        />
      </TouchableWithoutFeedback>
    </View>
  );
}

const styles = StyleSheet.create({
  portrait: {
    width: 100,
    height: 100
  }
});