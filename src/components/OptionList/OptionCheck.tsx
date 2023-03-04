import {StyleSheet, View} from 'react-native';

type OptionCheckProps = {
  checked: boolean;
};

const styles = StyleSheet.create({
  container: {
    width: 28,
    height: 28,
    borderRadius: 14,
    marginRight: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  smallCircle: {
    width: 12,
    height: 12,
    backgroundColor: '#ffffff',
    borderRadius: 6,
  },
});

const OptionCheck = ({checked}: OptionCheckProps) => {
  return (
    <View
      style={{
        ...styles.container,
        backgroundColor: checked ? '#28AF6Eff' : '#ffffff30',
      }}>
      {checked && <View style={styles.smallCircle} />}
    </View>
  );
};

export default OptionCheck;
