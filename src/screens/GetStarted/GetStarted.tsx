import {useEffect} from 'react';
import {Image, ImageBackground, StatusBar, Text} from 'react-native';
import Animated, { FadeInDown, FadeOutDown } from 'react-native-reanimated';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import { useDispatch } from 'react-redux';
import {BackgroundImage, PlantImage1} from '../../assets';
import HeaderText from '../../components/HeaderText/HeaderText';
import LargeButton from '../../components/LargeButton/LargeButton';
import { fetchPosts, requestQuestions } from '../../store/actions';
import styles from './GetStarted.style';

const GetStarted = ({navigation}) => {
  const insets = useSafeAreaInsets();
  const dispatch = useDispatch()

  useEffect(() => {
    StatusBar.setBarStyle('dark-content');
    dispatch(fetchPosts())
  }, []);

  return (
    <ImageBackground
      source={BackgroundImage}
      style={{...styles.background, paddingVertical: insets.top}}>
      <HeaderText text="Welcome to PlantApp" highlightedWord="PlantApp" />
      <Animated.Text exiting={FadeOutDown.duration(1000)} entering={FadeInDown.duration(500).delay(100)} style={styles.description}>
        Identify more than 3000+ plants and 88% accuracy.
      </Animated.Text>
      <Animated.Image entering={FadeInDown.duration(800).delay(100)} source={PlantImage1} style={styles.image} />
      <LargeButton
        label="Get Started"
        onPress={() => navigation.replace('Onboarding')}
      />
      <Text style={{...styles.policyText}}>
        By tapping next, you are agreeing to PlantID Terms of Use & Privacy
        Policy.
      </Text>
    </ImageBackground>
  );
};

export default GetStarted;
