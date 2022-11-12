import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import colors from '../config/colors';
import SearchScreen from '../screens/SearchScreen';
import SearchProfileScreen from '../screens/SearchProfileScreen';
import HeaderText from '../components/HeaderText';

const Stack = createStackNavigator();

function SearchNavigator(props) {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Searches"
        component={SearchScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="SearchProfile"
        component={SearchProfileScreen}
        options={{
          headerStyle: {backgroundColor: colors.primary},
          headerTintColor: colors.white,
          headerTitleAlign: 'center',
          headerTitle: () => <HeaderText title="User Profile" />,
        }}
      />
    </Stack.Navigator>
  );
}

export default SearchNavigator;
