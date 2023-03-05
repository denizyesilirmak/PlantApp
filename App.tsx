import {NavigationContainer} from '@react-navigation/native';
import {Alert, DevSettings} from 'react-native';
import {RootNavigator} from './src/router/RootRouter';
import {updateOnboardingStatus} from './src/storage';
import 'react-native-gesture-handler';
import {Provider} from 'react-redux';
import { store } from './src/store';

DevSettings.addMenuItem('Reset Onboarding Status', () => {
  updateOnboardingStatus(false);
  Alert.alert('Onboarding status reset');
});

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <RootNavigator />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
