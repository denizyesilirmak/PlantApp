import {Image, ScrollView, Text, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {DetailedIcon} from '../../assets';

const CarouselItem = () => {
  return (
    <LinearGradient
      colors={['#ffffff20', '#ffffff10']}
      style={{
        width: 230,
        height: 160,
        borderRadius: 10,
        padding: 20,
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
      }}>
      <View
        style={{
          padding: 10,
          backgroundColor: '#00000060',
          borderRadius: 10,
        }}>
        <Image
          source={DetailedIcon}
          style={{
            width: 25,
            height: 25,
            tintColor: '#ffffff',
            padding: 10,
          }}
        />
      </View>
      <Text
        style={{
          fontFamily: 'Rubik-Bold',
          color: '#ffffff',
          fontSize: 24,
          marginTop: 20,
        }}>
        Unlimited
      </Text>
      <Text
        style={{
          fontFamily: 'Rubik-Light',
          color: '#ffffff',
          fontSize: 18,
          marginTop: 4,
        }}>
        Plant Identify
      </Text>
    </LinearGradient>
  );
};

const Carousel = () => {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{
        gap: 10,
        paddingHorizontal: 20,
      }}
      style={{
        width: '100%',
        height: 100,
      }}>
      <CarouselItem />
    </ScrollView>
  );
};

export default Carousel;
