import React from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';
import colors from '../config/colors';
import Ionicons from 'react-native-vector-icons/Ionicons';
function UserProfileScreen(props) {
  return (
    <View style={styles.container}>
      <View style={styles.profilebg}>
        <View style={styles.profilecenter}>
          <Image source={require('../assets/img.jpg')} style={styles.image} />
          <Text style={styles.name}>Victor Acheampong</Text>
          <Text style={styles.username}>@Lesron</Text>
        </View>
        <View style={styles.profilefooter}>
          <View style={styles.btn1}>
            <Text style={styles.btnText}>My Message</Text>
          </View>
          <View style={styles.btn1}>
            <Text style={styles.btnText}>Edit Profile</Text>
          </View>
        </View>
      </View>
      <View style={styles.contentcontainer}>
        <Ionicons name="alert-circle-outline" size={40} color="grey" />
        <Text style={styles.mainText}>No Content Available</Text>
        <Text style={styles.subText}>
          Tab this message to refresh, or check your internet connection
        </Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eee',
  },
  profilebg: {
    height: '45%',
    backgroundColor: '#4c004b',
  },
  profilecenter: {
    flex: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    height: 90,
    width: 90,
    borderRadius: 100,
    marginBottom: 5,
  },
  btn1: {
    flex: 1,
    backgroundColor: colors.white,
    margin: 7,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnText: {
    color: colors.primary,
    fontSize: 16,
  },

  name: {
    fontSize: 20,
    color: colors.white,
  },
  username: {
    color: colors.white,
    fontSize: 15,
    paddingTop: 5,
  },
  profilefooter: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  contentcontainer: {
    marginTop: '10%',
    alignItems: 'center',
    paddingHorizontal: 20,
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
export default UserProfileScreen;
