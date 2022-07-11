import React from "react";
import { View, StyleSheet, Text, ScrollView, Dimensions } from "react-native";

const { width:SCREEN_WIDTH } = Dimensions.get("window");
// const SCREEN_WIDTH = Dimensions.get("window").width;

console.log(SCREEN_WIDTH);

export default function App() {
  return (
    // <View style={{ flexDirection:"row" }}>
    <View style={styles.container}>
      {/* <View style={{ flex:1, backgroundColor:"tomato" }}></View>
      <View style={{ flex:5, backgroundColor:"teal" }}></View> */}
      <View style={styles.city}>
        <View>
          <Text style={styles.cityName}>Seoul</Text>
        </View>
      </View>
      <ScrollView 
        pagingEnabled 
        horizontal 
        showsHorizontalScrollIndicator={false}
        // indicatorStyle="white"  // only iOS
        contentContainerStyle={styles.weather}>
      {/* <ScrollView style={styles.weather}> */}
        <View style={styles.day}>
          <Text style={styles.temp}>27</Text>
          <Text style={styles.description}>Sunny</Text>
        </View>
        <View style={styles.day}>
          <Text style={styles.temp}>27</Text>
          <Text style={styles.description}>Sunny</Text>
        </View>
        <View style={styles.day}>
          <Text style={styles.temp}>27</Text>
          <Text style={styles.description}>Sunny</Text>
        </View>
        <View style={styles.day}>
          <Text style={styles.temp}>27</Text>
          <Text style={styles.description}>Sunny</Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "orange",
  },
  city: {
    flex: 1.1,
    backgroundColor: "orange",
    justifyContent: "center",
    alignItems: "center",
  },
  cityName: {
    fontSize: 50,
    fontWeight: "700",
  },
  weather: {
    // flex: 3,
    // backgroundColor: "teal",
  },
  day: {
    // flex: 1,
    // justifyContent: "center",
    width: SCREEN_WIDTH,
    alignItems: "center",
    // backgroundColor: "teal",
  },
  temp: {
    marginTop: 50,
    fontSize: 178,
  },
  description: {
    marginTop: -30,
    fontSize: 60,
  },
});



// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View, Button, Alert } from 'react-native';

// export default function App() {
//   return (
//     <View style={styles.container}>
//       {/* <Text>Coffeemiller Expo app!!</Text> */}
//       <Text style={styles.text}>Coffeemiller Expo app!</Text>
//       <Button 
//         title='버튼'
//         onPress={() => Alert.alert("확인")}
//       />
//       <StatusBar style="auto" />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   text: {
//     fontSize:28,
//     color:"red"
//   }
// });
