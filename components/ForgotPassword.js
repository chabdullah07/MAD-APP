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
  Alert,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import { TextInput, Card, Button, Switch } from 'react-native-paper';

export default function ForgotPassword({navigation}) {
  const [email, setEmail] = React.useState('');
  const [isSelected, setSelection] = useState(false);
  const [loading, setLoading] = useState(false);


  return (
  
  <View style={styles.container}>
      <View style={styles.textView}>
        <Text style={styles.HeadingText}>Forgot Password</Text>
      </View>
  
      <Image style={styles.tinyLogo} source={require('../assets/sad.png')} />

      <View style={{width:'75%', justifyContent: "center",}}>
        <TextInput
          theme={{ colors: { primary: 'grey', outlineColor: 'transparent' } }}
          style={styles.input}
          placeholder="Email"
          value={email}
          onChangeText={(text) => setEmail(text)}
          keyboardType="email-address"
          left={<TextInput.Icon name="email" size={16} color={'#9A9999'} />}
        />
        <Button
          mode="contained"
          color="#48b749"
          onPress={() => {alert('Reset Email Sent')
        navigation.navigate('Login')}}
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
          Reset Password
        </Button>
      </View>
      <View style={styles.container2}>
        <Text style={styles.noAccount}> Don't Have an Account?</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
        <Text style={styles.noAccount2}> Registration?</Text>
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
    marginTop: 70,
    marginBottom: 20,
  },
  HeadingText: {
    fontSize: 20,
    fontWeight: '600',
    paddingVertical: 20,
  },
  input: {
    backgroundColor: 'white',
    width: '100',
  },
  buttonlog: {
    marginTop: 20,
    paddingTop: 5,
    height: 40,
    width: '80',
    borderRadius: 5,
    marginBottom: 20,
  },
  footer: {
    flex: 2,
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'center',
  },
  noAccount: {
    color: 'black',
    fontStyle: 'normal',
    fontSize: 12,
  },
  tinyLogo: {
    marginTop: 70,
    width: 250,
    height: 250,
    marginBottom: 30,
  },
  noAccount2: {
    color: '#48b749',
    fontStyle: 'normal',
    fontSize: 12,
  },
});
