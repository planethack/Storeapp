import React, {useEffect, useState} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Dimensions, StyleSheet, Text, TextInput, View, TouchableHighlight, Image, FlatList, Button, TouchableOpacity } from 'react-native';
import ProductComponent from '../../components/productComponent';

const HomePage = ({navigation}) => {
    const [productsData, setProductsData] = useState([]);

    const apiEndpoint = 'http://localhost:4000';
    const fetchApi = async() => {
    const response = await fetch(`${apiEndpoint}/listProducts`);
    const products = await response.json();
    setProductsData(products.data);
    console.log(response);
  }
  useEffect(()=>{
    fetchApi();
  } ,[]);
    
    return(
        <View style={styles.container} >
            <View style={styles.box1}>
                <TouchableOpacity style={styles.buttonStyle} onPress={()=>(navigation.navigate("Create"))}>
                    <Text>Create product</Text>
                </TouchableOpacity>
            </View>
            <FlatList data={productsData}
                renderItem={({item}) =>
                <TouchableOpacity onPress={()=>(navigation.navigate("Detail", item))}><ProductComponent idProduct={item.id_product} code={item.s_code} name={item.s_name} description={item.s_description} price={item.n_price} quantity={item.n_quantity}></ProductComponent>
                </TouchableOpacity>} keyExtractor={item => item.id_product}>
            </FlatList>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#5886E1',
      flexDirection: 'column'
    },
    box1: {
        flex: 1,
        backgroundColor: '#fff',
        width: Dimensions.get('screen').width,
        
      
    },
    buttonStyle: {
        flex: 1,
        width: 150,
        height: 20,
        backgroundColor: '#5886E1',
        borderRadius: 10,
        elevation: 2,
        padding: 5,
        margin: 10,
      },
  });

export default HomePage;