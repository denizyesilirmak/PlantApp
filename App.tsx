import {NavigationContainer} from '@react-navigation/native';
import {Alert, DevSettings} from 'react-native';
import {RootNavigator} from './src/router/RootRouter';
import {getOnboardingCompleted, updateOnboardingStatus} from './src/storage';
import 'react-native-gesture-handler';

DevSettings.addMenuItem('Reset Onboarding Status', () => {
  updateOnboardingStatus(false);
  Alert.alert(getOnboardingCompleted() ? 'true' : 'false');
});

const App = () => {
  return (
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
  );
};

export default App;
