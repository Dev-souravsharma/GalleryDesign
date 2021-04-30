import {StyleSheet} from 'react-native';
const InputStyle = StyleSheet.create({
  component: {
    marginTop: 30,
    backgroundColor: '#eaeaea',
    borderRadius: 30,
    flexDirection: 'row',
    elevation: 10,
  },
  inputShadow: {
    borderRadius: 30,
    width: '100%',
    height: '100%',
  },
  searchImage: {
    alignItems: 'center',
    paddingLeft: 15,
    paddingTop: 15,
  },
  searchWidth: {
    marginLeft: 15,
    width: '74%',
    color: '#000000',
  },
  sliderSearch: {
    transform: [{rotateY: '180deg'}],
    width: 30,
    height: 30,
    // marginTop: 10,
  },
  pressableStyle: {
    width: 30,
    height: 30,
    marginTop: 10,
    borderRadius: 32,
  },
});
export default InputStyle;
