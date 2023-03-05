import AnimatedLottieView from 'lottie-react-native';
import {Text, View} from 'react-native';
import { PlantAnimation } from '../../assets';

const ScanPlant = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <AnimatedLottieView
        style={{
          width: 200,
          height: 200,
        }}
        resizeMode="contain"
        source={PlantAnimation}
        autoPlay
      />
      <Text>On development</Text>
    </View>
  );
};

export default ScanPlant;
