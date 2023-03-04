import {
  BottomTabDescriptorMap,
  BottomTabNavigationEventMap,
} from '@react-navigation/bottom-tabs/lib/typescript/src/types';
import {
  NavigationHelpers,
  ParamListBase,
  TabNavigationState,
} from '@react-navigation/native';
import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {
  DiagnoseIcon,
  HomeIcon,
  MyGardenIcon,
  ProfileIcon,
  RichIcon,
  ScanIcon,
} from '../../assets';
import TabBarIcon from './TabBarIcon';

type TabBarProps = {
  state: TabNavigationState<ParamListBase>;
  descriptors: BottomTabDescriptorMap;
  navigation: NavigationHelpers<ParamListBase, BottomTabNavigationEventMap>;
};

const TabBarIcons = {
  Home: {
    icon: HomeIcon,
  },
  Diagnose: {
    icon: DiagnoseIcon,
  },
  ScanPlant: {
    icon: ScanIcon,
  },
  MyGarden: {
    icon: MyGardenIcon,
  },
  Profile: {
    icon: ProfileIcon,
  },
};

const TabBar = ({state, descriptors, navigation}: TabBarProps) => {
  const insets = useSafeAreaInsets();

  return (
    <View
      style={{
        backgroundColor: '#ffffffda',
        height: 84,
        paddingBottom: insets.bottom,
        borderTopWidth: StyleSheet.hairlineWidth,
        borderTopColor: '#00000050',
        flexDirection: 'row',
        justifyContent: 'space-between',
      }}>
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate({name: route.name, merge: true});
          }
        };

        if (route.name === 'ScanPlant') {
          return (
            <Pressable
              onPress={onPress}
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: '#28AF6Eff',
                width: 72,
                height: 72,
                borderRadius: 34,
                transform: [{translateY: -30}],
                borderColor: '#2CCC80',
                borderWidth: 6,
                marginHorizontal: 6,
              }}
              key={route.key}>
              <TabBarIcon
                icon={TabBarIcons[route.name].icon}
                active={state.index === index}
                activeColor="#ffffff"
                passiveColor="#ffffff80"
              />
              <Text
                style={{
                  fontSize: 12,
                  fontFamily: 'Rubik-Regular',
                  color: state.index === index ? '#ffffff' : '#ffffff80',
                }}>
                {label}
              </Text>
            </Pressable>
          );
        }

        return (
          <Pressable
            onPress={onPress}
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
            }}
            key={route.key}>
            <TabBarIcon
              icon={TabBarIcons[route.name].icon}
              active={state.index === index}
              activeColor="#28AF6E"
              passiveColor="#00000060"
            />
            <Text
              style={{
                fontSize: 12,
                fontFamily: 'Rubik-Regular',
                color: state.index === index ? '#28AF6E' : '#999999',
              }}>
              {label}
            </Text>
          </Pressable>
        );
      })}
    </View>
  );
};

export default TabBar;
