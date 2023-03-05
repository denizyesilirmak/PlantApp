import {FlatListProps, Platform, useWindowDimensions, View} from 'react-native';
import OnboardingSliderItem from '../../components/OnboardingSliderItem/OnboardingSliderItem';
import LargeButton from '../../components/LargeButton/LargeButton';
import SliderIndicator from '../../components/SliderIndicator/SliderIndicator';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {FlatList} from 'react-native-gesture-handler';
import {styles} from './Onboarding.style';
import {useCallback, useEffect, useRef, useState} from 'react';
import {clamp} from '../../helpers';
import {useNavigation} from '@react-navigation/native';
import {useSelector} from 'react-redux';

const SLIDER_ITEMS = [
  {
    title: 'Take a photo to identify the plant!',
    highlight: 'identify',
    description:
      'A comprehensive database of plants with information on their characteristics, care requirements, and growth habits',
  },
  {
    title: 'Get plant care guides',
    highlight: 'care guides',
    description:
      'A section with useful information and advice on plant care, including watering and fertilizing, pest control, and common problems',
  },
  {
    title: 'Get help from community',
    highlight: 'community',
    description:
      'A space where users can connect with each other, share tips and advice, and ask questions about their plants.',
  },
];

export type RenderItemProps = {
  index: number;
  item: {
    title: string;
    hightlight: string;
    description: string;
  };
};

const renderItem = ({index, item}: RenderItemProps) => (
  <OnboardingSliderItem item={item} />
);

const Onboarding = () => {
  const {width} = useWindowDimensions();
  const insets = useSafeAreaInsets();
  const navigation = useNavigation();
  const flatListRef = useRef<FlatList>(null);
  const [activeSliderIndex, setActiveSliderIndex] = useState<number>(0);

  const handleContinueButtonPress = useCallback(() => {
    setActiveSliderIndex(prevActiveIndex => prevActiveIndex + 1);

    if (activeSliderIndex >= SLIDER_ITEMS.length - 1) {
      navigation.navigate('Paywall');
      return;
    }

    flatListRef.current?.scrollToIndex({
      index: clamp(activeSliderIndex + 1, 0, SLIDER_ITEMS.length - 1),
      animated: true,
    });
  }, [activeSliderIndex]);

  return (
    <View
      style={{
        ...styles.onboarding,
        paddingBottom: insets.bottom + 15,
        paddingTop: insets.top + 10,
      }}>
      <View style={styles.listContainer}>
        <FlatList
          scrollEnabled={false}
          ref={flatListRef}
          style={styles.flatlist}
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          horizontal
          data={SLIDER_ITEMS}
          renderItem={renderItem}
        />
      </View>

      <View style={styles.bottomContainer}>
        <LargeButton label="Continue" onPress={handleContinueButtonPress} />
        <SliderIndicator
          dotCount={SLIDER_ITEMS.length}
          activeIndex={activeSliderIndex}
        />
      </View>
    </View>
  );
};

export default Onboarding;
