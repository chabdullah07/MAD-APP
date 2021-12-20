import * as React from 'react';
import { useState } from 'react';
import axios from 'axios';
import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  Image,
  Span,
  Alert,
  TouchableOpacity,
} from 'react-native';
import { TextInput, Card, Button, Switch } from 'react-native-paper';
export default function Login({navigation}) {
  const [isLoading, setLoading] = React.useState(false);
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [errorMsg, setError] = React.useState("");


  const authenticate = async (email, password) => {
    if (!email) {
      Alert.alert("Please fill Email");
      return;
    }
    if (!password) {
      Alert.alert("Please fill Password");
      return;
    }
    setLoading(true); // Request API.
    await axios
      .post("http://localhost:1337/api/auth/local", {
        identifier: email,
        password: password,
      })
      .then((response) => {
        // Handle success.
        console.log("Well done!");
        console.log("User profile", response.data.user);
        console.log("User token", response.data.jwt);
        navigation.navigate("Home");
        setLoading(false);
      })
      .catch((err) => {
        // Handle error.
        console.log("An error occurred:" + err);
        72;
        setLoading(false);
        setError("" + err);
      });

  }

  return (
    <View style={styles.container}>
        <View>
            <Text style={styles.heading}>Login</Text>            
        </View>

        <View style={styles.tabs}>
        <Button
          mode="outlined"
          onPress={console.log('Pressed')}
          style={styles.button1}
          labelStyle={{
            color: '#48b749',
            fontSize: 12,
            fontFamily: 'Arial',
            fontWeight: 'bold',
            fontVariant: 'small-caps',
            textAlignVertical: 'center',
            textAlign: 'center',
          }}>
          Log In
        </Button>
        <Button
          mode="contained"
          color="#48b749"
          onPress={() => navigation.replace('Signup')}
          style={styles.button2}
          labelStyle={{
            color: 'white',
            fontSize: 12,
            fontFamily: 'Arial',
            fontWeight: 'bold',
            fontVariant: 'small-caps',
            textAlignVertical: 'center',
            textAlign: 'center',
          }}>
          Registeration
        </Button>
        </View>



        <View style={{width:'75%', justifyContent: "center", alignItems:"center", marginTop:50}}>
        <TextInput
          theme={{ colors: { primary: 'grey', outlineColor: 'transparent' } }}
          style={styles.input}
          placeholder="Email"
          value={email}
          onChangeText={(text) => setEmail(text)}
          keyboardType="email-address"
          left={<TextInput.Icon name="email" size={16} color={'#9A9999'} />}
        />
        <TextInput
          theme={{ colors: { primary: 'grey', outlineColor: 'transparent' } }}
          style={styles.input}
          placeholder="Password"
          secureTextEntry
          activeOutlineColor="#F2F2F2"
          value={password}
          onChangeText={setPassword}
          left={<TextInput.Icon name="lock" size={16} color="#9A9999" />}
        />
        <Button
          mode="contained"
          color="#48b749"
          onPress={() => {authenticate(email,password)}}
          style={styles.buttonlog}
          labelStyle={{
            color: 'white',
            fontSize: 12,
            fontFamily: 'Arial',
            fontWeight: 'bold',
            fontVariant: 'small-caps',
            textAlignVertical: 'center',
            textAlign: 'center',
          }}>
          LogIn
        </Button>
        </View>



        <View style={styles.Checkbox}>
          <TouchableOpacity onPress={() => navigation.navigate('ForgotPassword')}>
          <Text style={styles.forgotPass}>Forgot Password?</Text>
          </TouchableOpacity>
        </View>



        <View style={styles.container2}>
            <Text style={styles.noAccount}> Don't Have an Account?</Text>
            
            <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
            <Text style={styles.noAccount2}> Registeration?</Text>
        </TouchableOpacity>
        </View>



        <View style={styles.footer}>
            <Button
                icon="facebook"
                labelStyle={{ color: '#48b749', fontSize: 23 }}></Button>
            <Button
                icon="instagram"
                labelStyle={{ color: '#48b749', fontSize: 23 }}></Button>
            <Button
                icon="twitter"
            labelStyle={{ color: '#48b749', fontSize: 23 }}></Button>
        </View>


    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: "center",
  },

  container2: {
    flex: 1,
    flexDirection: 'row',
    justifyContent:"center",
    alignContent: 'center',
    justifyContent:"center",
  },

  noAccount: {
    color: 'black',
    fontStyle: 'normal',
    fontSize: 12,
  },

  noAccount2: {
    color: '#48b749',
    fontStyle: 'normal',
    fontSize: 12,
  },

heading: {
    fontSize: 20,
    fontWeight: '600',
    paddingVertical: 20,
},

tabs: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: "center",
    marginTop: 20,
},

button1: {
    marginRight: 20,
    height: 35,
    width: 130,
    borderRadius: 5,
  },

button2: {
    height: 35,
    width: 170,
    borderRadius: 5,
  },

  input: {
    backgroundColor: 'white',
    width: '100%',
  },

  buttonlog: {
    marginTop: 40,
    height: 35,
    width: '100%',
    borderRadius: 5,
  },

  forgotPass: { 
    marginTop: -3,
    color: '#48b749',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 12,
    marginLeft: 75,
  },

  rememberMe: {
    paddingLeft: 6,
    marginTop: -3,
  },

  Checkbox: {
    flexDirection: 'row',
    paddingTop: 20,
    flex: 1,
    marginBottom: 180,
    marginTop:17,
  },

  footer: {
    flex: 2,
    flexDirection: 'row',
    width: '100%',
    justifyContent:"center",
  },

});