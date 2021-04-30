import {StyleSheet} from 'react-native';
const FlatListVerticalStyle = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageSize: {
    width: 100,
    height: 100,
    marginBottom: 5,
  },
  heading: {
    fontSize: 24,
    paddingBottom: 30,
  },
  card: {
    padding: 5,
    margin: 10,
    backgroundColor: '#eaeaea',
    borderRadius: 15,
    height: 200,
    elevation: 10,
    width: '42%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    flex: 1,
    justifyContent: 'flex-start',
  },
});
export default FlatListVerticalStyle;
