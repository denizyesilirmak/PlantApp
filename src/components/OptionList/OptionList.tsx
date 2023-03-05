import {useState} from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import Animated, { FadeInLeft, FadeInRight } from 'react-native-reanimated';
import OptionCheck from './OptionCheck';
import {styles} from './OptionList.style';

const OPTIONLIST = [
  {
    id: 'a1',
    label: '1 Month',
    desc: '2.99$/month, autorenewable',
  },
  {
    id: 'a2',
    label: '1 Year',
    desc: 'First 3 days free, then $529,99/year',
  },
];

const OptionList = () => {
  const [selectedOptionIndex, setSelectedOptionIndex] = useState(0);

  return (
    <View style={styles.container}>
      {OPTIONLIST.map((option, index) => {
        return (
          <Pressable
            key={option.id}
            onPress={() => setSelectedOptionIndex(index)}
            style={{
              ...styles.optionButton,
              borderColor:
                selectedOptionIndex === index ? '#28AF6Eff' : '#ffffff60',
            }}>
            <OptionCheck checked={selectedOptionIndex === index} />
            <Animated.View  entering={FadeInRight.duration(300).delay(100 + index*100)}>
              <Text style={styles.optionLabel}>{option.label}</Text>
              <Text style={styles.optionDesc}>{option.desc}</Text>
            </Animated.View>
          </Pressable>
        );
      })}
    </View>
  );
};

export default OptionList;
