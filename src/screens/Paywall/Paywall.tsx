import {useNavigation} from '@react-navigation/native';
import {useEffect} from 'react';
import {
  Button,
  Image,
  ImageBackground,
  StatusBar,
  Text,
  View,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Animated, { FadeInUp, SlideInUp } from 'react-native-reanimated';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {CameraLine, PaywallBackground, PlantImage2} from '../../assets';
import LargeButton from '../../components/LargeButton/LargeButton';
import Carousel from '../../components/MiniCarousel/MiniCarousel';
import OptionList from '../../components/OptionList/OptionList';
import {updateOnboardingStatus} from '../../storage';
import {styles} from './Paywall.style';

const Paywall = () => {
  const insets = useSafeAreaInsets();
  const navigation = useNavigation();

  useEffect(() => {
    StatusBar.setBarStyle('light-content');
  });

  return (
    <ImageBackground source={PaywallBackground} style={styles.background}>
      <LinearGradient
        colors={['#00000000', '#101E17da', '#101E17ff']}
        style={{...styles.gradientOverlay, paddingTop: insets.top + 20}}>
        <View style={styles.topSection}>
          <Animated.Image entering={FadeInUp.duration(1000).delay(600).springify()}  style={styles.cameraLine} source={CameraLine} />
          <Image source={PlantImage2} />
        </View>
      </LinearGradient>
      <View style={{...styles.bottomSection, bottom: insets.bottom + 20}}>
        <Text style={styles.textHeader}>
          <Text style={styles.textHeaderBold}>PlantApp </Text>
          <Text style={styles.textHeaderLight}>Premium</Text>
        </Text>
        <Text style={styles.promoteText}>Access All Features</Text>
        <Carousel />
        <OptionList />
        <View
          style={{
            paddingHorizontal: 20,
          }}>
          <LargeButton
            label="Try free for 3 days"
            onPress={() => {
              updateOnboardingStatus(true);
              navigation.navigate('HomeStack');
            }}
          />
          <Text
            style={{
              color: '#ffffffbb',
              fontSize: 10,
              textAlign: 'center',
              fontFamily: 'Rubik-Light',
              marginTop: 4
            }}>
            After the 3-day free trial period you’ll be charged ₺274.99 per year
            unless you cancel before the trial expires. Yearly Subscription is
            Auto-Renewable
          </Text>
        </View>
      </View>
    </ImageBackground>
  );
};

export default Paywall;
