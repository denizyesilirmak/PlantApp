import {Image, ImageBackground, Text} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {BackgroundImage, PlantImage1} from '../../assets';
import HeaderText from '../../components/HeaderText/HeaderText';
import LargeButton from '../../components/LargeButton/LargeButton';
import styles from './GetStarted.style';

const GetStarted = ({navigation}) => {
  const insets = useSafeAreaInsets();

  return (
    <ImageBackground
      source={BackgroundImage}
      style={{...styles.background, paddingVertical: insets.top}}>
      <HeaderText text="Welcome to PlantApp" highlightedWord="PlantApp" />
      <Text style={styles.description}>
        Identify more than 3000+ plants and 88% accuracy.
      </Text>
      <Image source={PlantImage1} style={styles.image} />
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
