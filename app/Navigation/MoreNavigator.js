import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import UserProfileScreen from '../screens/UserProfileScreen';
import FollowersScreen from '../screens/FollowersScreen';
import MessagesScreen from '../screens/MessagesScreen';
import GivingHistoryScreen from '../screens/GivingHistoryScreen';
import HelpandSupportScreen from '../screens/HelpandSupportScreen';
import MoreScreen from '../screens/MoreScreen';
import colors from '../config/colors';
import Ionicons from 'react-native-vector-icons/Ionicons';
import HeaderText from '../components/HeaderText';

const Stack = createStackNavigator();
function MoreNavigator({navigation, route}) {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="MoreScreen"
        component={MoreScreen}
        options={{
          headerTitle: '',
          headerStyle: {backgroundColor: colors.primary},
        }}
      />
      <Stack.Screen
        name="UserProfile"
        component={UserProfileScreen}
        options={{
          headerTitle: () => <HeaderText title="User Profile" />,
          headerStyle: {backgroundColor: colors.primary},
          headerTitleAlign: 'center',
          headerTintColor: 'white',
        }}
      />

      <Stack.Screen
        name="Messages"
        component={MessagesScreen}
        options={{
          headerStyle: {backgroundColor: colors.primary},
          headerTitleAlign: 'center',
          headerTintColor: 'white',
          headerTitle: () => <HeaderText title="Messages" />,
          headerRight: () => <Ionicons name="add" size={28} color="white" />,
        }}
      />
      <Stack.Screen
        name="Followers"
        component={FollowersScreen}
        options={{
          headerStyle: {backgroundColor: colors.primary},
          headerTitleAlign: 'center',
          headerTintColor: 'white',
          headerTitle: '',
        }}
      />
      <Stack.Screen
        name="GivingHistory"
        component={GivingHistoryScreen}
        options={{
          headerStyle: {backgroundColor: colors.primary},
          headerTitleAlign: 'center',
          headerTintColor: 'white',
          headerTitle: () => <HeaderText title="Giving History" />,
        }}
      />
      <Stack.Screen
        name="HelpandSupport"
        component={HelpandSupportScreen}
        options={{
          headerStyle: {backgroundColor: colors.primary},
          headerTitleAlign: 'center',
          headerTintColor: 'white',
          headerTitle: () => <HeaderText title="Help & Support" />,
        }}
      />
    </Stack.Navigator>
  );
}

export default MoreNavigator;
