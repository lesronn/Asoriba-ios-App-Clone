import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import colors from '../config/colors';
function MessagesScreen(props) {
  return (
    <View style={styles.container}>
      <View style={styles.TopMargin}></View>
      <View style={styles.card}>
        <Image source={require('../assets/img.jpg')} style={styles.image} />
        <View style={styles.textContainer}>
          <Text style={styles.name}>Bible Discussion</Text>
          <Text style={styles.about}>
            Conversation about the Holy Bible, Gods own word for our lives
          </Text>
        </View>
      </View>

      <View style={styles.card}>
        <Image
          source={require('../assets/learning.jpg')}
          style={styles.image}
        />
        <View style={styles.textContainer}>
          <Text style={styles.name}>Welcome to Asoriba</Text>
          <Text style={styles.about}>
            Introduce yourself to the christian community on Asoriba
          </Text>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#eee',
    flex: 1,
    paddingHorizontal: 10,
  },
  TopMargin: {
    marginTop: 10,
  },
  card: {
    backgroundColor: 'white',
    height: 100,
    borderRadius: 10,
    marginBottom: 10,
    alignItems: 'center',
    paddingHorizontal: 20,
    flexDirection: 'row',
  },
  image: {
    height: 50,
    width: 50,
    borderRadius: 100,
    backgroundColor: colors.primary,
  },
  textContainer: {
    paddingHorizontal: 20,
  },
  name: {fontSize: 18, color: colors.black},
  about: {fontSize: 14, color: colors.medium, paddingRight: 20},
});
export default MessagesScreen;
