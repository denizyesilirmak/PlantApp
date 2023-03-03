import {MMKV} from 'react-native-mmkv';

enum ConfigKeys {
  onboardingCompleted = 'onboardingCompleted',
}

const userConfigStorage = new MMKV({
  id: `user-config-storage`,
});

export const updateOnboardingStatus = (completed: boolean) => {
  userConfigStorage.set(ConfigKeys.onboardingCompleted, completed);
};

export const getOnboardingCompleted = () => {
  return userConfigStorage.getBoolean(ConfigKeys.onboardingCompleted);
};
