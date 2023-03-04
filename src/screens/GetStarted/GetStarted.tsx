import {ImageBackground, Text, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {BackgroundImage} from '../../assets';

const GetStarted = () => {
  const insets = useSafeAreaInsets();

  return (
    <ImageBackground
      source={BackgroundImage}
      style={{
        flex: 1,
        paddingTop: insets.top + 20,
        padding: 20,
      }}>
      <Text
        style={{
          fontSize: 28,
          marginBottom: 6
        }}>
        <Text
          style={{
            fontFamily: 'Rubik-Regular',
          }}>
          Welcome to{' '}
        </Text>
        <Text
          style={{
            fontFamily: 'Rubik-SemiBold',
          }}>
          PlantApp
        </Text>
      </Text>
      <Text
        style={{
          fontSize: 16,
          maxWidth: '82%',
          fontFamily: 'Rubik-Light',
          lineHeight: 22
        }}>
        Identify more than 3000+ plants and 88% accuracy.
      </Text>
    </ImageBackground>
  );
};

export default GetStarted;
