import React, {Component} from 'react';
import {View, Text, FlatList, Pressable} from 'react-native';
import FlatListHorizontalStyle from './FlatListHorizontalStyle';
const data = [
  {
    id: 1,
    name: 'Alle',
  },
  {
    id: 2,
    name: 'Aktulet',
  },
  {
    id: 3,
    name: 'Helse',
  },
  {
    id: 4,
    name: 'Aktivitet',
  },
  {
    id: 5,
    name: 'Stell',
  },
  {
    id: 6,
    name: 'Rob',
  },
  {
    id: 7,
    name: 'Tobs',
  },
  {
    id: 8,
    name: 'Cypher',
  },
  {
    id: 9,
    name: 'Phoneix',
  },
  {
    id: 10,
    name: 'Astra',
  },
];
class FlatListHorizontal extends Component {
  constructor() {
    super();
    this.state = {
      itemClick: null,
    };
  }
  render() {
    return (
      <View style={FlatListHorizontalStyle.container}>
        <FlatList
          data={data}
          horizontal={true}
          keyExtractor={item => item.id}
          renderItem={({item}) => (
            <Pressable
              onPress={() => {
                this.setState({itemClick: item.id});
                console.log('Pressed ' + item.id);
              }}>
              <View
                style={[
                  FlatListHorizontalStyle.horzontalStyle,
                  {
                    backgroundColor:
                      item.id === this.state.itemClick ? '#1DE9B6' : '#BDBDBD',
                  },
                ]}>
                <Text>{item.name}</Text>
              </View>
            </Pressable>
          )}
        />
      </View>
    );
  }
}
export default FlatListHorizontal;
