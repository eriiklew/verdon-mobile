/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import { Alert, StyleSheet, Text, View, SafeAreaView } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import { Ionicons } from '@expo/vector-icons';
import TournamentContainer from './screens/Tournaments/Tournaments';
import TournamentDetail from './screens/Tournaments/TournamentDetail';
import Profile from './screens/Profile';
import Hotspots from './screens/Hotspots';
import JoinTournament from './screens/Tournaments/JoinTournament';
import StoreHome from './screens/Store/StoreHome';
import StorePurchase from './screens/Store/StorePurchase';
import Search from './screens/Search/Search';


navigator.geolocation = require('@react-native-community/geolocation');


const userData = {
  id: 162,
  name: 'Erik Lew',
  userName: 'eriiklew',
  email: 'ek.lew99@gmail.com',
}

const restaurantLocations = [
  {
    id: 1,
    name: 'Tonys Pizza',
    coordinates: {
      latitude: 37.98825,
      longitude: -122.4324
    },
    hotspotDistance: 1
  }
];


const randomNumber = (min, max) => {
  return Math.random() * (min - max) + min;
}
const makeHotspots = (lat, lon) => {
  const newLat = (randomNumber(lat - .004, lat + .004))
  const newLon = (randomNumber(lon - .004, lon + .004))
  // console.log(newLat, newLon)
  return [newLat, newLon]
}

const createHotspots = (restaurantLocations) => {
  restaurantLocations.map(hotspot => {
    makeHotspots(hotspot.coordinates.latitude, hotspot.coordinates.longitude)
  })
}

function StoreScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Store!</Text>
    </View>
  );
}

function MapScreen({ route }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Hotspots location={{ latitude: route.params.coords.latitude, longitude: route.params.coords.longitude }} restaurants={restaurantLocations} />
    </View>
  );
}

function ProfileScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Profile nav={navigation} />
    </View>
  );
}


export default class App extends Component {
  state = {
    location: null,
    userPoints: null
  };

  findCoordinates = () => {
    navigator.geolocation.getCurrentPosition(
      position => {
        const location = position;
        // console.log(location)
        console.log('Recieved user location')
        this.setState({ location });
      },
      error => Alert.alert(error.message),
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
    );
  }

  componentDidMount() {
    this.findCoordinates();
    // console.log(this.state.location)
  }




  render() {
    // console.log(this.state.location)
    const BottomTab = createBottomTabNavigator();
    return (
      // <View style={styles.container}>
      //   <TouchableOpacity>
      //     <Text style={styles.welcome}>Find My Coords?</Text>
      //     <Text>Location: {this.state.location}</Text>
      //   </TouchableOpacity>
      // </View>
      <SafeAreaView style={styles.container}>
        <NavigationContainer>
          <BottomTab.Navigator options={{ headerShown: false }} >
            <BottomTab.Screen name="HomeStack" component={HomeStackScreen} options={{ tabBarBadge: 3, headerShown: false }} />
            <BottomTab.Screen name="SearchStack" component={SearchStackScreen} options={{ headerShown: false }} />
            <BottomTab.Screen name="StoreStack" component={StoreStackScreen} options={{ headerShown: false }} />
            <BottomTab.Screen name="Hotspots" component={MapScreen} test="hello" options={{ title: 'Hotspots' }} initialParams={this.state.location} />
            <BottomTab.Screen name="Profile" component={ProfileScreen} options={{ title: 'Profile' }} />
          </BottomTab.Navigator>
        </NavigationContainer>
      </SafeAreaView>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
});



const HomeStack = createNativeStackNavigator();

function HomeStackScreen() {
  return (
    <HomeStack.Navigator headerShown={false}>
      <HomeStack.Screen name="Home" component={TournamentContainer} />
      <HomeStack.Screen name="DetailScreen" component={TournamentDetail} />
      <HomeStack.Screen name="JoinTournament" component={JoinTournament} />
      <HomeStack.Screen name="Profile" component={ProfileScreen} />
    </HomeStack.Navigator>
  );
}

const SearchStack = createNativeStackNavigator();

function SearchStackScreen() {
  return (
    <StoreStack.Navigator headerShown={false}>
      <StoreStack.Screen name="Search" component={Search} />
      {/* <StoreStack.Screen name="SearchResults" component={SearchResults}/> */}

    </StoreStack.Navigator>
  )
}

const StoreStack = createNativeStackNavigator();

function StoreStackScreen() {
  return (
    <StoreStack.Navigator>
      <StoreStack.Screen name="Store" component={StoreHome} />
      <StoreStack.Screen name="StorePurchase" component={StorePurchase} />
      <StoreStack.Screen name="Profile" component={ProfileScreen} />
    </StoreStack.Navigator>
  )
}