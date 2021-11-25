import {StyleSheet, Dimensions} from 'react-native';

export default StyleSheet.create({
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 5,
  },
  name: {
    fontWeight: 'bold',
    fontSize: 20,
    marginLeft: 10,
  },
  content_image: {
    height: Dimensions.get('window').height / 3,
  },
  footer: {
    padding: 5,
  },
  content_name: {
    fontWeight: 'bold',
  },
});
