import * as React from 'react';
import {
  Text,
  Button,
  View,
  StyleSheet,
  SafeAreaView,
  ImageBackground,
  FlatList,
  Image,
  Pressable,
  ScrollView,
  Icon,
  TouchableOpacity,
} from 'react-native';

const getprofileData = () => [
  { name: 'Account',},
  { name: 'My Card' },
  { name: 'General' },
  { name: 'My Order' },
  { name: 'Logout' },
  { name: 'Help' },
];

function Renderlist({item}) {
  return (
    <Pressable>
      <View
        style={{
          flexDirection: 'row',
          paddingBottom: 10,
          paddingLeft: 10,
        }}>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'left',
            alignItems: "center",
          }}>
          <Image
            style={{ height: 20, width: 20, marginBottom: 20, }}
            source={require('../assets/profil.png')}
          />
          <Text style={{ fontFamily: 'arial', fontSize: 12, paddingLeft: 15, fontWeight: '700', color:'grey', marginBottom: 20, }}>
            {item.name}
          </Text>
        </View>
      </View>
    </Pressable>
  );
}

export default function Accounts({navigation}) {
  const myData = getprofileData();
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.heading}>Profiles</Text>
      </View>

      <View>
        <Image
          style={{ height: 100, width: 100 }}
          source={require('../assets/profile.png')}
        />
      </View>

      <View style={styles.align1}>
        <Text style={styles.SubText2}>Shosci sho</Text>
      </View>


      <View style={styles.align1}>
        <Text style={{color:'grey', fontWeight:"600", marginTop: 5,}}>Shosci@gmail.com</Text>
      </View>

<View style={styles.container2}>
      <View
        style={{
          top: 30,
          justifyContent: 'center',
          alignItems: "center",
        }}>
        
        <FlatList
          data={myData}
          renderItem={({item}) => <Renderlist item={item} />}
          keyExtractor={(item, index) => index}
          style={{ padding: 5 }}
        />
      </View>

      <View style={styles.align4}>
        <Button
          mode="contained"
          color="#48b749"
          title="Give Feedback"
          onPress={()=>navigation.navigate('FeedbackScreen')}
          >
          </Button>
      </View>
    </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    width:'100%',
    alignItems: "center",
  },

  align4: {
    alignItems: "center",
    padding: 10,
    width: '100%',
    marginTop: 20,
  },

  container2: {
    flex: 1,
    backgroundColor: 'white',
    width:'90%',
    alignItems: "center",
  },

  SubText2: {
    fontSize: 15,
    color: '#48b749',
    fontWeight: 'bold',
    marginTop: 10,
    alignItems: "center",
  },

  heading: {
    fontSize: 18,
    fontWeight: '600',
    paddingVertical: 20,
  },
});
