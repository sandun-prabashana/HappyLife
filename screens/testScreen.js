import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Dimensions, Image, Platform,StatusBar,
    Alert, TextInput, } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import * as Animatable from 'react-native-animatable';



const testScreen=({navigation})=>{


    const [data, setData] = React.useState({
        id:'',
        name:'',
        email: '',
        password: '',
        check_textInputChange: false,
        check_textInputChangeID: false,
        check_textInputChangeName: false,
        secureTextEntry: true,
        
    });


    const textInputChange = (val) => {
        if( val.length > 0 ) {
            setData({
                ...data,
                email: val,
                check_textInputChange: true,
            });
        } else {
            setData({
                ...data,
                email: val,
                check_textInputChange: false,
            });
        }
    }

    const textInputChangeID = (val) => {
        if( val.length > 0 ) {
            setData({
                ...data,
                id: val,
                check_textInputChangeID: true,
            });
        } else {
            setData({
                ...data,
                id: val,
                check_textInputChangeID: false,
            });
        }
    }

    const textInputChangeName = (val) => {
        if( val.length > 0 ) {
            setData({
                ...data,
                name: val,
                check_textInputChangeName: true,
            });
        } else {
            setData({
                ...data,
                name: val,
                check_textInputChangeName: false,
            });
        }
    }

    const handlePasswordChange = (val) => {
            setData({
                ...data,
                password: val
            });
    }

    const updateSecureTextEntry = () => {
        setData({
            ...data,
            secureTextEntry: !data.secureTextEntry
        });
    }

    const userSave = (uid, name, address ,password) => {

      fetch('http://192.168.1.3:3000/user/saveuser', {
      method: 'POST',
      body: JSON.stringify({
        uid: uid ,
        name: name,
        email: address,
        password: password
      }),
      headers: {
         Accept : 'application/json',
        'Content-type': 'application/json'
      },
    })
      .then((response) => response.json())
      .then((json) => console.log(json));
    }
    

        return(

            
            <View style={styles.container}>
                <StatusBar backgroundColor='#009387' barStyle="light-content"/>
                <View style={styles.header}>
                <Text style={styles.text_header}>Welcome!</Text>
                </View>
                <Animatable.View 
                animation="fadeInUpBig"
                style={styles.footer}
                >



                <Text style={styles.text_footer}>ID Number</Text>
                    <View style={styles.action}>
                        <FontAwesome
                            name="id-card-o"
                            color="#05375a"
                            size={20}
                            />
                            <TextInput
                            placeholder="Your ID Number"
                            style={styles.textInput}
                            autoCapitalize="none"
                            onChangeText={(val)=> textInputChangeID(val)}
                        
                            />
                            {data.check_textInputChangeID ?
                            <Animatable.View
                            animation="bounceIn"
                        >
                            <Feather 
                                name="check-circle"
                                color="green"
                                size={20}
                            />
                        </Animatable.View>
                            : null}
                    </View>


                    <Text style={styles.text_footer}>Name</Text>
                    <View style={styles.action}>
                        <FontAwesome
                            name="user-circle"
                            color="#05375a"
                            size={20}
                            />
                            <TextInput
                            placeholder="Your Name"
                            style={styles.textInput}
                            autoCapitalize="none"
                            onChangeText={(val)=> textInputChangeName(val)}
                            
                            />
                            {data.check_textInputChangeName ?
                            <Animatable.View
                            animation="bounceIn"
                        >
                            <Feather 
                                name="check-circle"
                                color="green"
                                size={20}
                            />
                        </Animatable.View>
                            : null}
                    </View>





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
                            onChangeText={(val)=> textInputChange(val)}
                            
                            />
                            {data.check_textInputChange ?
                            <Animatable.View
                            animation="bounceIn"
                        >
                            <Feather 
                                name="check-circle"
                                color="green"
                                size={20}
                            />
                        </Animatable.View>
                            : null}
                    </View>
                    <Text style={[styles.text_footer,{
                        
                    }]}>Password</Text>
                    <View style={styles.action}>
                        <FontAwesome
                            name="lock"
                            color="#05375a"
                            size={20}
                            />
                            <TextInput
                            placeholder="Your password"
                            secureTextEntry={data.secureTextEntry ? true : false}
                            style={styles.textInput}
                            autoCapitalize="none"
                            onChangeText={(val) => handlePasswordChange(val)}
                            
                            />
                            <TouchableOpacity
                            onPress={updateSecureTextEntry}
                            >
                    {data.secureTextEntry ? 
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
                    }
                </TouchableOpacity>
                    </View>
                    <View style={styles.button}>
                    <TouchableOpacity
                    style={styles.signIn}
                    onPress={() => {userSave( data.id, data.name, data.email, data.password )}}
                >
                        <LinearGradient
                        colors={['#08d4c4', '#01ab9d']}
                        style={styles.signIn}
                        >
                        <Text style={[styles.textSign, {
                        color:'#fff'
                    }]}>Sign Up</Text>
                        </LinearGradient>

                        </TouchableOpacity>


                        <TouchableOpacity
                    onPress={() => navigation.goBack()}
                    style={[styles.signIn, {
                        borderColor: '#009387',
                        borderWidth: 1,
                        marginTop: 15
                    }]}
                >
                    <Text style={[styles.textSign, {
                        color: '#009387'
                    }]}>Sign In</Text>
                        </TouchableOpacity> 
                    </View>
                </Animatable.View>
            </View>
        )
};


export default testScreen;

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
