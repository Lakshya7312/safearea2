import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { createSwitchNavigator, createAppContainer } from 'react-navigation';

import SignUpLogin from './screens/SignUpLogin';
import MainScreen from './screens/MainScreen';

import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function App() {
  return (
    <SafeAreaProvider>
      <View style={styles.container}>
        <AppContainer />
      </View>
    </SafeAreaProvider>
  );
}

const Navigator = createSwitchNavigator({
  LoginScreen: { screen: SignUpLogin },
  MainScreen: { screen: MainScreen }
});

const AppContainer = createAppContainer(Navigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#364f6b',
  },
});