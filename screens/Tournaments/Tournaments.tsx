import React from 'react';
import { Image, SafeAreaView, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { responsiveHeight, responsiveWidth, responsiveFontSize } from "react-native-responsive-dimensions";
import { Text, View, Button } from 'react-native';
// import {gStopImg} from '../assets/images/gstop.png';
import Timer from '../../utils/timer';
import SmallTimer from '../../utils/smallTimer';
import Landing from '../../components/Landing';
// import PeopleJoined from '../components/peopleJoined';
// import { LogBox } from 'react-native';



const testData = [
    {
        id: 12345,
        gameName: 'Fortnite Tournament',
        gameDescription: 'Occaecat cillum consectetur nisi veniam culpa ad Lorem irure eiusmod dolore consequat enim elit ex. Aliquip excepteur elit tempor aliqua do nostrud velit aute labore fugiat dolore eiusmod minim velit. Non minim consectetur et anim non aliqua.\bOccaecat cillum consectetur nisi veniam culpa ad Lorem irure eiusmod dolore consequat enim elit ex. Aliquip excepteur elit tempor aliqua do nostrud velit aute labore fugiat dolore eiusmod minim velit. Non minim consectetur et anim non aliqua.',
        gameExpiration: '14 Days',
        enterPrice: '2400 Points',
        prize: '$100 GameStop Gift Card',
        mainImg: '../assets/images/fort.jpeg',
        img: `../assets/images/gstop.png`
    },
    {
        id: 54321,
        gameName: 'Last Man Standing Trivia',
        gameDescription: 'Occaecat cillum consectetur nisi veniam culpa ad Lorem irure eiusmod dolore consequat enim elit ex. Aliquip excepteur elit tempor aliqua do nostrud velit aute labore fugiat dolore eiusmod minim velit. Non minim consectetur et anim non aliqua.\bOccaecat cillum consectetur nisi veniam culpa ad Lorem irure eiusmod dolore consequat enim elit ex. Aliquip excepteur elit tempor aliqua do nostrud velit aute labore fugiat dolore eiusmod minim velit. Non minim consectetur et anim non aliqua.',
        gameExpiration: '17 Days',
        enterPrice: '1500 Points',
        prize: '3 Months Spotify Premium',
        mainImg: '../assets/images/fort.jpeg',
        img: `../assets/images/gstop.png`
    },
    {
        id: 98754,
        gameName: 'Mini Game Tournament',
        gameDescription: 'Occaecat cillum consectetur nisi veniam culpa ad Lorem irure eiusmod dolore consequat enim elit ex. Aliquip excepteur elit tempor aliqua do nostrud velit aute labore fugiat dolore eiusmod minim velit. Non minim consectetur et anim non aliqua.\bOccaecat cillum consectetur nisi veniam culpa ad Lorem irure eiusmod dolore consequat enim elit ex. Aliquip excepteur elit tempor aliqua do nostrud velit aute labore fugiat dolore eiusmod minim velit. Non minim consectetur et anim non aliqua.',
        gameExpiration: '5 Days',
        enterPrice: '500 Points',
        prize: '1500 Points',
        mainImg: '../assets/images/fort.jpeg',
        img: `../assets/images/gstop.png`
    },
    {
        id: 12546,
        gameName: 'Basketball Tournament',
        gameDescription: 'Occaecat cillum consectetur nisi veniam culpa ad Lorem irure eiusmod dolore consequat enim elit ex. Aliquip excepteur elit tempor aliqua do nostrud velit aute labore fugiat dolore eiusmod minim velit. Non minim consectetur et anim non aliqua.\bOccaecat cillum consectetur nisi veniam culpa ad Lorem irure eiusmod dolore consequat enim elit ex. Aliquip excepteur elit tempor aliqua do nostrud velit aute labore fugiat dolore eiusmod minim velit. Non minim consectetur et anim non aliqua.',
        gameExpiration: '14 Days',
        enterPrice: '2400 Points',
        prize: '$100 GameStop Gift Card',
        mainImg: '../assets/images/fort.jpeg',
        img: `../assets/images/gstop.png`
    },
    {
        id: 56439,
        gameName: 'Baseball Tournament',
        gameDescription: 'Occaecat cillum consectetur nisi veniam culpa ad Lorem irure eiusmod dolore consequat enim elit ex. Aliquip excepteur elit tempor aliqua do nostrud velit aute labore fugiat dolore eiusmod minim velit. Non minim consectetur et anim non aliqua.\bOccaecat cillum consectetur nisi veniam culpa ad Lorem irure eiusmod dolore consequat enim elit ex. Aliquip excepteur elit tempor aliqua do nostrud velit aute labore fugiat dolore eiusmod minim velit. Non minim consectetur et anim non aliqua.',
        gameExpiration: '17 Days',
        enterPrice: '1500 Points',
        prize: '3 Months Spotify Premium',
        mainImg: '../assets/images/fort.jpeg',
        img: `../assets/images/gstop.png`
    },
    {
        id: 91327,
        gameName: 'Scavenger Hunt',
        gameDescription: 'Occaecat cillum consectetur nisi veniam culpa ad Lorem irure eiusmod dolore consequat enim elit ex. Aliquip excepteur elit tempor aliqua do nostrud velit aute labore fugiat dolore eiusmod minim velit. Non minim consectetur et anim non aliqua.\bOccaecat cillum consectetur nisi veniam culpa ad Lorem irure eiusmod dolore consequat enim elit ex. Aliquip excepteur elit tempor aliqua do nostrud velit aute labore fugiat dolore eiusmod minim velit. Non minim consectetur et anim non aliqua.',
        gameExpiration: '14 Days',
        enterPrice: '2400 Points',
        prize: '$100 GameStop Gift Card',
        mainImg: '../assets/images/fort.jpeg',
        img: `../assets/images/gstop.png`
    },
    {
        id: 82516,
        gameName: 'Last Man Standing Trivia',
        gameDescription: 'Occaecat cillum consectetur nisi veniam culpa ad Lorem irure eiusmod dolore consequat enim elit ex. Aliquip excepteur elit tempor aliqua do nostrud velit aute labore fugiat dolore eiusmod minim velit. Non minim consectetur et anim non aliqua.\bOccaecat cillum consectetur nisi veniam culpa ad Lorem irure eiusmod dolore consequat enim elit ex. Aliquip excepteur elit tempor aliqua do nostrud velit aute labore fugiat dolore eiusmod minim velit. Non minim consectetur et anim non aliqua.',
        gameExpiration: '17 Days',
        enterPrice: '1500 Points',
        prize: '3 Months Spotify Premium',
        mainImg: '../assets/images/fort.jpeg',
        img: `../assets/images/gstop.png`
    },
    {
        id: 72411,
        gameName: 'Fortnite Tournament',
        gameDescription: 'Occaecat cillum consectetur nisi veniam culpa ad Lorem irure eiusmod dolore consequat enim elit ex. Aliquip excepteur elit tempor aliqua do nostrud velit aute labore fugiat dolore eiusmod minim velit. Non minim consectetur et anim non aliqua.\bOccaecat cillum consectetur nisi veniam culpa ad Lorem irure eiusmod dolore consequat enim elit ex. Aliquip excepteur elit tempor aliqua do nostrud velit aute labore fugiat dolore eiusmod minim velit. Non minim consectetur et anim non aliqua.',
        gameExpiration: '14 Days',
        enterPrice: '2400 Points',
        prize: '$100 GameStop Gift Card',
        mainImg: '../assets/images/fort.jpeg',
        img: `../assets/images/gstop.png`
    },
    {
        id: 69210,
        gameName: 'Last Man Standing Trivia',
        gameDescription: 'Occaecat cillum consectetur nisi veniam culpa ad Lorem irure eiusmod dolore consequat enim elit ex. Aliquip excepteur elit tempor aliqua do nostrud velit aute labore fugiat dolore eiusmod minim velit. Non minim consectetur et anim non aliqua.\bOccaecat cillum consectetur nisi veniam culpa ad Lorem irure eiusmod dolore consequat enim elit ex. Aliquip excepteur elit tempor aliqua do nostrud velit aute labore fugiat dolore eiusmod minim velit. Non minim consectetur et anim non aliqua.',
        gameExpiration: '17 Days',
        enterPrice: '1500 Points',
        prize: '3 Months Spotify Premium',
        mainImg: '../assets/images/fort.jpeg',
        img: `../assets/images/gstop.png`
    },
    {
        id: 90210,
        gameName: 'Fortnite Tournament',
        gameDescription: 'Occaecat cillum consectetur nisi veniam culpa ad Lorem irure eiusmod dolore consequat enim elit ex. Aliquip excepteur elit tempor aliqua do nostrud velit aute labore fugiat dolore eiusmod minim velit. Non minim consectetur et anim non aliqua.\bOccaecat cillum consectetur nisi veniam culpa ad Lorem irure eiusmod dolore consequat enim elit ex. Aliquip excepteur elit tempor aliqua do nostrud velit aute labore fugiat dolore eiusmod minim velit. Non minim consectetur et anim non aliqua.',
        gameExpiration: '14 Days',
        enterPrice: '2400 Points',
        prize: '$100 GameStop Gift Card',
        mainImg: '../assets/images/fort.jpeg',
        img: `../assets/images/gstop.png`
    },
    {
        id: 72176,
        gameName: 'Last Man Standing Trivia',
        gameDescription: 'Occaecat cillum consectetur nisi veniam culpa ad Lorem irure eiusmod dolore consequat enim elit ex. Aliquip excepteur elit tempor aliqua do nostrud velit aute labore fugiat dolore eiusmod minim velit. Non minim consectetur et anim non aliqua.\bOccaecat cillum consectetur nisi veniam culpa ad Lorem irure eiusmod dolore consequat enim elit ex. Aliquip excepteur elit tempor aliqua do nostrud velit aute labore fugiat dolore eiusmod minim velit. Non minim consectetur et anim non aliqua.',
        gameExpiration: '17 Days',
        enterPrice: '1500 Points',
        prize: '3 Months Spotify Premium',
        mainImg: '../assets/images/fort.jpeg',
        img: `../assets/images/gstop.png`
    }
]
const data = [
    { userName: 'Joe', highScore: 52 },
    { userName: 'Jenny', highScore: 120 },
    { userName: 'Louis', highScore: 52 },
    { userName: 'Jessi', highScore: 76 },
    { userName: 'Jackson', highScore: 52 },
    { userName: 'Maren', highScore: 88 },
    { userName: 'Emily', highScore: 77 },
    { userName: 'Reilly', highScore: 132 },

]


const TournamentContainer = (props) => {
    function handleClick(item: any) {
        props.navigation.navigate('DetailScreen', { item: item })
    }
    function goToUser(item: any) {
        props.navigation.navigate('ProfileScreen', { item: item })
    }
    function HorizontalSwipe(props: any) {
        return (
            <View style={{ flex: 1 }}>
                <Text style={styles.sectionHeader}>{props.category}</Text>
                <ScrollView style={styles.horizontalScroll} horizontal={true}>
                    {testData.slice(0, 4).map(item => {
                        return <GameCard key={item.id} item={item} />
                    })}
                </ScrollView>
            </View>
        )
    }
    function GameCard(props: any) {
        return (
            <View style={styles.gameCard}>
                <TouchableOpacity onPress={() => handleClick(props.item)}>
                    <Image style={styles.gameImg} source={{ uri: `https://picsum.photos/800/600` }}
                        height={responsiveHeight(50)} />
                    {/* <Text>{props.item.gameDescription}</Text> */}
                    <View style={styles.cardTitle}>
                        <Text style={styles.cardHeader} numberOfLines={2}>{props.item.gameName}</Text>
                        {/* <PeopleJoined /> */}
                        <SmallTimer time={60 * 60 * 140} size={16} />
                    </View>
                </TouchableOpacity>
            </View>
        )
    }



    // function Detail() {
    //     return (
    //         <ScrollView>
    //             <Image style={{width: responsiveWidth(100), maxHeight: responsiveHeight(30)}} source={{ uri: `https://picsum.photos/800/600`}}/>
    //             <Text>Testing</Text>
    //         </ScrollView>
    //     )
    // }


    return (
        <SafeAreaView>
            <ScrollView>
                {/* <Leaderboard 
                data={data} 
                sortBy='highScore' 
                labelBy='userName'/> */}
                <Landing text={'Welcome to Tournaments by Verdon'} img={{ uri: `https://picsum.photos/800/600` }} />
                <HorizontalSwipe category={`Game Tournaments`} navigation={props.nav} />
                <HorizontalSwipe category={`Sports Tournaments`} navigation={props.nav} />
                <Landing text={'Welcome to Tournaments by Verdon'} img={{ uri: `https://picsum.photos/800/600` }} />
            </ScrollView>
        </SafeAreaView>
    )
}
export default TournamentContainer


const styles = StyleSheet.create({
    cardTitle: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignContent: 'center',
        width: '100%',
        padding: 10
    },
    sectionHeader: {
        fontSize: 20,
        fontWeight: '500',
        margin: 15
    },
    horizontalScroll: {
    },
    gameContainer: {
        flex: 1,
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    cardHeader: {
        fontSize: 18,
        fontWeight: '600',
        margin: 10
    },
    paragraph: {
        margin: 10
    },
    cardExp: {
        marginLeft: 10
    },
    gameCard: {
        flex: 1,
        height: responsiveHeight(30),
        width: responsiveWidth(90),
        paddingLeft: 0,
        paddingRight: 0,
        paddingTop: 5,
        paddingBottom: 5,
        marginRight: 15,
        marginLeft: 5,

        // backgroundColor: 'white',
        marginBottom: 10,
        overflow: 'hidden'
    },
    gameImg: {
        maxHeight: responsiveHeight(20),
        width: '100%',
        borderRadius: 12
    }
})








