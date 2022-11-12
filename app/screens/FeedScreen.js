import React, {useRef, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableHighlight,
  Image,
  TouchableWithoutFeedback,
  FlatList,
  TouchableOpacity,
} from 'react-native';

import colors from '../config/colors';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import ActionSheet, {ActionSheetRef} from 'react-native-actions-sheet';
import feeds from '../config/Data';
function FeedScreen({navigation}) {
  const [liked, setLiked] = useState(false);
  const action = useRef(null);
  const openActionsheet = () => {
    action.current?.show();
  };
  const handleClose = () => {
    action.current?.hide();
  };

  return (
    <View style={styles.container}>
      <ActionSheet
        ref={action}
        elevation={0}
        headerAlwaysVisible={false}
        containerStyle={{paddingHorizontal: 10, backgroundColor: '#00000000'}}>
        <View style={{height: '35%'}}>
          <TouchableHighlight
            style={{
              width: '100%',
              backgroundColor: colors.actionSheetbg,
              height: 60,
              justifyContent: 'center',
              alignItems: 'center',
              borderTopLeftRadius: 10,
              borderTopRightRadius: 10,
              borderBottomWidth: 1.5,
              borderBottomColor: colors.lightgrey,
            }}
            onPress={() => console.log('clicked me')}
            underlayColor={colors.lightgrey}>
            <Text style={{color: colors.danger, fontSize: 20}}>Hide</Text>
          </TouchableHighlight>
          <TouchableHighlight
            style={{
              width: '100%',
              backgroundColor: colors.actionSheetbg,
              height: 60,
              justifyContent: 'center',
              alignItems: 'center',
              borderBottomWidth: 1,
              borderBottomColor: colors.lightgrey,
            }}
            onPress={() => console.log('clicked me')}
            underlayColor={colors.lightgrey}>
            <Text style={{color: colors.danger, fontSize: 20}}>Report</Text>
          </TouchableHighlight>
          <TouchableHighlight
            style={{
              width: '100%',
              backgroundColor: colors.actionSheetbg,
              height: 60,
              justifyContent: 'center',
              alignItems: 'center',
              borderBottomRightRadius: 10,
              borderBottomLeftRadius: 10,
            }}
            onPress={() => console.log('clicked me')}
            underlayColor={colors.lightgrey}>
            <Text style={{color: colors.primary, fontSize: 20}}>Save</Text>
          </TouchableHighlight>
          <TouchableHighlight
            style={{
              width: '100%',
              backgroundColor: colors.white,
              height: 60,
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 10,
              marginVertical: 10,
            }}
            onPress={handleClose}
            underlayColor={colors.lightgrey}>
            <Text style={{color: colors.primary, fontSize: 20}}>Close</Text>
          </TouchableHighlight>
        </View>
      </ActionSheet>

      <TouchableHighlight
        onPress={() => navigation.navigate('PostFeed')}
        underlayColor={colors.light}>
        <View style={styles.postfeed}>
          <View style={styles.image}>
            <Ionicons name="image" color={colors.white} size={20} />
          </View>
          <Text style={styles.postfeedText}>
            Share & touch a heart from here ...
          </Text>
        </View>
      </TouchableHighlight>

      <FlatList
        data={feeds}
        keyExtractor={feed => feed.id.toString()}
        renderItem={({item}) => (
          <View style={styles.feedContainer}>
            <TouchableWithoutFeedback
              onPress={() => navigation.navigate('FeedProfile', item)}>
              <View style={styles.feedtopcontainer}>
                <Image style={styles.feedImage} source={item.profileImage} />
                <View style={styles.feedtitlecontainer}>
                  <View style={styles.feedusertext}>
                    <Text style={styles.feedtitle}>{item.username}</Text>
                    <Text style={{color: colors.medium, fontSize: 13}}>
                      {item.postedTime}
                    </Text>
                  </View>

                  <View style={styles.checkmark}>
                    <Ionicons
                      name="checkmark-circle"
                      size={20}
                      color={colors.primary}
                    />
                  </View>
                </View>
                <TouchableWithoutFeedback onPress={openActionsheet}>
                  <Ionicons
                    name="ellipsis-vertical"
                    size={20}
                    style={styles.elipsicon}
                    color="grey"
                  />
                </TouchableWithoutFeedback>
              </View>
            </TouchableWithoutFeedback>

            <View style={styles.feedContentContainer}>
              <Text style={styles.feedContenttitle}>{item.messageTitle}</Text>

              <Text style={styles.feedContentMessage}>{item.message}</Text>
              <TouchableWithoutFeedback
                onPress={() => navigation.navigate('ViewFeedImage', item)}>
                <Image
                  source={item.feedImage}
                  style={styles.feedContentImage}
                />
              </TouchableWithoutFeedback>

              <View style={styles.activities}>
                <View style={styles.activity}>
                  <FontAwesome5
                    name="praying-hands"
                    size={15}
                    color={colors.lightgrey}
                  />
                  <Text style={styles.activitynumber}>{item.likes}</Text>
                </View>

                <View style={styles.activity}>
                  <FontAwesome5
                    name="comments"
                    size={15}
                    color={colors.lightgrey}
                  />
                  <Text style={styles.activitynumber}>0</Text>
                </View>
                <View style={styles.activity}>
                  <FontAwesome5
                    name="share-alt-square"
                    size={15}
                    color={colors.lightgrey}
                  />
                  <Text style={styles.activitynumber}>2</Text>
                </View>
                <View style={styles.activity}>
                  <FontAwesome name="eye" size={15} color={colors.lightgrey} />
                  <Text style={styles.activitynumber}>30</Text>
                </View>
              </View>
              <View style={styles.feedbottomContent}>
                <View style={styles.bottomContent}>
                  <FontAwesome5
                    name="praying-hands"
                    size={25}
                    color={liked ? colors.black : colors.lightgrey}
                  />
                  <Text style={styles.bottomContentName}>Amen</Text>
                </View>
                <TouchableOpacity
                  onPress={() => navigation.navigate('FeedComment')}>
                  <View style={styles.bottomContent}>
                    <FontAwesome5
                      name="comments"
                      size={25}
                      color={colors.lightgrey}
                    />
                    <Text style={styles.bottomContentName}>Comment</Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity>
                  <View style={styles.bottomContent}>
                    <FontAwesome5
                      name="share-square"
                      size={25}
                      color={colors.lightgrey}
                    />
                    <Text style={styles.bottomContentName}>Share</Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        )}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eee',
  },
  postfeed: {
    height: 80,
    backgroundColor: colors.white,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  feedContainer: {
    backgroundColor: 'white',
    marginVertical: 3,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  feedtopcontainer: {
    flexDirection: 'row',
  },
  feedtitlecontainer: {
    flexDirection: 'row',
    flex: 1,
    paddingHorizontal: 20,
    alignItems: 'flex-start',
  },
  feedtitle: {
    fontSize: 17,
    fontWeight: 'bold',
    color: colors.black,
  },
  checkmark: {
    marginHorizontal: 5,
  },

  image: {
    height: 55,
    width: 55,
    borderRadius: 100,
    backgroundColor: colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },

  feedImage: {
    height: 45,
    width: 45,
    borderRadius: 100,
  },

  postfeedText: {
    marginHorizontal: 20,
    fontSize: 18,
    color: 'grey',
  },
  feedContenttitle: {
    fontSize: 18,
    paddingVertical: 10,
    fontWeight: 'bold',
    color: colors.black,
  },
  feedContentMessage: {
    fontSize: 16,
    textAlign: 'justify',
    color: colors.black,
  },
  feedContentImage: {
    height: 200,
    width: '100%',
    marginTop: 15,
    backfaceVisibility: 'visible',
  },
  activities: {
    flexDirection: 'row',
    paddingVertical: 10,
  },
  activity: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  activitynumber: {
    fontSize: 13,
    paddingHorizontal: 7,
    color: colors.lightgrey,
  },
  feedbottomContent: {
    flex: 1,
    justifyContent: 'space-evenly',
    flexDirection: 'row',
    paddingVertical: 10,
  },
  bottomContent: {
    flexDirection: 'row',
  },
  bottomContentName: {
    paddingHorizontal: 10,
    alignSelf: 'flex-end',
    color: colors.lightgrey,
  },
});

export default FeedScreen;
