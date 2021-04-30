import React, {Component} from 'react';
import {Image, Pressable, TextInput, View} from 'react-native';
import InputStyle from './InputStyle';
class Input extends Component {
  render() {
    return (
      <View style={InputStyle.component}>
        <View style={InputStyle.searchImage}>
          <Image
            source={require('../assets/search.png')}
            style={InputStyle.searchImage}
          />
        </View>
        <TextInput
          placeholder="Search"
          placeholderTextColor="#616161"
          style={InputStyle.searchWidth}
        />
        <Pressable
          style={({pressed}) => [
            {backgroundColor: pressed ? '#eaeaea' : '#1DE9B6'},
            InputStyle.pressableStyle,
          ]}>
          <Image
            source={require('../assets/slider.png')}
            style={InputStyle.sliderSearch}
          />
        </Pressable>
      </View>
    );
  }
}
export default Input;
