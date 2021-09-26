import React from 'react';
import { Button, Text, View } from 'react-native';

const StorePurchase = (props) => {
    console.log(props)
    return (
        <View>
            <Text>Testing Store Purchase</Text>
            <Text>{JSON.stringify(props.route.params.data)}</Text>
            <Text></Text>
            <Text></Text>
            <Text></Text>
            <Text></Text>
            <Button title={`Purchase $${JSON.stringify(props.route.params.data.price)}`} onPress={() => console.log('item purchased')} />
        </View>
    )
}
export default StorePurchase;

