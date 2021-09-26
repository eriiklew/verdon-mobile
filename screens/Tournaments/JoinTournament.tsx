import React from 'react';
import { ScrollView, Text, View, StyleSheet, Image, TextInput, Button, TouchableOpacity } from 'react-native';
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import Leaderboard from '../../components/Leaderboard';
import CustomTimer from '../../utils/customTimer';
import SmallTimer from '../../utils/smallTimer';
import Timer from '../../utils/timer';

export default function JoinTournament(props) {
    console.log(JSON.stringify(props))
    const [gamertag, setGamertag] = React.useState(null)

    if (gamertag || props.route.params.gamertag) {
        return <TournamentLeaderboard header={gamertag ? gamertag : props.route.params.gamertag} />
    } else {
        return <EnterDetails setGT={setGamertag} />
    }
}
function TournamentLeaderboard(props) {
    return (
        <View style={styles.tLeaderBoard}>
            <View style={styles.container}>
                <Text style={styles.header}>
                    {props.header
                        ? props.header
                        : "Leaderboard"
                    }
                </Text>
                <Image style={styles.headerImg}
                    source={{ uri: `https://picsum.photos/800/600` }} />
                <Stats />
            </View>
            <Leaderboard />
        </View>
    )
}

function Stats() {
    return (
        <View style={styles.stats}>
            <Stat h="2145" p="RANK" />
            <Stat h="14 hours" p="TIME LEFT" />
            <Stat h="1" p="WINS" />
        </View>
    )
}
function Stat(props) {
    return (
        <View style={styles.stat}>
            <Text style={styles.pStat}>{props.p}</Text>
            <Text style={styles.hStat}>{props.h}</Text>

        </View>
    )
}

function EnterDetails(props) {
    const [text, onChangeText] = React.useState(null);
    const [number, onChangeNumber] = React.useState(null);

    return (
        <View style={styles.details}>
            <Text style={styles.timerText}>Time Left</Text>
            <CustomTimer
                timeToShow={['H', 'M', 'S']}
                timeLabels={{ h: 'Hours', m: 'Minutes', s: 'Seconds' }}
                color={{ color: 'black' }}
                size={32} time={60 * 60 * 15}
            />
            <Text style={styles.inputHeader}>Enter your gamertag or epic username</Text>
            <TextInput
                style={styles.input}
                onChangeText={onChangeText}
                placeholder="gamertag"
            />
            <TouchableOpacity disabled={text === null ? true : false} style={text !== null ? styles.inputBtn : { ...styles.inputBtn, ...styles.disabledBtn }} onPress={() => props.setGT(text)}><Text style={styles.btnText}>ENTER TOURNAMENT</Text></TouchableOpacity>

        </View>
    )
}

const styles = StyleSheet.create({
    tLeaderBoard: {
        flex: 1
    },
    details: {
        marginTop: 'auto',
        marginBottom: 'auto',
        padding: 20,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignContent: 'center',
    },
    timerText: {
        fontSize: 40,
        textAlign: 'center',
        fontWeight: '700',
        margin: 20
    },
    inputBtn: {
        backgroundColor: '#9DDAC6',
        margin: 12,
        padding: 10,
        borderRadius: 25
    },
    disabledBtn: {
        backgroundColor: '#9DDAC6',
        opacity: .5,
        margin: 12,
        padding: 10,
    },
    btnText: {
        textAlign: 'center',
        color: 'black',
        fontSize: 20,
        fontWeight: '500'
    },
    container: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignContent: 'center',
        backgroundColor: '#FF4848',
        padding: 20,
        minHeight: responsiveHeight(30)
    },
    header: {
        fontSize: 30,
        fontWeight: '700',
        color: 'white',
        textAlign: 'center'
    },
    headerImg: {
        height: 150,
        width: 150,
        alignSelf: 'center',
        borderRadius: 100,
        marginTop: 20
    },
    stats: {
        width: responsiveWidth(70),
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: 20,

    },
    stat: {
        width: '30%',
        margin: 'auto',
        color: 'white'
    },
    hStat: {
        fontSize: 18,
        color: 'white',
        fontWeight: '800',
        textAlign: 'center'
    },
    pStat: {
        fontSize: 12,
        color: 'white',
        textAlign: 'center',
        fontWeight: '500'
    },
    inputHeader: {
        margin: 12,
        textAlign: 'center',
        padding: 10,
        fontWeight: '500'
    },
    input: {
        height: 60,
        margin: 12,
        borderWidth: 1,
        fontSize: 20,
        padding: 10,
        paddingLeft: 20,
        borderRadius: 50
    }
})