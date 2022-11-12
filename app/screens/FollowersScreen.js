import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
function FollowersScreen(props) {
  return (
    <View style={styles.container}>
      <View style={styles.contentcontainer}>
        <Ionicons name="search" size={40} color="grey" />
        <Text style={styles.mainText}>No Results Found</Text>
        <Text style={styles.subText}>Enter another search term</Text>
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
export default FollowersScreen;
