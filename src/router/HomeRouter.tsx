import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../screens/Home/Home';

const HomeTabNavigator = createBottomTabNavigator();

export const HomeNavigator = () => {
  return (
    <HomeTabNavigator.Navigator>
      <HomeTabNavigator.Screen name="Home" component={Home} />
    </HomeTabNavigator.Navigator>
  );
};
