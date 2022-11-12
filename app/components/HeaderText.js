import React from 'react';
import {Text, StyleSheet} from 'react-native';
import colors from '../config/colors';
function HeaderText({title}) {
  return <Text style={styles.text}>{title}</Text>;
}
const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    color: colors.white,
  },
});
export default HeaderText;
