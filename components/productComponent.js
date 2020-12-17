import React from 'react';
import { Dimensions, StyleSheet, Text, TextInput, View, TouchableHighlight, Image } from 'react-native';

function ProductComponent(props) {
    const {idProduct, code, name, description, price, quantity} = props;
    const randomNumber = Math.floor(Math.random() * 10) + 1;
    const randomImage = require('../assets/images/' + randomNumber.toString() + '.jpg');
    return(
        <View style={styles.container}>
            <View style={styles.box1}>
                <Image source={randomImage} style={styles.imageStyle}></Image>
            </View>
            <View style={styles.box2}>
                <Text>Code: {props.code}</Text>
                <Text>{props.name}</Text>
                <Text>{props.description}</Text>
                <Text>Price: {props.price}</Text>
                <Text>Qty: {props.quantity}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 2,
        backgroundColor: '#fff',
        flexDirection: 'column',
        margin: 10,
        borderRadius: 20,
        borderWidth: 1,
        flexDirection: 'row'
    },
    box1: {
        flex: 1,
        backgroundColor: '#fff',
        marginTop: 5,
        padding: 5,
        margin: 5,
        width: 200,
        height: 220
      },
      box2: {
        flex: 1,
        backgroundColor: '#fff',
        marginTop: 10,
        padding: 15,
        margin: 10,
        width: 200,
        height: 300
      },
      box3: {
        flex: 1,
        backgroundColor: '#fff',
        marginTop: 40,
        padding: 15,
        margin: 10,
        width: 200,
        height: 300
      },
      imageStyle: {
        width: 200,
        height: 200,
      }
});

export default ProductComponent;