import {Image, ImageSourcePropType} from 'react-native';

type TabBarIconProps = {
  icon: ImageSourcePropType;
  active: boolean;
  activeColor: string
  passiveColor: string
};

const TabBarIcon = ({icon, active, activeColor, passiveColor}: TabBarIconProps) => {
  return (
    <Image
      source={icon}
      style={{
        width: 26,
        height: 26,
        tintColor: active ? activeColor : passiveColor,
      }}
    />
  );
};

export default TabBarIcon;
