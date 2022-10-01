import React, { Component } from 'react'
import { Text, View , StyleSheet, TextInput, TouchableOpacity, Image} from 'react-native'

const Signup=({navigation})=>{
    return (
      <View style={ styles.container}>
        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity
            onPress={()=>{navigation.goBack()}}
          >
            <Image
              source={require('./img/backicon.png')}
              style={{width: 50, height: 50, marginVertical: 30}}
            />
          </TouchableOpacity>
          <Text style={{fontWeight: 'bold', fontSize:20, color:'#5FDFFA', marginHorizontal: 10, marginVertical: 40}}>CREATE NEW ACCOUNT</Text>
        </View>
        <View style={{flex: 1, justifyContent:'center', alignItems:'center'}}>
            <TextInput
                style={styles.input}
                placeholder='Full Name'
            />
            <TextInput
                style={styles.input}
                placeholder='Phone Number'
            />
            <TextInput
                style={styles.input}
                placeholder='Email Adess'
            />
            <TextInput
                style={styles.input}
                placeholder='Password'
                secureTextEntry={true}
            />
            <TouchableOpacity style={styles.singup}>
                 <Text style={{color: '#fff', fontWeight: 'bold'}}>Sign up</Text>
             </TouchableOpacity>
        </View>
        
      </View>
    )
  }
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      
    },
    input: {
        height: 50,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        color: 'gray',
        borderRadius: 100,
        width: '80%'
    },
    singup:{
        width: 200,
        height: 50,
        backgroundColor: '#5FDFFA',
        borderColor: '#5FDFFA',
        borderWidth: 1,
        borderRadius: 40,
        justifyContent: 'center',
        alignItems: 'center',
    }
  });
  export default Signup;