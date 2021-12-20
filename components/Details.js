import React, { useEffect, useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  Pressable,
  Image,
  FlatList,
  ScrollView,
  ActivityIndicator,
  TouchableOpacity,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Button } from 'react-native-paper';
import Counters from 'react-native-counters';

export default function Details({navigation}) 
{
    const [isLoading, setLoading] = useState(true);
    const [items, setitems] = useState([]);
      
      function RenderSmallListItem({ item }) {
        const [like, setLike] = useState(false);
        return (
          <View
            style={{
              flex: 1,
              flexDirection: "column",
              margin: 1,
              borderRadius: 10,
              borderWidth: 2,
              overflow: "hidden",
              borderColor: "#45c553",
            }}
          >
            <View
              style={{
                backgroundColor: "#45c553",
                width: 60,
                height: 60,
                borderRadius: 30,
                position: "absolute",
                right: -10,
                top: -10,
                justifyContent: "center",
                alignItems: "center",
                zIndex: 100,
                opacity: 0.7,
              }}
            >
              <Pressable onPress={() => setLike(!like)}>
                <MaterialCommunityIcons
                  name="heart"
                  size={34}
                  color={like ? "red" : "white"}
                  style={{ opacity: like ? 1 : 0.5 }}
                />
              </Pressable>
            </View>
      
            <Image
              style={{ height: 150, resizeMode: "cover" }}
              source={{
                uri: "http://localhost:1337" + item.Foto.data[0].attributes.url,
              }}
            />
            <View
              style={{
                padding: 8,
                borderTopWidth: 2,
                borderTopColor: "#45c553",
                backgroundColor: "#45c553",
              }}
            >
              <Text
                style={{
                  fontWeight: "700",
                  color: "white",
                  fontSize: 15,
                }}
              >
                {item.Name}
              </Text>
              <Text style={{ color: "white", paddingTop: 5 }}>${item.Price}</Text>
            </View>
          </View>
        );
      }
      
      function DashboardHeading({ heading, buttonText }) {
        return (
          <View style={{ flexDirection: "row", padding: 10 }}>
            <Text style={{ fontWeight: "600" }}>{heading}</Text>
            <Text style={{ position: "absolute", right: 10 }}>{buttonText}</Text>
          </View>
        );
      }
    
      function MyFlatList({ data, numColumns }) {
        return (
          <View>
            <FlatList
              data={data}
              renderItem={({ item }) => (
                <RenderSmallListItem item={item.attributes} />
              )}
              numColumns={numColumns}
              keyExtractor={(item, index) => index}
              style={{ padding: 5 }}
            />
          </View>
        );
      }

      const getitems = async () => {
        try {
          console.log("http://localhost:1337/api" + "/products");
          const response = await fetch("http://localhost:1337/api" + "/products?populate=*");
          const json = await response.json();
          setitems(json.data.slice(2,4));
          console.log(items);
        } catch (error) {
          console.error(error);
        } finally {
          setLoading(false);
        }
      };
    
      useEffect(() => {
        getitems();
      }, []);    

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={()=> navigation.navigate('Home')}>
        <Image
          source={require('../assets/backArrow.png')}
          style={{ width: 10, height: 10, left: -100 }}
        />
        </TouchableOpacity>
        <Text style={styles.text}>Product Details</Text>
        <Image
          source={require('../assets/Cart.png')}
          style={{ width: 26, height: 20, position: 'absolute', right: 15 }}
        />
      </View>

      <View style={styles.body}>
        <Image
          source={require('../assets/anar.png')}
          style={{ width: 200, height: 170, position: 'absolute' }}
        />
        <Image
          source={require('../assets/heart.png')}
          style={{
            width: 26,
            height: 23,
            position: 'absolute',
            right: 8,
            top: 16,
          }}
        />
      </View>

      <View style={styles.body2}>
        <Text style={styles.text2}>Rs 70</Text>

        <View style={{ flexDirection: 'row', marginTop: 13, marginLeft: 260 }}>
          <Counters style={{width:'10'}}>
          </Counters>
        </View>

        <Text style={styles.text3}>Pomegranate</Text>
        <Text style={styles.text4}>1 kg</Text>
        <Image
          source={require('../assets/rating.png')}
          style={{
            width: 96,
            height: 15,
            position: 'absolute',
            left: 15,
            top: 75,
          }}
        />
      </View>

      <View style={styles.body3}>
        <Text style={styles.text5}>
          Pomegranate my text of the printing and typesetting industry. Lorem
          Ipsum has been the industrys standard dummy It is a long established
          fact that a reader will to be distracted by the readable content of a
          page when looking at its layout.
        </Text>
      </View>

      <View style={{ paddingBottom: 20 }}>
          <DashboardHeading heading="Related Products" buttonText="" />
          {isLoading ? (
            <ActivityIndicator />
          ) : (
            <MyFlatList data={items} numColumns={2} />
          )}
        </View>

      <View style={styles.buttonsContainer}>
        <Button
          mode="contained"
          color="#48B749"
          onPress={() => navigation.navigate('ThankYou')}
          style={styles.buttons}
          labelStyle={{
            color: 'white',
            fontSize: 14,
            fontFamily: 'Arial',
            fontWeight: 'bold',
            fontVariant: 'small-caps',
            textAlignVertical: 'center',
            textAlign: 'center',
          }}>
          Add to Cart
        </Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },

  header: {
    height: 60,
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: "center",
    position: 'relative',
  },

  body: {
    flex: 0.4,
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: "center",
    position: 'relative',
  },

  body2: {
    flex: 0.3,
    flexDirection: 'row',
  },

  body3: {
    flex: 0.45,
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: "center",
    position: 'relative',
  },

  body4: {
    flex: 0.45,
    flexDirection: 'row',
    //backgroundColor:'red',
    justifyContent: 'space-between',
  },

  body5: {
    flex: 1,
    justifyContent: 'center',
    alignItems: "center",
    margin: 7,
    borderWidth: 2,
    borderRadius: 16,
    borderColor: '#BABABA',
  },

  text: {
    fontFamily: 'Roboto',
    fontSize: 20,
    color: '#707070',
    fontWeight: '500',
  },

  text2: {
    fontFamily: 'Roboto',
    fontSize: 14,
    color: '#48B749',
    position: 'absolute',
    left: 15,
    top: 10,
    fontWeight: '500',
  },

  text3: {
    fontFamily: 'Roboto',
    fontSize: 18,
    color: '#707070',
    position: 'absolute',
    left: 15,
    top: 30,
    fontWeight: '700',
    alignItems: "center",
    justifyContent: 'center',
  },

  text4: {
    fontFamily: 'Roboto',
    fontSize: 12,
    color: '#707070',
    position: 'absolute',
    left: 15,
    top: 56,
    fontWeight: '400',
    alignItems: "center",
    justifyContent: 'center',
  },

  text5: {
    fontFamily: 'Roboto',
    fontSize: 14,
    color: '#707070',
    position: 'absolute',
    left: 15,
    top: 8,
    fontWeight: '400',
    alignItems: "center",
    justifyContent: 'center',
  },

  text6: {
    fontFamily: 'Roboto',
    fontSize: 16,
    color: '#707070',
    position: 'absolute',
    left: 15,
    bottom: 2,
    fontWeight: '700',
    alignItems: "center",
    justifyContent: 'center',
  },

  text8: {
    fontFamily: 'Roboto',
    fontSize: 12,
    lineHeight: 21,
    color: '#48B749',
  },
});