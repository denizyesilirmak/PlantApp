import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Animated, {
  Extrapolation,
  interpolate,
  useAnimatedStyle,
} from 'react-native-reanimated';
import {MessageIcon, RichIcon, RightArrow} from '../../assets';
import styles from './PremiumButton.style';

type PremiumButtonProps = {
  translateY: Animated.SharedValue<number>;
};

const PremiumButton = ({translateY}: PremiumButtonProps) => {
  const headerAnimatedStyles = useAnimatedStyle(() => {
    const right = interpolate(translateY.value, [0, 90], [200, -300]);
    return {
      right: right,
    };
  });

  return (
    <Pressable style={styles.container}>
      <Image source={MessageIcon} style={styles.messageIcon} />
      <View>
        <Text style={styles.title}>FREE Premium Available</Text>
        <Text style={styles.text}>Tap to upgrade your account!</Text>
      </View>
      <Image source={RightArrow} resizeMode="contain" style={styles.arrow} />
      <Animated.View style={[StyleSheet.absoluteFill, headerAnimatedStyles]}>
        <LinearGradient
          useAngle
          angle={120}
          colors={['#00000000', '#E5C99070', '#00000000']}
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}
          style={StyleSheet.absoluteFill}
        />
      </Animated.View>
    </Pressable>
  );
};

export default PremiumButton;
