import { isTemplateElement } from '@babel/types';
import React, { useState } from 'react';
import { ScrollView, Text, View, StyleSheet, Image, TextInput, Button, TouchableOpacity, FlatList } from 'react-native';
const searchData = [
    {
        id: 1,
        userData: {
            name: 'Erik Lew',
            age: 23,
            otherData: 'Software Engineer',
            image: ''
        }
    },
    {
        id: 2,
        userData: {
            name: 'Michael Scott',
            age: 45,
            otherData: 'Regional Manager'
        }
    },
    {
        id: 3,
        userData: {
            name: 'Mike Lowry',
            age: 34,
            otherData: 'Police Officer'
        }
    },
    {
        id: 4,
        userData: {
            name: 'Will Heckman',
            age: 24,
            otherData: 'Crypto Fund Consultant'
        }
    }
]

export default function Search(props) {

    const [search, setSearch] = useState('');
    const [searchResults, setSearchResults] = useState([])
    const handleChange = (e) => {
        setSearch(e.nativeEvent.text)
        handleSearch(search, searchData)
    }
    const handleSearch = (searchText, data) => {
        for (var n = 0; n <= data.length; n++) {
            if ((data[n].userData.name.includes(searchText)) && (searchResults.filter(item => {
                console.log(item.id)
                item.id !== data[n].id
            }))) {
                console.log(data[n].id)

                setSearchResults([...searchResults, data[n]])
                return;
            }
        }
    }
    console.log(searchResults)
    return (
        <View style={styles.searchScreen}>
            <TextInput style={styles.input} onChange={handleChange} placeholder='Search...' />
            <FlatList style={styles.results} data={searchResults}
                renderItem={({ item }) => <SearchItem data={item} />}>
            </FlatList>
        </View>
    )
}

const SearchItem = (props) => {
    console.log(props)
    return (
        <TouchableOpacity style={styles.resultItem}>
            {/* <ProfileImg image={props.data.userData.image} /> */}
            <SearchItemName text={props.data.userData.name} description={props.data.userData.otherData} />
            {/* <Text>Test</Text> */}

        </TouchableOpacity>
    )
}

const ProfileImg = (props) => {
    return (
        <View style={styles.resultImage}>
            <Image source={props.image} />
        </View>
    )
}

const SearchItemName = (props) => {
    return (
        <View style={styles.resultText}>
            <Text>
                {props.text}
            </Text>
            <Text>
                {props.description}
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({

    searchScreen: {
        flex: 1,
    },
    input: {
        height: 60,
        margin: 12,
        borderWidth: 1,
        fontSize: 20,
        padding: 10,
        paddingLeft: 20,
        borderRadius: 50
    },
    results: {
        margin: 12
    },
    resultItem: {
        flex: 1,
        flexDirection: 'row',
        borderRadius: 50,
        marginBottom: 10
    },
    resultImage: {
        width: 60,
        height: 60,
        borderRadius: 50,
        borderWidth: 1
    },
    resultText: {
        flex: 1,
        justifyContent: 'center',
        paddingLeft: 10,
        marginRight: 10,
        marginLeft: 10,
        borderRadius: 50
    }
})