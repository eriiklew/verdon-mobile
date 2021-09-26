import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { responsiveHeight } from 'react-native-responsive-dimensions';

function Landing(props: any) {
    return (
        <View style={styles.gameLanding}>
            <Image style={styles.gameLandImg} source={props.img ? props.img : { uri: `https://picsum.photos/800/600` }} />
            <Text style={styles.gameLandText}>Tournaments</Text>
        </View>
    )
}
export default Landing;


const styles = StyleSheet.create({
    gameLanding: {
        height: responsiveHeight(30),
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    gameLandText: {
        fontSize: 36,
        color: 'white',
        fontWeight: '500'
    },
    gameLandImg: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0
    }
})