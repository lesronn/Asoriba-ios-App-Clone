import React from 'react';
import {
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  Pressable,
} from 'react-native';
import Screen from '../components/Screen';
import colors from '../config/colors';
import Ionicons from 'react-native-vector-icons/Ionicons';

function ViewFeedImageScreen({route, navigation: {goBack}}) {
  const feed = route.params;
  return (
    <Screen>
      <View style={styles.container}>
        <View style={styles.closeIcon}>
          <TouchableOpacity onPress={() => goBack()}>
            <Ionicons name="close" color={colors.white} size={35} />
          </TouchableOpacity>
        </View>

        <Image
          resizeMode="contain"
          source={feed.feedImage}
          style={styles.feedImage}
        />
      </View>
    </Screen>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
  },
  feedImage: {
    height: '100%',
    width: '100%',
  },
  closeIcon: {
    position: 'absolute',
    top: 20,
    right: 20,

    zIndex: 1,
  },
});
export default ViewFeedImageScreen;
