import React from 'react';
import { ScrollView, Text, View, StyleSheet, Touchable, TouchableOpacity, Image } from 'react-native';
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';


const storeData = [
    {
        id: 1,
        name: '500 Points',
        type: 'Points',
        price: 99
    },
    {
        id: 2,
        name: '1000 Points',
        type: 'Points',
        price: 199
    },
    {
        id: 3,
        name: '1500 Points',
        type: 'Points',
        price: 999
    },
    {
        id: 4,
        name: '2500 Points',
        type: 'Points',
        price: 1999
    },
    {
        id: 5,
        name: '1 Hour XP Boost',
        type: 'XP',
        price: 499
    },
    {
        id: 6,
        name: '2 Hour XP Boost',
        type: 'XP',
        price: 999
    },
    {
        id: 7,
        name: '12 Hour XP Boost',
        type: 'XP',
        price: 1499
    },
    {
        id: 8,
        name: '24 Hour XP Boost',
        type: 'XP',
        price: 2499
    },
    {
        id: 9,
        name: '1 Hour Hotspot Boost',
        type: 'XP',
        price: 499
    },
    {
        id: 10,
        name: '1 Hour Hotspot Boost',
        type: 'Hotspot Boost',
        price: 499
    },
    {
        id: 11,
        name: '2 Hour Hotspot Boost',
        type: 'Hotspot Boost',
        price: 999
    },
    {
        id: 12,
        name: '12 Hour Hotspot Boost',
        type: 'Hotspot Boost',
        price: 1499
    },
    {
        id: 13,
        name: '24 Hour Hotspot Boost',
        type: 'Hotspot Boost',
        price: 2499
    }
]
const pointDeals = [
    {
        id: 1,
        name: '2500 Points',
        price: 1499,
        value: 2499
    },
    {
        id: 2,
        name: '5000 Points',
        price: 3999,
        value: 4999
    }
]

const xpdeals = [
    {
        id: 1,
        name: '5X 1 Hour XP Boost',
        price: 1499,
        value: 2499
    },
    {
        id: 2,
        name: '2X 12 Hour XP Boost',
        price: 3999,
        value: 4999
    }
]

const hsdeals = [
    {
        id: 1,
        name: '5X 1 Hour Hotspot Boost',
        price: 1499,
        value: 2499
    },
    {
        id: 2,
        name: '2X 12 Hour Hotspot Boost',
        price: 3999,
        value: 4999
    }
]



export default function StoreHome(props) {
    const points = []
    const xp = [];
    const hs = []
    const mapItems = (data) => {
        for (var i = 0; i < data.length; i++) {
            if (data[i].type === "Points") {
                points.push(data[i])
            } else if (data[i].type === "XP") {
                xp.push(data[i])
            } else if (data[i].type === "Hotspot Boost") {
                hs.push(data[i])
            } else {
                console.log('no match found')
            }
        }
    }
    mapItems(storeData)
    return (
        <ScrollView style={styles.container}>
            <StoreSection key={1} section="Buy Points" dealText="Save on Points" data={points} deals={pointDeals} nav={props.navigation} />
            <StoreSection key={2} section="XP Boosts" dealText="Save on XP Boosts" data={xp} deals={xpdeals} nav={props.navigation} />
            <StoreSection key={3} section="Hotspot Boosts" dealText="Save on Hotspot Boosts" data={hs} deals={hsdeals} nav={props.navigation} />
        </ScrollView>
    )
}

function StoreSection(props) {

    return (
        <View style={styles.storeSection}>
            <Text style={styles.sectionHeader}>{props.section}</Text>
            <ScrollView horizontal={true}>
                {props.data.map(item => <StoreItem key={item.id} data={item} nav={props.nav} />)}
            </ScrollView>
            <View style={styles.dealSection}>
                <Text style={styles.dealText}>{props.dealText}</Text>
                <ScrollView horizontal={true}>
                    {props.deals.map(item => <Deal key={item.id} data={item} nav={props.nav} />)}
                </ScrollView>
            </View>
        </View>
    )
}

function StoreItem(props) {
    console.log(props.nav)
    return (
        <TouchableOpacity style={styles.storeItem} onPress={() => props.nav.navigate('StorePurchase', { data: props.data })}>
            <Image style={styles.itemImg} source={{ uri: `https://picsum.photos/800/600` }} />
            <Text style={styles.itemHeader}>{props.data.name}</Text>
            <Text style={styles.itemPrice}>{`$${props.data.price / 100}`}</Text>
        </TouchableOpacity>
    )
}

function Deal(props) {
    console.log(props.nav)
    return (
        <TouchableOpacity style={styles.storeDeal} onPress={() => props.nav.navigate('StorePurchase', { data: props.data })}>
            <Image style={styles.dealImg} source={{ uri: `https://picsum.photos/800/600` }} />
            <Text style={styles.dealHeader}>{props.data.name}</Text>
            <View style={styles.dealPrices}><Text style={styles.valuePrice}>{`$${props.data.value / 100}`}</Text><Text style={styles.dealPrice}>{`$${props.data.price / 100}`}</Text></View>
        </TouchableOpacity>
    )
}


const styles = StyleSheet.create({
    storeSection: {
        marginBottom: 20
    },
    storeItem: {
        marginRight: 20
    },
    itemImg: {
        width: responsiveWidth(35),
        height: responsiveHeight(10),
        borderRadius: 12
    },
    itemHeader: {
        fontWeight: '700',
        marginTop: 10,
        fontSize: 16,
        width: responsiveWidth(35),
        marginBottom: 5
    },
    itemPrice: {
        color: 'grey'
    },
    container: {
        padding: 20
    },
    sectionHeader: {
        fontSize: 30,
        fontWeight: '600',
        marginBottom: 20
    },
    dealSection: {
        marginTop: 20
    },
    storeDeal: {
        marginRight: 20
    },
    dealImg: {
        width: responsiveWidth(45),
        height: responsiveHeight(30),
        borderRadius: 12
    },
    dealHeader: {
        fontWeight: '700',
        marginTop: 10,
        fontSize: 16,
        width: responsiveWidth(35),
        marginBottom: 5
    },
    dealPrice: {
        color: 'black'
    },
    dealPrices: {
        display: 'flex',
        flexDirection: 'row'
    },
    valuePrice: {
        color: 'grey',
        marginRight: 5,
        textDecorationLine: 'line-through',
        textDecorationStyle: 'solid'
    },
    dealText: {
        marginBottom: 20,
        fontSize: 20,

    }

})