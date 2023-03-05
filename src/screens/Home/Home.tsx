import {useEffect} from 'react';
import {
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
import PremiumButton from '../../components/PremiumButton/PremiumButton';
import SearchBox from '../../components/SearchBox/SearchBox';
import {styles} from './Home.style';
import Carousel from '../../components/Carousel/Carousel';
import PlantList from '../../components/PlantList/PlantList';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPlantCategories, fetchPosts, requestQuestions } from '../../store/actions';

const Home = () => {
  const {width} = useWindowDimensions();
  const insets = useSafeAreaInsets();
  const translateY = useSharedValue(0);
  const dispatch = useDispatch()
  const questions = useSelector(state => state.questions)
  const categories = useSelector(state => state.plantCategories)


  useEffect(() => {
    StatusBar.setBarStyle('dark-content');
    dispatch(fetchPosts())
    dispatch(fetchPlantCategories())

    
  }, []);

  const scrollHandler = useAnimatedScrollHandler(event => {
    translateY.value = event.contentOffset.y;
  });

  const headerAnimatedStyles = useAnimatedStyle(() => {
    const top = interpolate(
      translateY.value,
      [0, 90],
      [0, -90],
      Extrapolation.CLAMP,
    );
    return {
      top: top,
    };
  });

  const textAnimatedStyles = useAnimatedStyle(() => {
    const top = interpolate(
      translateY.value,
      [0, 32],
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
        entering={FadeInUp.duration(500).delay(200)}
        style={[
          styles.header,
          headerAnimatedStyles,
          {
            width: width,
            paddingTop: insets.top + 10,
          },
        ]}>
        <Animated.Text style={[textAnimatedStyles, styles.greeting]}>
          Hi, Plant Lover
        </Animated.Text>
        <Animated.Text style={[textAnimatedStyles, styles.largeText]}>
          Good Afternoon! ⛅
        </Animated.Text>
        <SearchBox />
        <Animated.Image
          source={PlantBackground}
          resizeMode="stretch"
          style={[styles.headerBackground, textAnimatedStyles]}
        />
      </Animated.View>
      <Animated.ScrollView
        showsVerticalScrollIndicator={false}
        onScroll={scrollHandler}
        scrollEventThrottle={16}
        contentContainerStyle={[styles.scrollViewContent]}
        style={[
          StyleSheet.absoluteFill,
          {
            paddingTop: 200,
          },
        ]}>
        <PremiumButton translateY={translateY}/>
        <Text
          style={{
            fontFamily: 'Rubik-SemiBold',
            fontSize: 18,
            marginTop: 10,
          }}>
          Get Started
        </Text>
        <Carousel items={questions} />
        <PlantList items={categories}/>
      </Animated.ScrollView>
    </View>
  );
};

export default Home;
