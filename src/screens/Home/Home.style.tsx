import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  homeContainer: {
    flex: 1,
    backgroundColor: '#f6f6f6',
  },
  header: {
    backgroundColor: '#ffffff',
    height: 200,
    position: 'absolute',
    zIndex: 3,
  },
  greeting: {
    fontFamily: 'Rubik-Regular',
    marginLeft: 20,
    marginTop: 20,
  },
  largeText: {
    fontFamily: 'Rubik-SemiBold',
    marginLeft: 20,
    marginTop: 5,
    fontSize: 24,
  },
  headerBackground: {
    width: '100%',
    height: 90,
    position: 'absolute',
    bottom: 0,
    zIndex: -1,
  },
  scrollViewContent: {
    paddingHorizontal: 20,
    paddingTop: 10,
  },
});
