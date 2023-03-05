import {Pressable, StyleSheet, Text, View} from 'react-native';
import FastImage from 'react-native-fast-image';
import Animated, {FadeIn, FadeInDown} from 'react-native-reanimated';
import { ICategory } from '../../../types';
import { styles } from './PlantList.style';

type PlantListPropType = {items: ICategory[]}

const PlantList = ({items}: PlantListPropType) => {
  return (
    <View
      style={styles.container}>
      {items.map((category, index) => {
        return (
          <Animated.View
            entering={FadeInDown.duration(400).delay(100 + index * 100)}
            key={index}
            style={styles.itemWrapper}>
            <Pressable
              style={styles.itemButton}>
              <Text
                style={styles.title}>
                {category.title}
              </Text>
              <FastImage
                resizeMode="contain"
                source={{uri: category.image.url}}
                style={[
                  StyleSheet.absoluteFill,
                  styles.itemImage,
                ]}
              />
            </Pressable>
          </Animated.View>
        );
      })}
    </View>
  );
};

export default PlantList;
