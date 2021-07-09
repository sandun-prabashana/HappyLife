import React, { Component } from 'react';
import { View, Text, Button, StyleSheet,TouchableOpacity,TextInput } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import DetailsScreen from './DetailsScreen';

export default class ProfileScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            uid: '',
          }
      }



      profile =()=> {
        this.props.navigation.navigate(ProfileScreen);
      }
      detail =()=> {
        this.props.navigation.navigate('DetailsScreen',{
            uid:this.state.uid,
          });
      }

      load =()=> {
        this.props.navigation.navigate('loadScreen',{
            uid:this.state.uid,
          });
      }

      render() {
        const { email, uid, name, password } = this.props.route.params
        return (
            <View>
            <View style={{ flexDirection: 'row' }}>
                <TouchableOpacity
                style={styles.btnSize}
                onPress={this.detail}
                    >
                        <LinearGradient
                        colors={['#08d4c4','#01ab9d']}
                        style={styles.btnSize}
                        >
                            <Text style={styles.textSign}>Money</Text>
                        </LinearGradient>
                    </TouchableOpacity>


                    <TouchableOpacity
                style={styles.btnSize}
                onPress={this.load}
                    >
                        <LinearGradient
                        colors={['#08d4c4','#01ab9d']}
                        style={styles.btnSize}
                        >
                            <Text style={styles.textSign}>Details</Text>
                        </LinearGradient>
                    </TouchableOpacity>
            </View>

            <View>
            <TouchableOpacity
                style={styles.btnSize1}
                onPress={this.profile}
                    >
                        <LinearGradient
                        colors={['#08d4c4','#01ab9d']}
                        style={styles.btnSize1}
                        >
                            <Text style={styles.textSign}>Profile</Text>
                        </LinearGradient>
                    </TouchableOpacity>
            </View>
            <View style={styles.id}>
            <Text style={styles.text_footer}>ID</Text>
            <View style={styles.action}>
                    <TextInput
                    placeholder="Your Id"
                    style={styles.textInput}
                    value={uid}
                    onChangeText={(value) => {
                        this.setState({
                          uid: value
                        })
                    }}
                    />    
            </View>
            </View>

            <View style={styles.name}>
            <Text style={styles.text_footer}>Name</Text>
            <View style={styles.action}>
                    <TextInput
                    placeholder="Your name"
                    style={styles.textInput}
                    value={name}
                    />    
            </View>
            </View>

            <View style={styles.email}>
            <Text style={styles.text_footer}>Email</Text>
            <View style={styles.action}>
                    <TextInput
                    placeholder="Your email"
                    style={styles.textInput}
                    value={email}
                    />    
            </View>
            </View>

            <View style={styles.password}>
            <Text style={styles.text_footer}>Password</Text>
            <View style={styles.action}>
                    <TextInput
                    placeholder="Your password"
                    style={styles.textInput}
                    value={password}
                    />    
            </View>
            </View>
            </View>
        )};
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    },
    title1:{
        fontSize: 25,
        fontWeight: "bold",
        textAlign:'center',
    },
    title2:{
        fontSize: 25,
        fontWeight: "bold",
        textAlign:'left'
    },
    title3:{
        fontSize: 25,
        fontWeight: "bold",
        textAlign:'right'
    },
    textSign: {
        color: 'white',
        fontWeight: 'bold'
    },
    btnSize:{
        width: '50%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
    },
    btnSize1:{
        width: '50%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        marginLeft:65
    },
    action: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#f2f2f2',
        paddingBottom: 5
    },
    textInput: {
        flex: 1,
        marginTop: Platform.OS === 'ios' ? 0 : -12,
        paddingLeft: 10,
        color: '#05375a',
    },
    text_footer: {
        color: '#05375a',
        fontSize: 18
    },
    id:{
        marginTop:100,
        marginLeft:50
    },
    name:{
        marginTop:30,
        marginLeft:50
    },
    email:{
        marginTop:30,
        marginLeft:50
    },
    password:{
        marginTop:30,
        marginLeft:50
    }

});