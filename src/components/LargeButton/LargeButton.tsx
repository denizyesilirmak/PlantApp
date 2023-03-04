import {Pressable, Text} from 'react-native';
import {styles} from '../HeaderText/HeaderText.style';

type LargeButtonProps = {
  label: string;
  onPress: () => void;
};

const LargeButton = ({label, onPress}: LargeButtonProps) => {
  return (
    <Pressable
      onPress={onPress}
      style={({pressed}) => ({
        ...styles.container,
        backgroundColor: pressed ? '#28AF6E90' : '#28AF6Eff',
      })}>
      <Text style={styles.text}>{label}</Text>
    </Pressable>
  );
};

export default LargeButton;
