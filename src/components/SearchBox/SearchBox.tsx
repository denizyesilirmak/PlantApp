import {Image, StyleSheet, Text, TextInput, View} from 'react-native';
import Animated, {FadeInUp} from 'react-native-reanimated';
import {DeleteIcon, RichIcon, SearchIcon} from '../../assets';

const SearchBox = () => {
  return (
    <Animated.View
      entering={FadeInUp.duration(600).delay(200)}
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        paddingHorizontal: 20,
      }}>
      <View
        style={{
          height: 50,
          width: 50,
          backgroundColor: '#ffffffda',
          borderColor: '#00000040',
          borderWidth: 1,
          borderRightWidth: 0,
          justifyContent: 'center',
          alignItems: 'center',
          borderTopLeftRadius: 10,
          borderBottomLeftRadius: 10,
        }}>
        <Image
          source={SearchIcon}
          style={{width: 24, height: 24, tintColor: '#00000090'}}
        />
      </View>
      <TextInput
        placeholder="Search for plants"
        style={{
          backgroundColor: '#ffffffda',
          height: 50,
          flex: 1,
          paddingLeft: 5,
          fontFamily: 'Rubik-Regular',
          borderColor: '#00000040',
          borderTopWidth: 1,
          borderBottomWidth: 1,
          fontSize: 16
        }}></TextInput>
      <View
        style={{
          height: 50,
          width: 50,
          backgroundColor: '#ffffffda',
          borderColor: '#00000040',
          borderWidth: 1,
          borderLeftWidth: 0,
          justifyContent: 'center',
          alignItems: 'center',
          borderTopRightRadius: 10,
          borderBottomRightRadius: 10,
        }}>
        <Image
          source={DeleteIcon}
          style={{width: 20, height: 20, tintColor: '#00000090'}}
        />
      </View>
    </Animated.View>
  );
};

export default SearchBox;
