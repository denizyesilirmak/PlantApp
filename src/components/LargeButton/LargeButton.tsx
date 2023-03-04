import {Pressable, Text} from 'react-native';
import {styles} from '../HeaderText/HeaderText.style';

type LargeButtonProps = {
  label: string;
};

const LargeButton = ({label}: LargeButtonProps) => {
  return (
    <Pressable
      style={({pressed}) => ({
        ...styles.container,
        backgroundColor: pressed ? '#28AF6E90' : '#28AF6Eff',
      })}>
      <Text style={styles.text}>{label}</Text>
    </Pressable>
  );
};

export default LargeButton;
