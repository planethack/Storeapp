import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import { Alert, Dimensions, StyleSheet, Text, TextInput, View, TouchableHighlight, Image, FlatList, Button } from 'react-native';



const EditPage = ({route, navigation}) => {
    const id = route.params.id_product;
    const [code, setCode] = useState("");
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");
    const [quantity, setQuantity] = useState("");
    const randomNumber = Math.floor(Math.random() * 10) + 1;
    const randomImage = require('../../assets/images/' + randomNumber.toString() + '.jpg');
    const apiEndpoint = 'http://localhost:4000';

    const updateProduct = async () => {
        console.log(route.params);
        const response = await fetch(`${apiEndpoint}/updateProduct`,
        {
            method: 'PUT',
            headers: {
                Accept: 'aplication/json',
                'Content-Type': 'aplication/json',
            },
            body: JSON.stringify({
                id: id,
                code: code,
                name: name,
                description: description,
                price: price,
                quantity: quantity
            })
        });
        const dataResponse = await response.json();
        Alert.alert("Producto actualizado satisfactoriamente.");
        navigation.navigate('Home');
    }
    useEffect(() => {
        console.log(route.params);
        setCode(route.params.s_code);
        setName(route.params.s_name);
        setDescription(route.params.s_description);
        setPrice(route.params.n_price);
        setQuantity(route.params.n_quantity);
    }, []);
    return(
        <View style={styles.box1}>
        <View style={styles.box2}>
          <Text style={styles.textStyle}>Edit product</Text>
          <Image source={randomImage} style={styles.imageStyle}></Image>
          <TextInput style={styles.input} placeholder='Code' onChangeText={(text) => setCode(text)} value={code}></TextInput>
          <TextInput style={styles.input} placeholder='Name' onChangeText={(text) => setName(text)} value={name}></TextInput>
          <TextInput style={styles.input} placeholder='Description' onChangeText={(text) => setDescription(text)}  value={description}></TextInput>
          <TextInput style={styles.numericInput} placeholder='Price' onChangeText={(text) => setPrice(text)}  value={price}></TextInput>
          <TextInput style={styles.numericInput} placeholder='Quantity' onChangeText={(text) => setQuantity(text)}  value={quantity}></TextInput>
        </View>
        <TouchableHighlight style={styles.buttonStyle} onPress={updateProduct}>
          <Text>
            Save
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
      width: 200,
      height: 200,
    }
  
  });
   

export default EditPage;