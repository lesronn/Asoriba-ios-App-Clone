import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
function GivingHistoryScreen(props) {
  return (
    <View style={styles.container}>
      <View style={styles.contentcontainer}>
        <Ionicons name="heart-circle-outline" size={50} color="grey" />
        <Text style={styles.mainText}>No giving hsitory found</Text>
        <Text style={styles.subText}>You have not made any donations. Yet</Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#eee',
    flex: 1,
    paddingHorizontal: 40,
  },
  contentcontainer: {
    marginTop: '20%',
    alignItems: 'center',
  },
  mainText: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'grey',
    paddingVertical: 7,
  },
  subText: {
    fontSize: 16,
    textAlign: 'center',
    color: 'grey',
  },
});
export default GivingHistoryScreen;
