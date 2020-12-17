import React from 'react';
import { Dimensions, StyleSheet, Text, TextInput, View, TouchableHighlight, Image } from 'react-native';

function DetailComponent(props) {
    const {idProduct, code, name, description, price, quantity} = props;
    const randomNumber = Math.floor(Math.random() * 10) + 1;
    const randomImage = require('../assets/images/' + randomNumber.toString() + '.jpg');
    const apiEndpoint = 'http://localhost:4000';

    const deleteProduct = async (ProductId) => {
        let confirm = window.confirm("Are you sure to delete this product?");
        if (confirm) {
            const response = await fetch(`${apiEndpoint}/deleteProduct`,
                {
                    method: 'DELETE',
                    headers: {
                        Accept: 'aplication/json',
                        'Content-Type': 'aplication/json',
                    },
                    body: JSON.stringify({ id: ProductId })
                }
            );
            console.log(ProductId);
            const dataResponse = await response.json();
            console.log(dataResponse);
        }
    }

    return(
        <View style={styles.box1}>
            <View style={styles.box2}>
                <Text style={styles.textStyle}>Create new product</Text>
                <Image source={randomImage} style={styles.imageStyle}></Image>
                <Text style={styles.input} placeholder='Code'>{props.code}</Text>
                <Text style={styles.input} placeholder='Name'>{props.name}</Text>
                <Text style={styles.input} placeholder='Description'>{props.description}</Text>
                <Text style={styles.numericInput} placeholder='Price'>{props.price}</Text>
                <Text style={styles.numericInput} placeholder='Quantity'>{props.quantity}</Text>
            </View>
            <TouchableHighlight style={styles.buttonStyle}>
                <Text>
                    Edit
                </Text>
            </TouchableHighlight>
            <TouchableHighlight style={styles.buttonStyle} onPress={() => deleteProduct(props.idProduct)}>
                <Text>
                    Delete
                </Text>
            </TouchableHighlight>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      flexDirection: 'column'
    },
    box1: {
      flex: 1,
      backgroundColor: '#5886E1',
      alignItems: 'flex-start',
      
    },
    box2: {
      flex: 2,
      backgroundColor: '#fff',
      alignItems: 'flex-start',
      marginTop: 40,
      borderRadius: 20,
      elevation: 2,
      padding: 15,
      margin: 30,
      width: Dimensions.get('screen').width*0.7,
    },
    textStyle: {
      fontSize: 24,
    },
    input: {
      marginTop: 5,
      borderWidth: 1,
      borderColor: '#000',
      width: Dimensions.get('screen').width*0.6,
      borderRadius: 10,
      padding: 5,
      backgroundColor: '#fff',
  
    },
    numericInput: {
      marginTop: 5,
      borderWidth: 1,
      borderColor: '#000',
      width: Dimensions.get('screen').width*0.5,
      borderRadius: 10,
      padding: 5,
      backgroundColor: '#fff',
  
    },
    buttonStyle: {
      borderRadius: 25,
      padding: 10,
      width: Dimensions.get('screen').width*0.4,
      borderWidth: 1,
      margin: 10,
      backgroundColor: '#FD8024'
  
    },
    imageStyle: {
      width: Dimensions.get('window').width*0.4,
      height: Dimensions.get('window').height*0.2,
    }
  
  });

export default DetailComponent;
