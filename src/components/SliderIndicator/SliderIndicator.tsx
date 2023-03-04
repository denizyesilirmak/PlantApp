import {Text, View} from 'react-native';

const SliderIndicator = ({list}) => {
  return (
    <View
      style={{
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        height: 50,
        marginBottom: 50,
        gap: 8
      }}>
      {list.map((item, index) => {
        return (
          <View
            key={index}
            style={{
              width: 8,
              height: 8,
              borderRadius: 4,
              backgroundColor: '#cccccc',
            }}></View>
        );
      })}
    </View>
  );
};

export default SliderIndicator;
