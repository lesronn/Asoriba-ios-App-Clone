import React from 'react';
import {Text, View, StyleSheet, TextInput} from 'react-native';
import {color} from 'react-native-reanimated';

import colors from '../config/colors';

function PostFeedScreen(props) {
  return (
    <View style={styles.container}>
      <TextInput style={styles.textInput} multiline={true} numberOfLines={6} />

      <View style={styles.buttons}>
        <View style={styles.outlineButton}>
          <Text style={styles.btnText}>Attach...</Text>
        </View>
        <View style={styles.outlineButton2}>
          <Text style={styles.btnText2}>Send</Text>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  textInput: {
    borderColor: 'grey',
    borderWidth: 2,
    borderRadius: 5,
    justifyContent: 'flex-start',
    textAlignVertical: 'top',
    paddingHorizontal: 10,
    fontSize: 18,
    color: colors.black,
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  outlineButton: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderColor: 'grey',
    borderWidth: 1.5,
    justifyContent: 'center',
    borderRadius: 5,
  },
  outlineButton2: {
    paddingHorizontal: 20,
    paddingVertical: 5,
    borderRadius: 5,
    borderColor: colors.primary,
    borderWidth: 2,
    justifyContent: 'center',
  },
  btnText: {
    fontSize: 17,
    color: 'grey',
  },
  btnText2: {
    fontSize: 17,
    color: colors.primary,
  },
});
export default PostFeedScreen;
