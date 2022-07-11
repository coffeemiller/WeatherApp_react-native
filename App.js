import React, { useEffect, useState } from "react";
import { View, StyleSheet, Text, ScrollView, Dimensions, ActivityIndicator } from "react-native";
import * as Location from "expo-location";
import { StatusBar } from "expo-status-bar";
import { Fontisto } from "@expo/vector-icons";

const { width:SCREEN_WIDTH } = Dimensions.get("window");
// const SCREEN_WIDTH = Dimensions.get("window").width;

console.log(SCREEN_WIDTH);

const API_KEY = 'fc7c624b1d86597b7117e136e9223924';

const icons = {
  Clouds: "cloudy",
  Clear: "day-sunny",
  Atmosphere: "cloudy-gusts",
  Snow: "snow",
  Rain: "rains",
  Drizzle: "rain",
  Thunderstorm: "lightning",
};

export default function App() {
  const [city, setCity] = useState("Loading...");
  const [days, seDays] = useState([]);
  const [ok, setOk]= useState(true);
  const getWeather = async() => {
    // Permission
    const { granted } = await Location.requestForegroundPermissionsAsync();
    if(!granted) {
      setOk(false);
    }
    // User Info.
    const {coords:{latitude, longitude}} = await Location.getCurrentPositionAsync({accuracy: 5});
    const location = await Location.reverseGeocodeAsync({latitude, longitude}, {useGoogleMaps: false});
    console.log(location);
    console.log(location[0].city);
    setCity(location[0].city);
    const response = fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=alerts&appid=${API_KEY}&units=metric`);
    const json = await (await response).json();
    seDays(json.daily);
  }
  useEffect(() => {
    getWeather();
  }, [])
  return (
    // <View style={{ flexDirection:"row" }}>
    <View style={styles.container}>
      <StatusBar style="light" />
      {/* <View style={{ flex:1, backgroundColor:"tomato" }}></View>
      <View style={{ flex:5, backgroundColor:"teal" }}></View> */}
      <View style={styles.city}>
        <View>
          <Text style={styles.cityName}>{city}</Text>
        </View>
      </View>
      <ScrollView 
        pagingEnabled 
        horizontal 
        showsHorizontalScrollIndicator={false}
        // indicatorStyle="white"  // only iOS
        contentContainerStyle={styles.weather}>
      {/* <ScrollView style={styles.weather}> */}
        {days.length === 0 ? (
          <View style={{...styles.day, alignItems: "center"}}>
            <ActivityIndicator color="white" style={{marginTop: 10}} size="large"/>
          </View>
        ) : (
          days.map((day, index) => 
            <View key={index} style={styles.day}>
              <View style={{ flexDirection: "row", alignItems: "center", width: "90%",justifyContent: "space-between"}}>
                <Text style={styles.temp}>{parseFloat(day.temp.day).toFixed(1)}</Text>
                <Fontisto name={icons[day.weather[0].main]} size={68} color="white" />
              </View>

              <Text style={styles.description}>{day.weather[0].main}</Text>
              <Text style={styles.tinyText}>{day.weather[0].description}</Text>
            </View>
          )
        )}
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
    fontSize: 80,
    fontWeight: "700",
    color: "white",
  },
  weather: {
    // flex: 3,
    // backgroundColor: "teal",
  },
  day: {
    // flex: 1,
    // justifyContent: "center",
    width: SCREEN_WIDTH,
    // alignItems: "center",
    alignItems: "flex-start",
    paddingHorizontal: 20,
    // backgroundColor: "teal",
  },
  temp: {
    marginTop: 50,
    fontWeight: "600",
    fontSize: 100,
    color: "white",
  },
  description: {
    marginTop: -10,
    fontSize: 30,
    color: "white",
    fontWeight: "500",
  },
  tinyText: {
    marginTop: -5,
    fontSize: 25,
    color: "white",
    fontWeight: "500",
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
