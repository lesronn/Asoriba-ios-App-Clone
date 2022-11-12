import React from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';
import colors from '../config/colors';
function FeedCommentScreen(props) {
  return (
    <View style={styles.container}>
      <View style={styles.commentContainer}>
        <Text style={styles.NocommentTitle}>No Comments Available</Text>
        <Text style={styles.NocommentSubTitle}>
          No one has commented on this post yet
        </Text>
      </View>
      <View style={styles.commentBox}>
        <TextInput
          placeholder="Commment here..."
          placeholderTextColor={colors.lightgrey}
          style={styles.textInput}
        />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.light,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  commentContainer: {
    flex: 1,
    alignItems: 'center',
    paddingTop: '20%',
  },
  NocommentTitle: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'grey',
  },
  NocommentSubTitle: {
    fontSize: 17,
    paddingVertical: 10,
    color: 'grey',
  },
  commentBox: {
    height: 70,
    backgroundColor: colors.white,
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  textInput: {
    width: '100%',
    borderWidth: 1,
    paddingLeft: 15,
    borderColor: colors.lightgrey,
    borderRadius: 7,
    height: '100%',
    color: colors.black,
  },
});
export default FeedCommentScreen;
