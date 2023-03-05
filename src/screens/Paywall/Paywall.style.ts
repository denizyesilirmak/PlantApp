import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: '#101E17',
  },
  gradientOverlay: {
    flex: 1,
  },
  topSection: {
    width: '100%',
    height: '36%',
    opacity: 0.9,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cameraLine: {
    position: 'absolute',
    zIndex: 2,
    opacity: 0.8,
  },
  bottomSection: {
    width: '100%',
    paddingHorizontal: 0,
    flex: 1
  },
  promoteText: {
    fontFamily: 'Rubik-Light',
    color: '#ffffffda',
    fontSize: 18,
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 20
  },
  textHeader: {
    color: '#ffffff',
    fontSize: 32,
    marginLeft: 20,
    marginTop: 26
  },
  textHeaderBold: {
    fontFamily: 'Rubik-Bold',
  },
  textHeaderLight: {
    fontFamily: 'Rubik-Regular',
  }
});
