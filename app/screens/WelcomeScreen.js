import React, {useContext} from 'react';
import {
  View,
  StyleSheet,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity,
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import {AuthContext} from '../components/Context';
import Screen from '../components/Screen';
import colors from '../config/colors';

function WelcomeScreen({navigation}) {
  const {signIn} = useContext(AuthContext);
  return (
    <Screen>
      <ImageBackground
        style={styles.container}
        resizeMode="cover"
        source={require('../assets/best.jpg')}>
        <Animatable.View style={styles.upper} animation="zoomIn">
          <Image source={require('../assets/logo.png')} style={styles.logo} />

          <Text style={styles.tagline}>Asoriba Inc</Text>
        </Animatable.View>
        <Animatable.View style={styles.bottom} animation="fadeInUp">
          <View style={styles.bottomContainer}>
            <Text style={styles.aboutText}>
              Asoriba mobile app is designed to keep you connected with your
              church anywhere and at anytime.
            </Text>
            <TouchableOpacity style={styles.button} onPress={() => signIn()}>
              <Text style={styles.buttonText}>Get Started</Text>
            </TouchableOpacity>
          </View>
        </Animatable.View>
      </ImageBackground>
    </Screen>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  upper: {
    flex: 3,
    alignItems: 'center',
  },
  logo: {
    height: 150,
    width: 150,
    marginTop: 20,
  },
  tagline: {
    fontSize: 35,
    color: colors.white,
    fontWeight: '900',
  },
  bottom: {
    flex: 2,
    backgroundColor: colors.white,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
  },
  bottomContainer: {
    padding: 50,
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  aboutText: {
    fontSize: 18,
    textAlign: 'center',
    color: colors.black,
  },
  button: {
    backgroundColor: colors.primary,
    padding: 15,
    borderRadius: 10,
    width: '100%',
  },
  buttonText: {
    fontSize: 20,
    textAlign: 'center',
    color: colors.white,
    fontWeight: 'bold',
  },
});
export default WelcomeScreen;
