import React, {Component} from 'react';
import {View, Text, Image, FlatList} from 'react-native';
import FlatListVerticalStyle from './FlatListVerticalStyle';
const data = [
  {
    id: 1,
    name: 'Alle',
    title: 'Alle Hessle',
  },
  {
    id: 2,
    name: 'Aktulet',
    title: 'Alle Hessle',
  },
  {
    id: 3,
    name: 'Helse',
    title: 'Alle Hessle',
  },
  {
    id: 4,
    name: 'Aktivitet',
    title: 'Alle Hessle',
  },
  {
    id: 5,
    name: 'Stell',
    title: 'Alle Hessle',
  },
  {
    id: 6,
    name: 'Rob',
    title: 'Alle Hessle',
  },
  {
    id: 7,
    name: 'Tobs',
    title: 'Alle Hessle',
  },
  {
    id: 8,
    name: 'Cypher',
    title: 'Alle Hessle',
  },
  {
    id: 9,
    name: 'Phoneix',
    title: 'Alle Hessle',
  },
  {
    id: 10,
    name: 'Astra',
    title: 'Alle Hessle',
  },
];
class FlatListVertical extends Component {
  render() {
    return (
      <View style={FlatListVerticalStyle.container}>
        <FlatList
          data={data}
          numColumns={2}
          keyExtractor={item => item.id}
          renderItem={({item}) => (
            <View style={FlatListVerticalStyle.card}>
              <Image
                source={require('../assets/doog.png')}
                style={FlatListVerticalStyle.imageSize}
              />
              <Text style={FlatListVerticalStyle.title}>{item.title}</Text>
              <Text style={FlatListVerticalStyle.heading}>{item.name}</Text>
            </View>
          )}
        />
      </View>
    );
  }
}
export default FlatListVertical;
