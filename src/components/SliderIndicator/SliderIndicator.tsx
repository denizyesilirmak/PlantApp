import {Text, View} from 'react-native';
import Animated, {
  interpolate,
  interpolateColor,
  useAnimatedStyle,
  withSpring,
  withTiming,
} from 'react-native-reanimated';

type SliderIndicatorProps = {dotCount: number; activeIndex: number};

const SliderIndicator = ({dotCount, activeIndex}: SliderIndicatorProps) => {
  return (
    <View
      style={{
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        height: 50,
        marginBottom: 50,
        gap: 8,
      }}>
      {[...new Array(dotCount)].map((item, index) => {
        const active = activeIndex === index;
        return <Dot active={active} key={index} />;
      })}
    </View>
  );
};

const Dot = ({active}: {active: boolean}) => {
  const style = useAnimatedStyle(() => {
    const width = active ? 12 : 8;
    const height = active ? 12 : 8;
    const borderRadius = active ? 6 : 4;
    const backgroundColor = active ? '#000000' : '#cccccc';

    return {
      width: withSpring(width),
      height: withSpring(height),
      borderRadius: withTiming(borderRadius),
      backgroundColor: withTiming(backgroundColor),
    };
  });

  return <Animated.View style={style} />;
};

export default SliderIndicator;
