import React, { Component, useState } from 'react';
import MapView, { AnimatedRegion, Marker } from 'react-native-maps';
import { StyleSheet, Text, View, Dimensions, Alert, Button } from 'react-native';
import HotspotModal from '../components/Modal';

const randomNumber = (min, max) => {
    return Math.random() * (min - max) + min;
}
const randPoints = (min, max) => {
    return Math.floor(Math.random() * max) + min
}
const showAlert = () =>
    Alert.alert(
        "HOTSPOT FOUND!",
        "Click to collect",
        [
            {
                text: "Save for Later",
                onPress: () => console.log("Cancel Pressed"),
                style: "cancel",
            },
            {
                text: "Collect",
                onPress: () => Alert.alert(`You earned ${randPoints(80, 280)} points`),
                style: "confirm",
            },
        ],
        // {
        //     cancelable: true,
        //     onDismiss: () =>
        //         Alert.alert(
        //             "This alert was dismissed by tapping outside of the alert dialog."
        //         ),
        // }
    );
const CustomMarker = (props) => (
    <View
        style={{
            height: 45, width: 45,
            flex: 1,
            backgroundColor: "transparent",
            borderColor: "#007bff",
            borderWidth: 3,
            borderRadius: 25,
            elevation: 10
        }}
    >
        <Button onPress={() => showAlert()} title=""></Button>
    </View>
);


export default class Hotspots extends React.Component {

    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         latitude: this.props.location.latitude,
    //         longitude: this.props.location.longitude,
    //         routeCoordinates: [],
    //         distanceTravelled: 0,
    //         prevLatLng: {},
    //         coordinate: new AnimatedRegion({
    //             latitude: this.props.location.latitude,
    //             longitude: this.props.location.longitude
    //         })
    //     };
    // }

    makeHotspots = (lat, lon) => {
        const newLat = (randomNumber(lat - .004, lat + .004))
        const newLon = (randomNumber(lon - .004, lon + .004))
        // console.log(newLat, newLon)
        return [newLat, newLon]
    }

    markers = [
        {
            id: 1,
            coordinates: {
                latitude: this.makeHotspots(this.props.restaurants[0].coordinates.latitude, this.props.restaurants[0].coordinates.longitude)[0],
                longitude: this.makeHotspots(this.props.location.latitude, this.props.location.longitude)[1]
            },
            title: 'Marker 1'
        },
        {
            id: 2,
            coordinates: {
                latitude: this.makeHotspots(this.props.location.latitude, this.props.location.longitude)[0],
                longitude: this.makeHotspots(this.props.location.latitude, this.props.location.longitude)[1]
            },
            title: 'Marker 2'
        }
    ]


    // componentDidMount() {
    //     this.watchID = navigator.geolocation.watchPosition(
    //         position => {
    //             const { coordinate, routeCoordinates, distanceTravelled } = this.state;
    //             const { latitude, longitude } = position.coords;

    //             const newCoordinate = {
    //                 latitude,
    //                 longitude
    //             };
    //             if (Platform.OS === "android") {
    //                 if (this.marker) {
    //                     this.marker._component.animateMarkerToCoordinate(
    //                         newCoordinate,
    //                         500
    //                     );
    //                 }
    //             } else {
    //                 coordinate.timing(newCoordinate).start();
    //             }
    //             this.setState({
    //                 latitude,
    //                 longitude,
    //                 routeCoordinates: routeCoordinates.concat([newCoordinate]),
    //                 distanceTravelled:
    //                     distanceTravelled + this.calcDistance(newCoordinate),
    //                 prevLatLng: newCoordinate
    //             });
    //         },
    //         error => console.log(error),
    //         { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
    //     );
    // }

    // console.log(this.state.location)
    componentDidMount() {
        console.log(this.props)
        this.props.restaurants.map(item => {
            console.log(item)
        })
    }
    render() {
        return (

            <View style={styles.container}>
                {/* {this.state.latitude ? console.log(this.state.latitude) : null} */}
                <MapView style={styles.map}
                    initialRegion={{
                        latitude: this.props.location.latitude,
                        longitude: this.props.location.longitude,
                        latitudeDelta: 0.0222,
                        longitudeDelta: 0.0221,
                    }}
                    showsUserLocation={true}
                >
                    {this.markers.map(marker => (
                        <Marker key={marker.id}
                            coordinate={marker.coordinates}>
                            <CustomMarker text={marker.title} />
                        </Marker>
                    ))}
                    {/* <Marker coordinarte={{ latitude: 37.78825, longitude: -122.4324 }} />
                    <Marker coordinate={{ latitude: 37.98825, longitude: -122.4324 }} />
                    <Marker coordinate={{ latitude: 37.88825, longitude: -112.4324 }} /> */}
                </MapView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    map: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
    },
});