import {FlatList, Pressable, StyleSheet, Text, View} from 'react-native';
import FastImage from 'react-native-fast-image';
import Animated, {FadeIn} from 'react-native-reanimated';
import {IQuestion} from '../../../types';

const CAROUSEL_ITEMS = [
  {
    id: 1,
    title: 'How to identify plants?',
    subtitle: 'Life Style',
    image_uri:
      'https://firebasestorage.googleapis.com/v0/b/flora---plant-identifier.appspot.com/o/public%2FCard.png?alt=media',
    uri: 'https://plantapp.app/blog/identifying-plant-in-10-steps/',
    order: 1,
  },
  {
    id: 2,
    title: 'Differences Between Species and Varieties?',
    subtitle: 'Plant Identify',
    image_uri:
      'https://firebasestorage.googleapis.com/v0/b/flora---plant-identifier.appspot.com/o/public%2Fcard2.png?alt=media',
    uri: 'https://plantapp.app/blog/differences-between-species-and-varieties/',
    order: 2,
  },
  {
    id: 3,
    title: 'The reasons why the same plant can look different?',
    subtitle: 'Life Style',
    image_uri:
      'https://firebasestorage.googleapis.com/v0/b/flora---plant-identifier.appspot.com/o/public%2FCard3.png?alt=media',
    uri: 'https://plantapp.app/blog/same-seeds-but-different-looking-plants/',
    order: 3,
  },
];

const CarouselItem = ({data, index}: {data: IQuestion; index: number}) => {
  return (
    <Animated.View
      entering={FadeIn.duration(300).delay(index * 150)}
      style={{
        width: 280,
        height: 200,
      }}>
      <Pressable
        style={{
          flex: 1,
          borderRadius: 10,
          flexDirection: 'column-reverse',
          paddingHorizontal: 14,
          paddingBottom: 14,
          overflow: 'hidden',
        }}>
        <Text
          style={{
            color: '#ffffff',
            height: 50,
            fontFamily: 'Rubik-SemiBold',
            fontSize: 16,
            zIndex: 2,
          }}>
          {data.title}
        </Text>
        <FastImage
          source={{uri: data.image_uri}}
          style={StyleSheet.absoluteFill}
        />
      </Pressable>
    </Animated.View>
  );
};

const renderItem = ({item, index}) => (
  <CarouselItem data={item} index={index} />
);

const Carousel = ({items}: {items: []}) => {
  return (
    <View
      style={{
        width: '100%',
        height: 200,
        marginTop: 10,
      }}>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          gap: 10,
        }}
        data={items}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

export default Carousel;
