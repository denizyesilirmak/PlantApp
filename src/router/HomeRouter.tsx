import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import TabBar from '../components/TabBar/TabBar';
import Diagnose from '../screens/Diagnose/Diagnose';
import Home from '../screens/Home/Home';
import MyGarden from '../screens/MyGarden/MyGarden';
import Profile from '../screens/Profile/Profile';
import ScanPlant from '../screens/ScanPlant/ScanPlant';

const HomeTabNavigator = createBottomTabNavigator();

export const HomeNavigator = () => {
  return (
    <HomeTabNavigator.Navigator
      tabBar={({navigation, descriptors, state}) => (
        <TabBar
          navigation={navigation}
          descriptors={descriptors}
          state={state}
        />
      )}>
      <HomeTabNavigator.Screen
        options={{
          title: 'Home',
        }}
        name="Home"
        component={Home}
      />
      <HomeTabNavigator.Screen
        options={{
          title: 'Diagnose',
        }}
        name="Diagnose"
        component={Diagnose}
      />
      <HomeTabNavigator.Screen
        options={{
          title: 'Scan',
        }}
        name="ScanPlant"
        component={ScanPlant}
      />
      <HomeTabNavigator.Screen
        options={{
          title: 'My Garden'
        }}
        name="MyGarden"
        component={MyGarden}
      />
      <HomeTabNavigator.Screen
        options={{
          title: 'Profile',
        }}
        name="Profile"
        component={Profile}
      />
    </HomeTabNavigator.Navigator>
  );
};
