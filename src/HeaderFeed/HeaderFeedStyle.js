import { Dimensions, Platform, StyleSheet } from 'react-native';

const { width } = Dimensions.get('screen');

export default StyleSheet.create({
  container__HeaderFeed: {
    height: '10%',
    flexDirection: 'row',
    position: 'absolute',
    alignSelf: 'center',
    zIndex: 10,
    alignItems: 'center',
    marginTop: Platform.OS === 'ios' ? ' 10%' : '5%',
  },
  left__HeaderFeed: {
    width: width / 2,
    justifyContent: 'center',
  },
  right__HeaderFeed: {
    width: width / 2,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  left_btn__HeaderFeed: {
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    width: 40,
    height: 40,
    borderRadius: 50,
    marginLeft: 20,
  },
  right_btn__HeaderFeed: {
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    width: 40,
    height: 40,
    borderRadius: 50,
    marginRight: 10,
  },
});
