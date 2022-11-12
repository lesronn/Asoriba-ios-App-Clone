import React, {useEffect, useMemo, useState} from 'react';
import {ActivityIndicator, Button, StatusBar, Text, View} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';

import AuthNavigator from './app/Navigation/AuthNavigator';
import navigationTheme from './app/Navigation/navigationTheme';
import AppNavigator from './app/Navigation/AppNavigator';
import colors from './app/config/colors';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import WelcomeScreen from './app/screens/WelcomeScreen';
import SplashScreen from 'react-native-splash-screen';
import {AuthContext} from './app/components/Context';
function App(props) {
  const [isLoading, setIsLoading] = useState(true);
  const [userToken, setUserToken] = useState(null);

  const authContent = useMemo(
    () => ({
      signIn: () => {
        setIsLoading(true);
        setUserToken('signedIn');
        setTimeout(() => {
          setIsLoading(false);
        }, 1000);
      },
      signOut: () => {
        setIsLoading(true);
        setUserToken(null);
        setTimeout(() => {
          setIsLoading(false);
        }, 1000);
      },
    }),
    [],
  );
  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hide();
    }, 2000);
    setIsLoading(false);
  }, []);

  if (isLoading) {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: colors.white,
        }}>
        <ActivityIndicator size="large" color={colors.primary} />
      </View>
    );
  }
  return (
    <>
      <StatusBar
        barStyle="light-content"
        backgroundColor={colors.primary}
        translucent={true}
      />
      <SafeAreaProvider>
        <AuthContext.Provider value={authContent}>
          <NavigationContainer theme={navigationTheme}>
            {userToken !== null ? <AppNavigator /> : <WelcomeScreen />}
          </NavigationContainer>
        </AuthContext.Provider>
      </SafeAreaProvider>
    </>
  );
}

export default App;
