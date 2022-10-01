import React, { Component } from 'react'
import { 
    Text, View,StyleSheet,Button

} from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';

const Home=()=>{
    const logout = async() => {
        await AsyncStorage.removeItem('token')
        navigation.navigate('Login')
    }
    return (
      <View style={styles.container}>
        <Text style={ styles.text}>This My Home</Text>
        <Button onPress={logout} title="Log out"/>
      </View>     
    )
  }
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        fontSize: 20,
        color: '#5FDFFA',
        fontWeight: 'bold',
        margin:30
    }
  });
  export default Home;