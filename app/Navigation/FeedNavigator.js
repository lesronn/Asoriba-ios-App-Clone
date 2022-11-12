import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import FeedProfileScreen from '../screens/FeedProfileScreen';
import FeedCommentScreen from '../screens/FeedCommentScreen';
import FeedScreen from '../screens/FeedScreen';
import colors from '../config/colors';
import PostFeedScreen from '../screens/PostFeedScreen';
import ViewFeedImageScreen from '../screens/ViewFeedImageScreen';
import HeaderText from '../components/HeaderText';

const Stack = createStackNavigator();
function FeedNavigator(props) {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Feeds"
        component={FeedScreen}
        options={{
          headerTitle: () => <HeaderText title="Church Name" />,
          headerStyle: {
            backgroundColor: colors.primary,
          },

          headerTitleAlign: 'center',
        }}
      />
      <Stack.Screen
        name="PostFeed"
        component={PostFeedScreen}
        options={{
          headerTitle: '',
          headerStyle: {
            backgroundColor: colors.primary,
          },
          headerTintColor: 'white',
        }}
      />

      <Stack.Screen
        name="FeedProfile"
        component={FeedProfileScreen}
        options={{
          headerTitle: () => <HeaderText title="Feed Profile" />,
          headerStyle: {
            backgroundColor: colors.primary,
          },

          headerTitleAlign: 'center',
        }}
      />

      <Stack.Screen
        name="FeedComment"
        component={FeedCommentScreen}
        options={{
          headerTitle: () => <HeaderText title="Feed Comment" />,
          headerStyle: {
            backgroundColor: colors.primary,
          },
          headerTintColor: 'white',
          headerTitleAlign: 'center',
        }}
      />
      <Stack.Screen
        name="ViewFeedImage"
        component={ViewFeedImageScreen}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}

export default FeedNavigator;
