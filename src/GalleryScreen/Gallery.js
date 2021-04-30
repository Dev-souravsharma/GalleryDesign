import React, {Component} from 'react';
import {View, Text} from 'react-native';
import FlatListHorizontal from '../FlatListHorizontal/FlatListHorizontal';
import FlatListVertical from '../FlatListVertical/FlatListVertical';
import Header from '../Header/Header';
import Input from '../Input/Input';
import GalleryStyle from './GalleryStyle';
class Gallery extends Component {
  render() {
    return (
      <View style={GalleryStyle.container}>
        <Header />
        <Text style={GalleryStyle.textHeading}>Rad og anbefalinger</Text>
        <Input />
        <FlatListHorizontal />
        <FlatListVertical />
      </View>
    );
  }
}
export default Gallery;
