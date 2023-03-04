import {useEffect} from 'react';
import {
  Image,
  ImageBackground,
  StatusBar,
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
} from 'react-native';
import Animated, {
  Extrapolation,
  FadeInUp,
  interpolate,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  useSharedValue,
} from 'react-native-reanimated';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {PlantBackground} from '../../assets';
import {styles} from './Home.style';

const Home = () => {
  const {width} = useWindowDimensions();
  const insets = useSafeAreaInsets();
  const translateY = useSharedValue(0);

  useEffect(() => {
    StatusBar.setBarStyle('dark-content');
  }, []);

  const scrollHandler = useAnimatedScrollHandler(event => {
    translateY.value = event.contentOffset.y;
  });

  const headerAnimatedStyles = useAnimatedStyle(() => {
    const top = interpolate(
      translateY.value,
      [0, 100],
      [0, -100],
      Extrapolation.CLAMP,
    );
    return {
      top: top,
    };
  });

  const textAnimatedStyles = useAnimatedStyle(() => {
    const top = interpolate(
      translateY.value,
      [0, 16],
      [1, 0],
      Extrapolation.CLAMP,
    );
    return {
      opacity: top,
    };
  });

  return (
    <View style={styles.homeContainer}>
      <Animated.View
        entering={FadeInUp.duration(500)}
        style={[
          styles.header,
          headerAnimatedStyles,
          {
            width: width,
            paddingTop: insets.top + 10,
          },
        ]}>
        <Animated.Text
          style={[
            textAnimatedStyles,
            styles.greeting,
          ]}>
          Hi, Plant Lover
        </Animated.Text>
        <Animated.Text
          style={[
            textAnimatedStyles,
            styles.largeText,
          ]}>
          Good Afternoon! ⛅
        </Animated.Text>
        <Image
          source={PlantBackground}
          resizeMode="stretch"
          style={styles.headerBackground}
        />
      </Animated.View>
      <Animated.ScrollView
        onScroll={scrollHandler}
        scrollEventThrottle={16}
        style={[
          StyleSheet.absoluteFill,
          {
            paddingTop: 200,
          },
        ]}>
        <Text
          style={{
            width: '100%',
            height: 200,
            backgroundColor: '#00000030',
          }}>
          TEST
        </Text>
        <Text
          style={{
            width: '100%',
            height: 200,
            backgroundColor: '#00000030',
          }}>
          TEST
        </Text>
        <Text
          style={{
            width: '100%',
            height: 200,
            backgroundColor: '#00000030',
          }}>
          TEST
        </Text>
        <Text
          style={{
            width: '100%',
            height: 200,
            backgroundColor: '#00000030',
          }}>
          TEST
        </Text>
        <Text
          style={{
            width: '100%',
            height: 200,
            backgroundColor: '#00000030',
          }}>
          TEST
        </Text>
        <Text
          style={{
            width: '100%',
            height: 200,
            backgroundColor: '#00000030',
          }}>
          TEST
        </Text>
      </Animated.ScrollView>
    </View>
  );
};

export default Home;
