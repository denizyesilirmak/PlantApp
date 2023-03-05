import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 2,
    marginTop: 10,
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingBottom: 240,
  },
  itemWrapper: {
    width: '50%',
    height: 180,
    padding: 4,
  },
  itemButton: {
    width: '100%',
    height: '100%',
    backgroundColor: '#ffffff',
    borderRadius: 10,
    overflow: 'hidden',
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: '#00000030',
    padding: 14,
  },
  title: {
    fontFamily: 'Rubik-Semibold',
    textTransform: 'capitalize',
    fontSize: 16,
  },
  itemImage: {
    right: -40,
    top: 20,
  }
});
