import * as React from "react";
import {
  View,
  StyleSheet,
  ImageBackground,
  TextInput,
} from "react-native";
import {
  Input,
  ThemeProvider,
  Button,
  Icon,
  Text,
} from "react-native-elements";
import { Dimensions } from 'react-native';
import Image from 'react-native-scalable-image';

function Login({ navigation }) {
  return (
    <View style={styles.container}>
      <Image
          style={styles.background}
          width={Dimensions.get('window').width}
          source={require("../images/TulsaRiot.jpg")}
          ></Image>
       <Image
        style={styles.background}
        width={Dimensions.get('window').width}
        source={require("../images/TulsaBookerTWashHighBand.jpg")}
      ></Image>
      <View>
        <Text h4 style={styles.name} textAlign>
           YOUMOJA      
         </Text>
      </View>
      <Image
        style={styles.background}
        width={Dimensions.get('window').width}
        source={require("../images/tulsa.jpeg")}
      ></Image>
      <Image
        style={styles.background}
        width={Dimensions.get('window').width}
        source={require("../images/tulsaAftermath.jpeg")}
      ></Image>
          <Image
           width={Dimensions.get('window').width/4.5}
            style={styles.logo}
            source={require("../images/LOGO.png")}
          ></Image>
          <TextInput
            textAlign
            defaultValue="username"
            clearTextOnFocus={true}
            style={styles.input}
          />
        <View style={styles.inputView2}>
          <TextInput
            textAlign
            clearTextOnFocus={true}
            defaultValue="password"
            style={styles.input}
          />
        </View>
        <View style={styles.loginBottom}></View>

        <Button
          style={styles.loginButton}
          title="Log in"
          onPress={() => navigation.navigate("Nav")}
        />
        <Text h6 style={styles.signupMess}>
          Don't have an account? Sign up for free.
        </Text>
    </View>
  );
}
export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 2,
    top: "5%",
    justifyContent: "center",
  },
  background: {
    flexDirection: "column",
  },
  name: {
    zIndex:1,
    width:"40%",
    fontWeight: 'bold',
    textAlign: "center",
    backgroundColor:"red"
  },
  inputView1: {
    position: "absolute",
    top: 435,
    left: "24%",
    justifyContent: "center",
    width: "50%",
    borderRadius: 10,
    // backgroundColor: "gold",
  },
  inputView2: {
    position: "absolute",
    top: 495,
    left: "24%",
    justifyContent: "center",
    width: "50%",
    borderRadius: 10,
    // backgroundColor: "gold",
  },
  input: {
    top: 30,
    height: 40,
    fontSize: 26,
    borderRadius: 10,
    backgroundColor: "gold",
    color: "purple",
  },
  loginBottom: {
    position: "absolute",
    justifyContent: "center",
    top: 700,
    left: 100,
    backgroundColor: "gold",
    height: 2,
    width: 205,
  },
  logo: {
    zIndex:1,
    position: "absolute",
    alignSelf:"center"
  },
  loginButton: {
    position: "relative",
    justifyContent: "center",
  },
  signupMess: {
    position: "absolute",
    justifyContent: "center",
    color: "gold",
    top: 720,
    left: 70,
  },
});
