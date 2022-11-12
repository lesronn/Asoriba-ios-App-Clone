import React from 'react';

import {View, Text, StyleSheet} from 'react-native';
import Screen from '../components/Screen';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import colors from '../config/colors';

function Joinchurchcontent(props) {
  return (
    <View style={styles.container}>
      <View style={styles.contentcontainer}>
        <FontAwesome5 name="church" size={40} color="grey" />
        <Text style={styles.mainText}>Join Your Church</Text>
        <Text style={styles.subText}>
          To get the best out of Asoriba,tap here to find and join your church
        </Text>
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

export default Joinchurchcontent;
