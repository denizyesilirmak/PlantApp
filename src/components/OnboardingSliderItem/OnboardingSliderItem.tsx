import {
  Image,
  ImageBackground,
  Text,
  useWindowDimensions,
  View,
} from 'react-native';
import Animated, {FadeInDown} from 'react-native-reanimated';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {OnboardingBackground1, OnboardingImage} from '../../assets';
import HeaderText from '../HeaderText/HeaderText';

const OnboardingSliderItem = ({item}: any) => {
  const {width} = useWindowDimensions();

  return (
    <View
      style={{
        flex: 1,
        width: width,
        padding: 20,
      }}>
      <HeaderText text={item.title} highlightedWord={item.highlight} />
      <Image
        resizeMode="contain"
        source={OnboardingImage}
        style={{
          width: '100%',
          flex: 1,
        }}
      />
      <Text
        style={{
          paddingVertical: 10,
          fontFamily: 'Rubik-Light',
        }}>
        {item.description}
      </Text>
    </View>
  );
};

export default OnboardingSliderItem;
