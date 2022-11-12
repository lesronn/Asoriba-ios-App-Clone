import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
function HelpandSupportScreen(props) {
  return (
    <View style={styles.container}>
      <View style={styles.helpSection}>
        <Text style={styles.HeaderText}>Help & Support</Text>
        <Text style={styles.subText}>Email Help Center</Text>
        <Text style={styles.subText}>Call Asoreba Online Help</Text>

        <Text style={styles.subText}>Call with Local Network</Text>

        <Text style={styles.subText}>Visit our Help Desk</Text>
      </View>

      <View style={styles.about}>
        <Text style={styles.HeaderText}>About Asoriba</Text>
        <Text style={styles.subText}>Visit Asoriba.com</Text>
        <Text style={styles.subText}>Privacy Policy</Text>
      </View>

      <View style={styles.aboutbottom}>
        <Text style={styles.HeaderText}>About This App</Text>
        <Text style={styles.subText}>version 2.3</Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
  },
  helpSection: {
    // paddingTop: 20,
  },
  HeaderText: {
    fontSize: 22,
    paddingVertical: 10,
    color: 'grey',
  },
  subText: {
    fontSize: 16,
    paddingHorizontal: 20,
    paddingVertical: 10,
    color: 'grey',
  },
});
export default HelpandSupportScreen;
