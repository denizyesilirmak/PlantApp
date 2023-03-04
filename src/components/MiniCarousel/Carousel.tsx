import { ScrollView } from "react-native";
import LinearGradient from "react-native-linear-gradient";

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
      <LinearGradient
        colors={['#ffffff20', '#ffffff10']}
        style={{
          width: 230,
          height: 160,
          borderRadius: 10,
        }}></LinearGradient>
      <LinearGradient
        colors={['#ffffff20', '#ffffff10']}
        style={{
          width: 230,
          height: 160,
          borderRadius: 10,
        }}></LinearGradient>
      <LinearGradient
        colors={['#ffffff20', '#ffffff10']}
        style={{
          width: 230,
          height: 160,
          borderRadius: 10,
        }}></LinearGradient>
    </ScrollView>
  );
};

export default Carousel