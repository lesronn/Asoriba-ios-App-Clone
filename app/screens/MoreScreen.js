import React, {useContext, useRef} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableWithoutFeedback,
  TouchableHighlight,
} from 'react-native';
import {AuthContext} from '../components/Context';
import ActionSheet, {ActionSheetRef} from 'react-native-actions-sheet';
import colors from '../config/colors';

function MoreScreen({navigation}) {
  const {signOut} = useContext(AuthContext);
  const actionSheetRef = useRef(null);
  const action = useRef(null);
  const openActionsheet = () => {
    actionSheetRef.current?.show();
  };
  const handleClose = () => {
    actionSheetRef.current?.hide();
    action.current?.hide();
  };
  const opencheckIn = () => {
    action.current?.show();
  };
  return (
    <ScrollView>
      <ActionSheet
        ref={actionSheetRef}
        elevation={0}
        headerAlwaysVisible={false}
        containerStyle={{paddingHorizontal: 10, backgroundColor: '#00000000'}}>
        <View style={{height: '28%'}}>
          <TouchableHighlight
            style={{
              width: '100%',
              backgroundColor: colors.actionSheetbg,
              height: 60,
              justifyContent: 'center',
              alignItems: 'center',
              borderTopLeftRadius: 10,
              borderTopRightRadius: 10,
              borderBottomWidth: 1,
              borderBottomColor: colors.lightgrey,
            }}
            onPress={() => console.log('clicked me')}
            underlayColor={colors.lightgrey}>
            <Text style={{color: colors.primary, fontSize: 20}}>Churches</Text>
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
            <Text style={{color: colors.primary, fontSize: 20}}>People</Text>
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
            <Text style={{color: colors.primary, fontSize: 20}}>Cancel</Text>
          </TouchableHighlight>
        </View>
      </ActionSheet>

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
            <Text style={{color: colors.primary, fontSize: 20}}>
              Scan QR Code
            </Text>
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
            <Text style={{color: colors.primary, fontSize: 20}}>
              Use Your Location
            </Text>
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
            <Text style={{color: colors.primary, fontSize: 20}}>
              View CheckedIn History
            </Text>
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
            <Text style={{color: colors.primary, fontSize: 20}}>Cancel</Text>
          </TouchableHighlight>
        </View>
      </ActionSheet>
      <TouchableHighlight
        onPress={() => navigation.navigate('UserProfile')}
        style={styles.profilecontainer}
        underlayColor="#360036">
        <View style={styles.profilecontentcontainer}>
          <Image source={require('../assets/img.jpg')} style={styles.image} />

          <View style={styles.textcontainer}>
            <Text style={styles.title}>Victor Acheampong</Text>
            <Text style={styles.Subtitle}>@Lesron</Text>
          </View>
        </View>
      </TouchableHighlight>

      <View style={styles.linkContainer}>
        <TouchableWithoutFeedback
          onPress={() => navigation.navigate('Messages')}>
          <Text style={styles.linkText}>Your Messages</Text>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback
          onPress={() => navigation.navigate('Followers')}>
          <Text style={styles.linkText}>Your Followers</Text>
        </TouchableWithoutFeedback>

        <TouchableWithoutFeedback
          onPress={() => navigation.navigate('Followers')}>
          <Text style={styles.linkText}>People You Follow</Text>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback>
          <Text style={styles.linkText}>About</Text>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback>
          <Text style={styles.linkText}>Churches you Follow</Text>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback>
          <Text style={styles.linkText} onPress={openActionsheet}>
            Search...
          </Text>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback onPress={opencheckIn}>
          <Text style={styles.linkText}>Check In...</Text>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback
          onPress={() => navigation.navigate('GivingHistory')}>
          <Text style={styles.linkText}>Giving History</Text>
        </TouchableWithoutFeedback>

        <TouchableWithoutFeedback
          onPress={() => navigation.navigate('HelpandSupport')}>
          <Text style={styles.linkText}>Help & Support</Text>
        </TouchableWithoutFeedback>

        <TouchableWithoutFeedback onPress={() => signOut()}>
          <Text style={styles.linkText}>SignOut</Text>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback>
          <Text style={styles.linkText}></Text>
        </TouchableWithoutFeedback>
      </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  profilecontainer: {
    backgroundColor: '#4c004b',
    height: '20%',
    paddingHorizontal: 20,
    justifyContent: 'center',
  },
  profilecontentcontainer: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  image: {
    height: 70,
    width: 70,
    backgroundColor: colors.primary,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textcontainer: {
    paddingLeft: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: '600',
    color: colors.white,
  },
  Subtitle: {
    fontSize: 16,
    color: colors.white,
    fontWeight: '400',
  },
  linkContainer: {
    paddingHorizontal: 50,
    paddingVertical: 5,
  },
  linkText: {
    color: 'grey',
    fontSize: 18,
    paddingVertical: 16,
  },
});

export default MoreScreen;
