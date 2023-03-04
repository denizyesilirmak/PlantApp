import {Image, ImageBackground, Text, View} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import {OnboardingBackground1, OnboardingImage} from '../../assets';
import HeaderText from '../HeaderText/HeaderText';
import LargeButton from '../LargeButton/LargeButton';

const OnboardingSliderItem = () => {
    const insets = useSafeAreaInsets()

  return (
    <ImageBackground
      source={OnboardingBackground1}
      style={{
        flex: 1,
        padding: 20,
        paddingTop: insets.top
      }}>
      <HeaderText
        text="Take a photo to identify the plant!"
        highlightedWord="identify"
      />
      <Image 
        source={OnboardingImage}
        style={{
            width: '100%',
            flex: 1,
        }}
      />
      <LargeButton 
        label='Continue'
      />
    </ImageBackground>
  );
};

export default OnboardingSliderItem;
