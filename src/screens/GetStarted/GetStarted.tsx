import {Image, ImageBackground, Text} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {BackgroundImage, PlantImage1} from '../../assets';
import HeaderText from '../../components/HeaderText';
import styles from './GetStarted.style';

const GetStarted = () => {
  const insets = useSafeAreaInsets();

  return (
    <ImageBackground
      source={BackgroundImage}
      style={{...styles.background, paddingTop: insets.top + 20}}>
      <HeaderText text="Welcome to PlantApp" highlightedWord="PlantApp" />
      <Text
        style={styles.description}>
        Identify more than 3000+ plants and 88% accuracy.
      </Text>
      <Image
        source={PlantImage1}
        style={styles.image}
      />
    </ImageBackground>
  );
};

export default GetStarted;
