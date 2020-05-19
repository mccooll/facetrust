import React from 'react';
import { StyleSheet, Image, TouchableWithoutFeedback, View } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

export default class Portrait extends React.Component {

  state = {
    image: require('../assets/splash.png'),
  };

  onPress = async () => {
    console.log('hi');
    try {
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });
      if (!result.cancelled) {
        this.setState({ image: { uri: result.uri } });
        console.log('yep')
      }

      console.log(result);
    } catch (E) {
      console.log(E);
    }
  }

  render() {

    return (
      <View>
        <TouchableWithoutFeedback onPress={this.onPress}>
          <Image
            style={styles.portrait}
            source={this.state.image}
          />
        </TouchableWithoutFeedback>
      </View>
    );
  } 
}

const styles = StyleSheet.create({
  portrait: {
    width: 100,
    height: 100
  }
});