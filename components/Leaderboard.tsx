import React from 'react';
import { FlatList, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { responsiveWidth } from 'react-native-responsive-dimensions';

const styles = StyleSheet.create({
    container: {
        width: '100%'
        // flex: 1
    },
    item: {
        padding: 10,
        fontSize: 18,
        height: 44,
    },
    userRank: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: 'lightgrey'
    },
    rankHeader: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        backgroundColor: '#FFD371',
        padding: 10
    },
    rank: {
        width: 70,
        // color: '#9DDAC6',
        fontWeight: '600',
        marginRight: 20,
        paddingLeft: 20
    },
    user: {
        width: 170,
        fontWeight: '600'
    },
    wins: {
        width: 50,
        fontWeight: '600',
        marginRight: 50
    },
    timeEntered: {
        width: '100%',
        fontWeight: '600',
        paddingRight: 20
    }
});
const leaderboardData = [
    { key: 'Devin', score: 14, rank: 1, timeEntered: '7d 1h' },
    { key: 'Dan', score: 12, rank: 2, timeEntered: '5d 7h' },
    { key: 'Dominic', score: 11, rank: 3, timeEntered: '9d 2h' },
    { key: 'Jackson', score: 9, rank: 4, timeEntered: '8d 5h' },
    { key: 'James', score: 6, rank: 5, timeEntered: '3d 13h' },
    { key: 'Joel', score: 5, rank: 6, timeEntered: '5d 12h' },
    { key: 'John', score: 4, rank: 7, timeEntered: '4d 1h' },
    { key: 'Jillian', score: 2, rank: 8, timeEntered: '3d 2h' },
    { key: 'Jimmy', score: 2, rank: 8, timeEntered: '3d 8h' },
    { key: 'Julie', score: 1, rank: 9, timeEntered: '2d 3h' },
]

const Leaderboard = () => {
    return (
        <ScrollView horizontal={true}>
            <View style={styles.container}>
                <UserRank pClass={styles.rankHeader} data={{ key: 'USERNAME', score: 'WINS', rank: 'RANK', timeEntered: 'TIME ENTERED' }} />
                <FlatList
                    data={leaderboardData}
                    renderItem={({ item }) => <UserRank data={item} pClass={styles.userRank} />}
                />
            </View>
        </ScrollView>
    );
}

export default Leaderboard;

function UserRank(props) {
    return (
        <TouchableOpacity style={props.pClass}>
            <Text style={styles.rank}>{props.data.rank}</Text>
            <Text style={styles.user}>{props.data.key}</Text>
            <Text style={styles.wins}>{props.data.score}</Text>
            <Text style={styles.timeEntered}>{props.data.timeEntered}</Text>
        </TouchableOpacity>
    )
}