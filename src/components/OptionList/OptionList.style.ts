import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  optionButton: {
    width: '100%',
    flex: 1,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ffffffda',
    backgroundColor: '#ffffff20',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
  },
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 10,
    justifyContent: 'space-evenly',
    gap: 12,
  },
  optionLabel: {
    color: '#ffffff',
    fontSize: 16,
    fontFamily: 'Rubik-SemiBold',
    marginBottom: 4,
  },
  optionDesc: {
    color: '#ffffff',
    fontSize: 14,
    fontFamily: 'Rubik-Light',
  },
});
