import {StyleSheet} from 'react-native';

export const style = StyleSheet.create({
  carouselItemBackground: {
    width: 230,
    height: 120,
    borderRadius: 10,
    padding: 12,
    justifyContent: 'space-around',
    alignItems: 'flex-start',
  },
  iconWrapper: {
    padding: 10,
    backgroundColor: '#00000060',
    borderRadius: 10,
  },
  icon: {
    width: 25,
    height: 25,
    tintColor: '#ffffff',
    padding: 10,
  },
  boldText: {
    fontFamily: 'Rubik-SemiBold',
    color: '#ffffff',
    fontSize: 20,
    marginTop: 10,
  },
  lightText: {
    fontFamily: 'Rubik-Light',
    color: '#ffffff',
    fontSize: 14,
    marginTop: 4,
  },
});
