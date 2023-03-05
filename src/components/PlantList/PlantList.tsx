import {Pressable, StyleSheet, Text, View} from 'react-native';
import FastImage from 'react-native-fast-image';
import Animated, {FadeIn} from 'react-native-reanimated';
import {MOCKPLANTLIST} from '../../mock/mock';
import { styles } from './PlantList.style';

const PlantList = () => {
  return (
    <View
      style={styles.container}>
      {MOCKPLANTLIST.data.map((category, index) => {
        return (
          <Animated.View
            entering={FadeIn.duration(200).delay(100 + index * 40)}
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
