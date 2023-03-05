import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 60,
    backgroundColor: '#24201A',
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    overflow: 'hidden'
  },
  messageIcon: {
    width: 45,
    height: 45,
    marginRight: 10,
    marginTop: 6,
  },
  title: {
    fontFamily: 'Rubik-SemiBold',
    color: '#E5C990',
    fontSize: 16,
  },
  text: {
    fontFamily: 'Rubik-Regular',
    color: '#E5C990',
    fontSize: 14,
    lineHeight: 18,
  },
  arrow: {
    width: 12,
    marginRight: 14,
    marginTop: 6,
    position: 'absolute',
    right: 0,
  }
});

export default styles;
