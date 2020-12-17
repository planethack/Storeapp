import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React, {useEffect, useState} from 'react';
import { Dimensions, StyleSheet, Text, TextInput, View, TouchableHighlight, Image, FlatList, Button } from 'react-native';
import HomePage from './pages/home/homepage';
import DetailPage from './pages/detail/detailpage';
import CreatePage from './pages/detail/createpage';
import EditPage from './pages/detail/editpage';

const Stack = createStackNavigator();

export default function App() {
  
  return (
    <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name='Home' component={HomePage}></Stack.Screen>
            <Stack.Screen name='Detail' component={DetailPage}></Stack.Screen>
            <Stack.Screen name='Create' component={CreatePage}></Stack.Screen>
            <Stack.Screen name='Edit' component={EditPage}></Stack.Screen>
        </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    flexDirection: 'column'
  },
});

