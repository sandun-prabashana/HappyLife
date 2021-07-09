import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Dimensions, Image, Platform,StatusBar,
    Alert, TextInput, } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import * as Animatable from 'react-native-animatable';
import MainTabScreen from './MainTabScreen';
import { createDrawerNavigator } from '@react-navigation/drawer';
import SignUpScreen from './SignUpScreen';
import ProfileScreen from './ProfileScreen';



export default class SignInScreen extends Component {

    constructor(props) {
      super(props);
      this.state = {
        email: '',
        password: '',
        uid:'',
        name:'',
      }
    }
    signUp =()=> {
      this.props.navigation.navigate(SignUpScreen);
    }


    login= ()=> {
      fetch('http://192.168.1.3:3000/user/oneuser/' + this.state.email, { method: 'GET' })
                .then((response) => response.json())
                .then((json) => this.Passwordmatch(json.data.password,json.data.name,json.data.uid))
     }


  

    
    
  
    Passwordmatch= (password,name,uid)=> {
      // if (this.state.password == password) {
      //   console.log("wadegoda")
      //   this.props.navigation.navigate(ProfileScreen)

      // }else{
      //   alert("Login First");, {
        
      // }
      this.props.navigation.navigate('ProfileScreen',{
        email:this.state.email,
        uid:uid,
        name:name,
        password:password
      })
    }
    

    render() {
      return (
                <View style={styles.container}>
                <StatusBar backgroundColor='#009387' barStyle="light-content"/>
                <View style={styles.header}>
                <Text style={styles.text_header}>Welcome!</Text>
                </View>
                <Animatable.View 
                animation="fadeInUpBig"
                style={styles.footer}
                >
                    <Text style={styles.text_footer}>Email</Text>
                    <View style={styles.action}>
                        <FontAwesome
                            name="user-o"
                            color="#05375a"
                            size={20}
                            />
                            <TextInput
                            placeholder="Your Email"
                            style={styles.textInput}
                            autoCapitalize="none"
                            onChangeText={(value) => {
                              this.setState({
                                email: value
                              })
                          }}
                            />
                            {/* {data.check_textInputChange ?
                            <Animatable.View
                            animation="bounceIn"
                        >
                            <Feather 
                                name="check-circle"
                                color="green"
                                size={20}
                            />
                        </Animatable.View>
                            : null} */}
                    </View>
                    <Text style={[styles.text_footer,{
                        marginTop: 35
                    }]}>Password</Text>
                    <View style={styles.action}>
                        <FontAwesome
                            name="lock"
                            color="#05375a"
                            size={20}
                            />
                            <TextInput
                            placeholder="Your password"
                            // secureTextEntry={this.state.secureTextEntry ? true : false}
                            style={styles.textInput}
                            autoCapitalize="none"
                            onChangeText={(value) => {
                              this.setState({
                                password: value
                              })
                          }}
                            />
                            <TouchableOpacity
                            // onPress={updateSecureTextEntry}
                            >
                    {/* {data.secureTextEntry ? 
                    <Feather 
                        name="eye-off"
                        color="grey"
                        size={20}
                    />
                    :
                    <Feather 
                        name="eye"
                        color="grey"
                        size={20}
                    />
                    } */}
                </TouchableOpacity>
                    </View>
                    <View style={styles.button}>
                    <TouchableOpacity
                    style={styles.signIn}
                    onPress={this.login}
                    
                >
                        <LinearGradient
                        colors={['#08d4c4', '#01ab9d']}
                        style={styles.signIn}
                        >
                        <Text style={[styles.textSign, {
                        color:'#fff'
                    }]}>Sign In</Text>
                        </LinearGradient>
                    </TouchableOpacity>
                        <TouchableOpacity
                    onPress={this.signUp}
                    style={[styles.signIn, {
                        borderColor: '#009387',
                        borderWidth: 1,
                        marginTop: 15
                    }]}
                >
                    <Text style={[styles.textSign, {
                        color: '#009387'
                    }]}>Sign Up</Text>
                        </TouchableOpacity> 
                    </View>
                </Animatable.View>
            </View>

      )}

};

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: '#009387'
  },
  header: {
      flex: 1,
      justifyContent: 'flex-end',
      paddingHorizontal: 20,
      paddingBottom: 50
  },
  footer: {
      flex: 3,
      backgroundColor: '#fff',
      borderTopLeftRadius: 30,
      borderTopRightRadius: 30,
      paddingHorizontal: 20,
      paddingVertical: 30
  },
  text_header: {
      color: '#fff',
      fontWeight: 'bold',
      fontSize: 30
  },
  text_footer: {
      color: '#05375a',
      fontSize: 18
  },
  action: {
      flexDirection: 'row',
      marginTop: 10,
      borderBottomWidth: 1,
      borderBottomColor: '#f2f2f2',
      paddingBottom: 5
  },
  actionError: {
      flexDirection: 'row',
      marginTop: 10,
      borderBottomWidth: 1,
      borderBottomColor: '#FF0000',
      paddingBottom: 5
  },
  textInput: {
      flex: 1,
      marginTop: Platform.OS === 'ios' ? 0 : -12,
      paddingLeft: 10,
      color: '#05375a',
  },
  errorMsg: {
      color: '#FF0000',
      fontSize: 14,
  },
  button: {
      alignItems: 'center',
      marginTop: 50
  },
  signIn: {
      width: '100%',
      height: 50,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 10
  },
  textSign: {
      fontSize: 18,
      fontWeight: 'bold'
  }
});

