import {createStackNavigator} from '@react-navigation/stack';
import Home from '../screens/Home/Home';
import Onboarding from '../screens/Onboarding/Onboarding';
import {getOnboardingCompleted} from '../storage';
import {HomeNavigator} from './HomeRouter';

type RootStackParamList = {
  HomeStack: undefined;
  Onboarding: undefined;
};

const RootStackNavigator = createStackNavigator<RootStackParamList>();

export const RootNavigator = () => {
  const skipOnboarding = getOnboardingCompleted();
  return (
    <RootStackNavigator.Navigator>
      {!skipOnboarding && (
        <RootStackNavigator.Screen name="Onboarding" component={Onboarding} />
      )}
      <RootStackNavigator.Screen
        options={{headerShown: false}}
        name="HomeStack"
        component={HomeNavigator}
      />
    </RootStackNavigator.Navigator>
  );
};
