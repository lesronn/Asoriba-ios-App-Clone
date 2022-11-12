import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {getFocusedRouteNameFromRoute} from '@react-navigation/native';
import ChurchScreen from '../screens/ChurchScreen';
import GivingScreen from '../screens/GivingScreen';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import FeedNavigator from './FeedNavigator';
import MoreNavigator from './MoreNavigator';
import colors from '../config/colors';
import SearchNavigator from './SearchNavigator';
import HeaderText from '../components/HeaderText';

const Tab = createBottomTabNavigator();
const AppNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarHideOnKeyboard: true,
      }}>
      <Tab.Screen
        name="Feed"
        component={FeedNavigator}
        options={({route}) => ({
          tabBarIcon: ({size, color}) => (
            <MaterialCommunityIcons
              name="newspaper-variant-outline"
              size={size}
              color={color}
            />
          ),
          tabBarStyle: {display: getRoutName(route)},
          tabBarLabelStyle: {fontSize: 13},
        })}
      />
      <Tab.Screen
        name="Search"
        component={SearchNavigator}
        options={({route}) => ({
          headerShown: false,

          tabBarIcon: ({size, color}) => (
            <Ionicons name="search" size={size} color={color} />
          ),
          tabBarStyle: {display: getRoutName(route)},
          tabBarLabelStyle: {fontSize: 13},
        })}
      />
      <Tab.Screen
        name="Church"
        component={ChurchScreen}
        options={{
          headerShown: true,
          headerTitleAlign: 'center',
          headerStyle: {backgroundColor: colors.primary},
          headerTintColor: colors.white,
          headerTitle: () => <HeaderText title="Church" />,
          tabBarIcon: ({size, color}) => (
            <FontAwesome5 name="church" size={size} color={color} />
          ),
          tabBarLabelStyle: {fontSize: 13},
        }}
      />
      <Tab.Screen
        name="Giving"
        component={GivingScreen}
        options={{
          headerShown: true,
          headerTitle: () => <HeaderText title="Giving" />,
          headerTitleAlign: 'center',
          headerStyle: {backgroundColor: colors.primary},
          headerTintColor: colors.white,
          tabBarIcon: ({size, color}) => (
            <Ionicons name="heart-circle-outline" size={size} color={color} />
          ),
          tabBarLabelStyle: {fontSize: 13},
        }}
      />
      <Tab.Screen
        name="More"
        component={MoreNavigator}
        options={({route}) => ({
          tabBarIcon: ({size, color}) => (
            <FontAwesome5 name="ellipsis-h" size={size} color={color} />
          ),
          tabBarStyle: {display: getRoutName(route)},
          tabBarLabelStyle: {fontSize: 13},
        })}
      />
    </Tab.Navigator>
  );
};
const getRoutName = route => {
  const routeName = getFocusedRouteNameFromRoute(route);
  //   console.log(routeName);
  if (
    routeName?.includes('FeedProfile') ||
    routeName?.includes('FeedComment') ||
    routeName?.includes('PostFeed') ||
    routeName?.includes('SearchProfile') ||
    routeName?.includes('ViewFeedImage') ||
    routeName?.includes('UserProfile') ||
    routeName?.includes('Messages') ||
    routeName?.includes('Followers') ||
    routeName?.includes('GivingHistory') ||
    routeName?.includes('HelpandSupport')
  ) {
    return 'none';
  }
};
export default AppNavigator;
