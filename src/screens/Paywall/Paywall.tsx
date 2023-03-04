import {useEffect} from 'react';
import {
  Image,
  ImageBackground,
  StatusBar,
  Text,
  View,
  ScrollView,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {CameraLine, PaywallBackground, PlantImage2} from '../../assets';
import Carousel from '../../components/MiniCarousel/Carousel';
import {styles} from './Paywall.style';

const Paywall = () => {
  const insets = useSafeAreaInsets();

  useEffect(() => {
    StatusBar.setBarStyle('light-content');
  });

  return (
    <ImageBackground source={PaywallBackground} style={styles.background}>
      <LinearGradient
        colors={['#00000000', '#101E17', '#101E17']}
        style={{...styles.gradientOverlay, paddingTop: insets.top + 20}}>
        <View style={styles.topSection}>
          <Image style={styles.cameraLine} source={CameraLine} />
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
      </View>
    </ImageBackground>
  );
};

export default Paywall;
