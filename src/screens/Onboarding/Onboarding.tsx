import {useRef} from 'react';
import {Button, Text, useWindowDimensions, View} from 'react-native';
import {updateOnboardingStatus} from '../../storage';
import Carousel from 'react-native-reanimated-carousel';
import OnboardingSliderItem from '../../components/OnboardingSliderItem/OnboardingSliderItem';

type RenderItemProps = {
  index: number;
};

const renderItem = ({index}: RenderItemProps) => <OnboardingSliderItem />;

const Onboarding = () => {
  const {width} = useWindowDimensions();
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'lightpink',
      }}>
      <Carousel
        loop={false}
        style={{
          flex: 1,
        }}
        width={width}
        data={[...new Array(2).keys()]}
        renderItem={renderItem}
      />
    </View>
  );
};

export default Onboarding;
