import {StyleSheet} from 'react-native';
const HeaderStyle = StyleSheet.create({
  container: {
    flex: 0.16,
    flexDirection: 'row',
    padding: 10,
  },
  imageStyle: {
    width: 30,
    height: 30,
  },
  downarrowStyle: {
    width: 15,
    height: 15,
    alignItems: 'center',
    marginLeft: 5,
    marginTop: 4,
  },
  spinnerView: {
    flexDirection: 'row',
  },
  spinnerPosition: {
    flex: 1,
    alignItems: 'flex-end',
    marginTop: 5,
  },
});
export default HeaderStyle;
