import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  StatusBar,
  View,
  Platform,
} from 'react-native';
import colors from '../config/colors';

function Screen({children}) {
  return <SafeAreaView style={styles.container}>{children}</SafeAreaView>;
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    flex: 1,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
});

export default Screen;
