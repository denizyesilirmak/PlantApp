import {Pressable, StyleProp, Text, ViewStyle} from 'react-native';
import {styles} from '../HeaderText/HeaderText.style';

type LargeButtonProps = {
  label: string;
  onPress: () => void;
  style?: StyleProp<ViewStyle>;
};

const LargeButton = ({label, onPress, style}: LargeButtonProps) => {
  return (
    <Pressable
      onPress={onPress}
      style={({pressed}) => [
        {
          ...styles.container,
          backgroundColor: pressed ? '#28AF6E90' : '#28AF6Eff',
        },
        style,
      ]}>
      <Text style={styles.text}>{label}</Text>
    </Pressable>
  );
};

export default LargeButton;
