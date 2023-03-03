import {useRef} from 'react';
import {Button, Text, useWindowDimensions, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {updateOnboardingStatus} from '../../storage';
import Carousel from 'react-native-reanimated-carousel';

const Onboarding = () => {
  const {width} = useWindowDimensions();
  const scrollViewRef = useRef<ScrollView>(null);

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'lightpink'
      }}>
            <Carousel
                loop
                width={width}
                height={width / 2}
                autoPlay={true}
                data={[...new Array(6).keys()]}
                scrollAnimationDuration={1000}
                onSnapToItem={(index) => console.log('current index:', index)}
                renderItem={({ index }) => (
                    <View
                        style={{
                            flex: 1,
                            borderWidth: 1,
                            justifyContent: 'center',
                        }}
                    >
                        <Text style={{ textAlign: 'center', fontSize: 30 }}>
                            {index}
                        </Text>
                    </View>
                )}
            />
    </View>
  );
};

export default Onboarding;
