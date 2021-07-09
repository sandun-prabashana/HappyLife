import React, { Component } from 'react';
import { View, Text, Button, StyleSheet,TouchableOpacity,TextInput } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

export default class DetailScreen extends Component {
    constructor(props) {
        super(props);
      }
      render() {
        return (
            <View>
            <View style={{ flexDirection: 'row' }}>
                <TouchableOpacity
                style={styles.btnSize}
                    onPress={this.getstart}
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
                    onPress={this.getstart}
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
                    onPress={this.getstart}
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
                    />    
            </View>
            </View>

            <View style={styles.name}>
            <Text style={styles.text_footer}>Name</Text>
            <View style={styles.action}>
                    <TextInput
                    placeholder="Your name"
                    style={styles.textInput}
                    />    
            </View>
            </View>

            <View style={styles.email}>
            <Text style={styles.text_footer}>Email</Text>
            <View style={styles.action}>
                    <TextInput
                    placeholder="Your email"
                    style={styles.textInput}
                    />    
            </View>
            </View>

            <View style={styles.password}>
            <Text style={styles.text_footer}>Password</Text>
            <View style={styles.action}>
                    <TextInput
                    placeholder="Your password"
                    style={styles.textInput}
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