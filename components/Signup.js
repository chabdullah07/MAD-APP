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
  CheckBox,
  TouchableOpacity,
  Alert,
} from 'react-native';
import { TextInput, Card, Button, Switch } from 'react-native-paper';
export default function Signup({navigation}) {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [number, setNumber] = useState('');
  const [userName, setUserName] = useState('');
  const [address, setAddress] = useState('');



  const Register = async (username, email, password) => {
        await axios
      .post("http://localhost:1337/api/auth/local/register", {
        username,
        email,
        password,
      })
      .then((response) => {
        // Handle success.
        console.log("Well done!");
        console.log("User profile", response.data.user);
        console.log("User token", response.data.jwt);
        navigation.navigate('Home');
      })
      .catch((error) => {
        // Handle error.
        console.log("An error occurred:", error.response);
      });
  };

  return (
    <View style={styles.container}>

        <View>
            <Text style={styles.heading}>Registration</Text>            
        </View>



        <View style={styles.tabs}>
        <Button
          mode="outlined"
          onPress={() => navigation.navigate('Login')}
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
          onPress={console.log('Pressed')}
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



        <View style={{width:'75%', justifyContent: "center", alignItems:"center", marginTop:20}}>

        <TextInput
          theme={{ colors: { primary: 'grey', outlineColor: 'transparent' } }}
          style={styles.input}
          placeholder="User Name"
          value={userName}
          onChangeText={setUserName}
          keyboardType="default"
          left={<TextInput.Icon name="face" size={16} color={'#9A9999'} />}
        />

        <TextInput
          theme={{ colors: { primary: 'grey', outlineColor: 'transparent' } }}
          style={styles.input}
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
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


        <TextInput
        theme={{ colors: { primary: 'grey', outlineColor: 'transparent' } }}
        style={styles.input}
        placeholder="Phone"
        value={number}
        onChangeText={setNumber}
        keyboardType="numeric"
        left={<TextInput.Icon name="phone" size={16} color={'#9A9999'} />}
        />

       <TextInput
        theme={{ colors: { primary: 'grey', outlineColor: 'transparent' } }}
        style={styles.input}
        placeholder="Address"
        value={address}
        onChangeText={setAddress}
        keyboardType="default"
        left={<TextInput.Icon name="map" size={16} color={'#9A9999'} />}
        />

        <Button
          mode="contained"
          color="#48b749"
          onPress={() => Register(userName, email, password)}
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
          Signup
        </Button>
        </View>

        <View style={styles.container2}>
            <Text style={styles.noAccount}> Don't Have an Account?</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
        <Text style={styles.noAccount2}> Log In?</Text>
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
    alignItems: "center",
    flex: 1,
    backgroundColor: 'white',
  },

  container2: {
    flex: 1,
    flexDirection: 'row',
    justifyContent:"center",
    marginTop: 40,
  },

  noAccount: {
    color: 'black',
    fontStyle: 'normal',
    fontSize: 12,
    justifyContent:"center",

  },

  noAccount2: {
    color: '#48b749',
    fontStyle: 'normal',
    fontSize: 12,
    justifyContent:"center",
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
    marginTop: 15,
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
    marginBottom: 70,
    height: 35,
    width: '100%',
    borderRadius: 5,
  },

  forgotPass: { 
    marginLeft:"auto",
    color: '#48b749',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 12,
  },

 box:{
  marginRight:5,
 },

  footer: {
    flex: 2,
    flexDirection: 'row',
    width: '100%',
    justifyContent: "center",
  },
  
});
