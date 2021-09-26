import * as React from 'react';
import { Image, Text, View, SafeAreaView, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import CustomTimer from '../utils/customTimer';

// import EditScreenInfo from '../components/EditScreenInfo';

const sampleData = [
    {
        id: 1,
        eName: 'Fortnite Tournament',
        image: '../assets/images/fort.jpeg',
        placing: '3rd Place',
        wins: '12',
        wl: 'Lost 300p'
    },
    {
        id: 2,
        eName: 'Trivia Battle',
        image: '../assets/images/fort.jpeg',
        placing: '1st Place',
        wins: '4',
        wl: 'Won 500p'
    }
]

const handleClick = ({ Navigation }: { Navigation: any }) => {
    Navigation.navigate()
}

export default function Profile(props) {
    console.log(props)
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <View style={styles.profileLanding}>
                    <Image style={styles.profileImg} source={require(`../assets/images/fort.jpeg`)} />
                    <View style={styles.profileInfo}>
                        <Text style={styles.title}>Erik Lew</Text>
                        <ProfileStats />
                    </View>
                </View>
                <View>
                    <Text style={styles.eHeader}>Ongoing Events</Text>
                    <View style={styles.pEvents}>
                        <CurrentEvent nav={() => props.nav.navigate('JoinTournament', { gamertag: 'eriiklew' })} />
                    </View>
                </View>
                <View>
                    <Text style={styles.eHeader}>Past Events</Text>
                    <View style={styles.pEvents}>
                        {sampleData.map(item => {
                            return <PastEvent key={item.id} item={item} />
                        })}
                    </View>
                </View>

            </ScrollView>
        </SafeAreaView>
    );
}
function ProfileStats() {
    return (
        <View style={styles.stats}>
            <View style={styles.stat}>
                <Text style={styles.h}>155211</Text>
                <Text style={styles.p}>Points</Text>
            </View>
            <View style={styles.stat}>
                <Text style={styles.h}>14</Text>
                <Text style={styles.p}>Trophies</Text>
            </View>
            <View style={styles.stat}>
                <Text style={styles.h}>27</Text>
                <Text style={styles.p}>Level</Text>
            </View>
        </View>
    )
}
function CurrentEvent(props) {
    return (
        <TouchableOpacity onPress={props.nav} style={styles.pEvent}>
            <Image style={styles.ceImage} source={{ uri: `https://picsum.photos/800/600` }} />
            <View style={styles.eStatBar}><Text style={styles.eName}>Fortnite</Text><Text style={styles.win}>Ongoing</Text></View>
            <View style={styles.eStatBar}><Text>Wins - 1</Text><Text>Rank: 2145</Text></View>
            <View style={styles.eStatBar}>
                <Text>Time Left:</Text>
                <CustomTimer
                    timeToShow={['H', 'M', 'S']}
                    timeLabels={{ h: 'Hours', m: 'Minutes', s: 'Seconds' }}
                    color={{ color: 'black' }}
                    size={16} time={60 * 60 * 15}
                />
            </View>
        </TouchableOpacity>
    )
}

function PastEvent(data: any) {
    return (
        <TouchableOpacity style={styles.pEvent}>
            <Image style={styles.peImage} source={{ uri: `https://picsum.photos/800/600` }} />
            <View style={styles.eStatBar}><Text style={styles.eName}>{data.item.eName}</Text><Text style={styles.loss}>{data.item.wl}</Text></View>
            <View style={styles.eStatBar}><Text>Wins - {data.item.wins}</Text><Text>{data.item.placing}</Text></View>
        </TouchableOpacity>
    )
}





const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'white',
        width: responsiveWidth(100)

    },
    profileLanding: {
        height: 'auto',
        width: responsiveWidth(100),
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        // backgroundColor: '#9DDAC6'

    },
    profileImg: {
        height: 100,
        width: 100,
        borderRadius: 100,
        margin: 20
    },
    profileInfo: {
        // width: '100%',
        display: 'flex',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 20,
    },
    stats: {
        width: 'auto',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        marginTop: 20
        // backgroundColor: 'blue'
    },
    stat: {
        marginRight: 20,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignContent: 'center',
        textAlign: 'center'

    },
    h: {
        fontSize: 20,
        fontWeight: '500'
    },
    eHeader: {
        marginTop: 40,
        width: responsiveWidth(100),
        textAlign: 'center',
        fontSize: 18,
        fontWeight: '600'
    },
    pEvents: {
        width: responsiveWidth(100),
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        padding: 20,
        paddingBottom: 0
    },
    pEvent: {
        backgroundColor: 'white',
        padding: 20,
        width: '100%',
        margin: 5,
        marginBottom: 0
    },
    eName: {
        fontWeight: '500',

    },
    peImage: {
        width: '100%',
        height: 90,
        borderRadius: 12
    },

    eStatBar: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10
    },
    loss: {
        color: 'red'
    },
    win: {
        color: 'green'
    },
    p: {

    },
    ceImage: {
        width: '100%',
        height: 140,
        borderRadius: 12
    }

});
