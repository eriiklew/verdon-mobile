import React from 'react';
import { Button, Image, ScrollView, View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { responsiveHeight, responsiveWidth } from "react-native-responsive-dimensions";
import Timer from '../../utils/timer';

export default function TournamentDetail(props: any) {
    const data = props.route.params.item

    function joinContestHandler() {

    }
    return (
        <View style={{ flex: 1 }}>
            <ScrollView style={styles.container}>
                {/* <Image style={styles.fort} source={require(`../assets/images/fort.jpeg`)}/> */}
                <Image style={styles.fort} source={props.img ? props.img : { uri: `https://picsum.photos/800/600` }} />
                <Text style={styles.headerText}>{data.gameName}</Text>
                {/* <Text style={styles.eText}></Text> */}
                <Text style={styles.pText}>{data.gameDescription}</Text>

                <Text style={styles.dText}></Text>
                {/* <Text style={styles.dText}>{data.gameExpiration}</Text> */}
                <View style={styles.giftBar}>
                    <Image style={styles.giftImg}
                        source={require(`../../assets/images/gstop.png`)} />
                </View>
            </ScrollView>
            <View style={styles.actions}>
                <Timer time={60 * 60 * 24} />
                <TouchableOpacity onPress={() => {
                    props.navigation.navigate('JoinTournament', { data: 'this is data' })
                }} style={styles.gBtn}>
                    <Text style={{ textAlign: 'center' }}>JOIN - {data.enterPrice.slice(0, 4)}</Text>
                </TouchableOpacity>
            </View>


        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // height: responsiveHeight(100),
        padding: 20,

        // position: 'relative',
    },
    gameLandImg: {
        maxHeight: responsiveHeight(30),
        width: responsiveWidth(100)
    },
    headerText: {
        fontSize: 30,
        fontWeight: '700',
        marginTop: 40,
        textAlign: 'center'
    },
    pText: {
        fontSize: 18,
        marginTop: 10,
        marginBottom: 40,
        textAlign: 'center'
    },
    dText: {
        fontSize: 20,
        fontWeight: '600',
        textAlign: 'center'
    },
    eText: {
        color: '#FF4848',
        fontWeight: '600',
        marginTop: 15,
        textAlign: 'center'
    },
    gBtn: {
        width: "50%",
        textAlign: 'center',
        maxWidth: responsiveWidth(50),
        borderRadius: 12,
        backgroundColor: "#C2FFD9",
        padding: 20,
    },
    actions: {
        position: 'absolute',
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignContent: 'center',
        padding: 20,
        // width: '100%',
        // top: '70%',
        right: 20,
        left: 20,
        bottom: 20,
        backgroundColor: 'black',
        opacity: .8,
        zIndex: 20,
        borderRadius: 12
    },
    giftBar: {
        maxWidth: '100%',
        display: 'flex',
        flexDirection: 'column',
        margin: 'auto',
        // display: 'flex',
        // flexDirection: 'row',
    },
    giftImg: {
        maxWidth: '100%',
        marginBottom: 120,
        borderRadius: 12
        // minWidth: 100,
        // minHeight: 100,
    },
    fort: {
        width: '100%',
        height: responsiveHeight(20),
        borderRadius: 12
    }

})