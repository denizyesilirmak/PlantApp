import {Image, ImageSourcePropType, ScrollView, Text, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {DetailedIcon, FastIcon, RichIcon} from '../../assets';
import {style} from './Carousel.style';

const PAYWALL_SLIDER_ITEMS = [
  {
    key: 'a0',
    title: 'Unlimited',
    icon: RichIcon,
    description: 'Plant Identify',
  },
  {
    key: 'a2',
    title: 'Super Fast',
    icon: FastIcon,
    description: 'Process in seconds',
  },
  {
    key: 'a3',
    title: 'Detailed',
    icon: DetailedIcon,
    description: 'Tons of information',
  },
];

type CarouselItemProps = {
  data: {
    title: string;
    icon: ImageSourcePropType;
    description: string;
  };
};

const CarouselItem = ({data}: CarouselItemProps) => {
  return (
    <LinearGradient
      colors={['#ffffff40', '#ffffff10']}
      style={style.carouselItemBackground}>
      <View style={style.iconWrapper}>
        <Image source={data.icon} style={style.icon} />
      </View>
      <Text style={style.boldText}>{data.title}</Text>
      <Text style={style.lightText}>{data.description}</Text>
    </LinearGradient>
  );
};

const Carousel = () => {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{
        gap: 12,
        paddingHorizontal: 20,
        alignItems: 'center'
      }}
      style={{
        flex: 1,
      }}>
      {PAYWALL_SLIDER_ITEMS.map((item, index) => {
        return <CarouselItem key={item.key} data={item} />;
      })}
    </ScrollView>
  );
};

export default Carousel;
