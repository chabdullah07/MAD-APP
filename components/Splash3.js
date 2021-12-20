import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from 'react-native';


export default function Splash3({navigation}) {
  return (
    <View style={styles.container}>
      <View style={styles.textView}>
        <Text style={styles.HeadingText}>Welcome</Text>
      </View>

      <Text style={styles.SubText1}>Same Day</Text>

      <View style={styles.textView2}>
        <Text style={styles.SubText2}>One Hour</Text>
        <Text style={styles.SubText3}> Delivery</Text>
      </View>

      <Image style={styles.topImage1} source={require('../assets/veg.png')} />

      <View style={styles.tex}>
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Text style={styles.destext}>Skip</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Splash4')}>
          <Image
            style={styles.topImage2}
            source={require('../assets/right-arrow.png')}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
  },

  tex: {
    flexDirection: 'row',
    padding: 40,
    marginTop: 60,
  },

  textView: {
    marginTop: 10,
    alignItems: "center",
  },

  textView2: {
    alignItems: "center",
    flexDirection: 'row',
    backgroundColor: 'white',
    marginLeft: 40,
  },

  HeadingText: {
    fontSize: 20,
    fontWeight: '600',
    paddingVertical: 50,
  },

  SubText1: {
    marginTop: 50,
    color: 'grey',
    fontSize: 30,
    fontWeight: 'normal',
    marginLeft: 40,
  },

  destext: {
    color: 'grey',
    fontSize: 20,
    fontWeight: 'normal',
  },

  SubText2: {
    color: '#48b749',
    fontSize: 30,
    fontWeight: 'normal',
  },

  SubText3: {
    color: 'grey',
    fontSize: 30,
    fontWeight: 'normal',
  },

  topImage1: {
    alignItems: "center",
    marginTop: 20,
    width: 340,
    height: 340,
    marginLeft: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },

  topImage2: {
    width: 20,
    height: 20,
    marginLeft: 250,
    marginTop: 3,
  },
});