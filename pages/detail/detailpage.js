import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import { Dimensions, StyleSheet, Text, View, TouchableHighlight, Image, FlatList, Button } from 'react-native';
import FormComponent from '../../components/formComponent';
import DetailComponent from '../../components/detailComponent';


const DetailPage = ({route, navigation}) => {
    const randomNumber = Math.floor(Math.random() * 10) + 1;
    const randomImage = require('../../assets/images/' + randomNumber.toString() + '.jpg');
    const apiEndpoint = 'http://localhost:4000';
    const {id_product, s_code, s_name, s_description, n_price, n_quantity} = route.params;
    
    const deleteProduct = async () => {
        let confirm = window.confirm("Are you sure to delete this product?");
        if (confirm) {
            const response = await fetch(`${apiEndpoint}/deleteProduct`,
                {
                    method: 'DELETE',
                    headers: {
                        Accept: 'aplication/json',
                        'Content-Type': 'aplication/json',
                    },
                    body: JSON.stringify({ id: route.params.id_product })
                }
            );
            const dataResponse = await response.json();
            navigation.navigate('Home');
        }
    }

    return(
        <View style={styles.container}>
            <View style={styles.box1}>
                <Text style={styles.textStyle}>Product detail</Text>
                <Image source={randomImage} style={styles.imageStyle}></Image>
                <Text style={styles.input} >Code: {s_code}</Text>
                <Text style={styles.input} >Name: {s_name}</Text>
                <Text style={styles.input} >{s_description}</Text>
                <Text style={styles.numericInput} >Price: {n_price}</Text>
                <Text style={styles.numericInput} >Qty: {n_quantity}</Text>
            </View>
            <TouchableHighlight style={styles.buttonStyle} onPress={()=>navigation.navigate('Edit', route.params)}>
            <Text>
                Edit product
            </Text>
            </TouchableHighlight>
            <TouchableHighlight style={styles.buttonStyle} onPress={deleteProduct}>
            <Text>
                Delete product
            </Text>
            </TouchableHighlight>
      </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#ddd',
      flexDirection: 'column'
    },
    box1: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      
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
      width: Dimensions.get('screen').width*0.6,
      padding: 5,
      backgroundColor: '#eee',
  
    },
    numericInput: {
      marginTop: 5,
      width: Dimensions.get('screen').width*0.5,
      padding: 5,
      backgroundColor: '#eee',
  
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
      width: 250,
      height: 250,
    }
  
  });

export default DetailPage;