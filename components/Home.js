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
import { Searchbar } from 'react-native-paper';

export default function Home({navigation}) {
  const [isLoading, setLoading] = useState(true);
  const [items, setitems] = useState([]);

  const MySearch = () => {

    const [searchQuery, setSearchQuery] = React.useState('');
    const onChangeSearch = (query) => setSearchQuery(query);
  
    return (
      
      <View style={styles.search}>
        <Searchbar
          placeholder="Search"
          onChangeText={onChangeSearch}
          value={searchQuery}
          style={{
            height: 34,
            width: '80%',
            borderWidth: 1,
            borderColor: 'green',
            marginTop: 5,
          }}
        />
  
  <TouchableOpacity onPress={()=>navigation.navigate('Accounts')}>
        <View style={styles.leftBox}>
          <Image
            style={{
              width: 40,
              height: 40,
              marginLeft: 5,
            }}
            source={require('../assets/profile.png')}
          />
        </View>
        </TouchableOpacity>
  
      </View>
    );
  };
  
  const CategoryName = ({name}) => {
    return (
      <Pressable onPress={() => console.log('pressd')}>
        <View
          style={{
            borderWidth: 1,
            width: 60,
            height: 60,
            borderRadius:10,
            alignItems: "center",
            justifyContent: 'center',
          }}>
          <Image
            style={styles.bottomImage2}
            source={require('../assets/iconfruits.png')}
          />
        </View>
        <Text style={{ textAlign: 'center', fontWeight: '400' }}>{name}</Text>
      </Pressable>
    );
  };
  
  function RenderListItem({ item }) {
    return (
      <Pressable onPress={() => navigation.navigate("Details")}>
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            margin: 5,
            borderRadius: 10,
            borderWidth: 2,
            overflow: "hidden",
            borderColor: "#45c553",
            alignItems: "center",
          }}
        >
          <View
            style={{
              backgroundColor: "#45c553",
              width: 100,
              height: 100,
              borderRadius: 50,
              position: "absolute",
              right: -20,
              justifyContent: "center",
              zIndex: 100,
            }}
          >
            <Text
              style={{
                color: "white",
                fontSize: 16,
                padding: 20,
                fontWeight: "600",
              }}
            >
              ${item.Price}
            </Text>
          </View>
  
          <Image
            style={{ width: 100, height: "100%", resizeMode: "cover" }}
            source={{
              uri: "http://localhost:1337" + item.Foto.data[0].attributes.url,
            }}
          />
  
          <View
            style={{ padding: 8, justifyContent: "center", paddingVertical: 20 }}
          >
            <Text style={{ fontSize: 15 }}>{item.Name}</Text>
            <Text style={{ paddingTop: 5 }}>{item.Quantity} Pieces</Text>
          </View>
        </View>
      </Pressable>
    );
  }
  
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
      setitems(json.data);
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
    <ScrollView>
      <View style={styles.container}>
        <MySearch/>
        <TouchableOpacity>
        <ScrollView>
          <View style={styles.imageBlock}>
            <Image
              style={styles.bottomImage}
              source={require('../assets/banner.jpg')}
            />
          </View>
        <Text style={styles.textCatagory}>Categories</Text>

        <View style={styles.Catorgries}>
          <CategoryName name={'All'} />
          <CategoryName name={'Fist'} />
          <CategoryName name={'Fruit'} />
          <CategoryName name={'Vegetable'} />
          <CategoryName name={'Meat'} />
          </View>
        </ScrollView>
        </TouchableOpacity>
        
        <View style={{ paddingBottom: 20 }}>
          <DashboardHeading heading="Popular Items" buttonText="" />
          {isLoading ? (
            <ActivityIndicator />
          ) : (
            <MyFlatList data={items} numColumns={2} />
          )}

          <DashboardHeading heading="Good Items" buttonText="" />
          {isLoading ? (
            <ActivityIndicator />
          ) : (
            <FlatList
              data={items}
              renderItem={({ item }) => (
                <RenderListItem item={item.attributes} />
              )}
              keyExtractor={(item) => item.id}
              style={{ padding: 5 }}
            />
          )}
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: 'white',
  },
  search: {
    flexDirection: 'row',
    alignItems: "center",
    justifyContent: 'space-evenly',
    margin: 8,
  },
  leftBox: {
    backgroundColor: 'white',

    width: 34,
    height: 34,
  },
  textCatagory: {
    fontFamily: 'Arial',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 14,
    color: '#353434',
    marginLeft: 10,
    marginTop: 10,
    marginBottom: 10,
  },

    textCatagory2: {
    fontFamily: 'Arial',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 14,
    color: '#353434',
    marginLeft: 10,
    marginTop: 30,
  },

  textCatagory3: {
    fontFamily: 'Arial',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 14,
    marginLeft: 10,
    color: '#353434',
  },


  Catorgries: {
    flex: 1,
    flexDirection: 'row',
    alignItems: "center",
    justifyContent: 'space-evenly',
  },
  popularFruits: {
    flexDirection: 'row',
    alignItems: "center",
    justifyContent: 'space-between',
    margin: 5,
  },
  viewAllText: {
    marginHorizontal: 8,
    alignSelf:"center",
  },

  viewAllText2: {
    marginHorizontal: 8,
    marginTop: 30,
  },

  popularFruitImageContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: "center",
    justifyContent: 'space-evenly',
  },
  bestPriceImageContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: 'space-evenly',
    marginTop: 20,
    marginBottom: 30,
  },
  popularFruitImage: {
    flex:1,
    marginHorizontal:10,
    borderWidth: 1,
    padding:5,
    borderRadius: 5,
    borderColor: 'green',
    overflow: 'hidden',
    position:"relative",
  },
  
  bestPrice: {
    width: '90%',
    height: 80,
    marginVertical: 5,
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
  },
  like: {
    position: 'absolute',
    right: 5,
  },
  bottomImage: {
    width: 300,
    borderRadius: 5,
    height: 180,
  },

 bottomImage2: {
    width: 50,
    borderRadius: 5,
    height: 50,
  },

  imageBlock: {
    justifyContent: 'center',
    alignItems: "center",
    padding: 10,
    width: '100%'
  },
});