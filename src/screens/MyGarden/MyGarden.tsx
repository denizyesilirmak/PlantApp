import AnimatedLottieView from 'lottie-react-native';
import {Text, View} from 'react-native';
import {PlantAnimation} from '../../assets';

const MyGarden = () => {
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
      <Text>Under development</Text>
    </View>
  );
};

export default MyGarden;
