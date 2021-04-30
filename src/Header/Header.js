import React, {Component} from 'react';
import {View, Text, Image} from 'react-native';
import HeaderStyle from './HeaderStyle';
class Header extends Component {
  render() {
    return (
      <View style={HeaderStyle.container}>
        <Image
          source={require('../assets/slider.png')}
          style={HeaderStyle.imageStyle}
        />
        <View style={HeaderStyle.spinnerPosition}>
          <View style={HeaderStyle.spinnerView}>
            <Text>ENZO</Text>
            <Image
              source={require('../assets/downarrow.png')}
              style={HeaderStyle.downarrowStyle}
            />
          </View>
        </View>
      </View>
    );
  }
}
export default Header;
