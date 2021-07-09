import React, { Component } from 'react';
import { View, Text, Button, StyleSheet,TouchableOpacity,TextInput } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import ProfileScreen from './ProfileScreen';
import loadScreen from './loadScreen';

export default class DetailsScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            uid: '',
            date: '',
            details:'',
            withdrawal:'',
            deposit:'',
          }
      }

      componentDidMount() {
        var today = new Date();
        var dd = String(today.getDate()).padStart(2, '0');
        var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
        var yyyy = today.getFullYear();
      
        var todayo = mm + '/' + dd + '/' + yyyy;
        this.state.date=todayo
        console.log(todayo);
      }

      profile =()=> {
        this.props.navigation.navigate(ProfileScreen);
      }
      detail =()=> {
        this.props.navigation.navigate(DetailsScreen);
      }
    //   load =()=> {
    //     this.props.navigation.navigate(loadScreen);
    //   }

      savedetail1 = () => {

        fetch('http://192.168.1.3:3000/detail/savedetail', {
        method: 'POST',
        body: JSON.stringify({
          
            uid: this.state.uid,
            date: this.state.date,
            details:'Cash Deposit',
            withdrawal:0,
            deposit:this.state.deposit,
        }),
        headers: {
           Accept : 'application/json',
          'Content-type': 'application/json'
        },
      })
        .then((response) => response.json())
        .then((json) => console.log(json),
        );
      }

      savedetail2 = () => {

        fetch('http://192.168.1.3:3000/detail/savedetail', {
        method: 'POST',
        body: JSON.stringify({
          
            uid: this.state.uid,
            date: this.state.date,
            details:this.state.details,
            withdrawal:this.state.withdrawal,
            deposit:0,
        }),
        headers: {
           Accept : 'application/json',
          'Content-type': 'application/json'
        },
      })
        .then((response) => response.json())
        .then((json) => console.log(json),
        );
      }

      render() {
        const { uid } = this.props.route.params
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
                onPress={()=>this.props.navigation.navigate('loadScreen',{uid:uid})}
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
            <Text style={styles.text_footer}>Income</Text>
            <View style={styles.action}>
                    <TextInput
                    placeholder="Your Income"
                    style={styles.textInput}
                    onChangeText={(value) => {
                        this.setState({
                          deposit: value
                        })
                    }}
                    />    
            </View>
            </View>
            <View>
            <TouchableOpacity
                style={styles.btnSize1}
                    onPress={this.savedetail1}
                    >
                        <LinearGradient
                        colors={['#d40818','#d40818']}
                        style={styles.btnSize1}
                        >
                            <Text style={styles.textSign}>Add Income</Text>
                        </LinearGradient>
                    </TouchableOpacity>
            </View>

            <View style={styles.reason}>
            <Text style={styles.text_footer}>Reason</Text>
            <View style={styles.action}>
                    <TextInput
                    placeholder="Your Reason"
                    style={styles.textInput}
                    onChangeText={(value) => {
                        this.setState({
                          details: value
                        })
                    }}
                    />    
            </View>
            </View>


            <View style={styles.cost}>
            <Text style={styles.text_footer}>Expenditure</Text>
            <View style={styles.action}>
                    <TextInput
                    placeholder="Your Expenditure"
                    style={styles.textInput}
                    onChangeText={(value) => {
                        this.setState({
                          withdrawal: value
                        })
                    }}
                    />    
            </View>
            </View>


            <View>
            <TouchableOpacity
                style={styles.btnSize1}
                onPress={this.savedetail2}
                    >
                        <LinearGradient
                        colors={['#d40818','#d40818']}
                        style={styles.btnSize1}
                        >
                            <Text style={styles.textSign}> Expenditure</Text>
                        </LinearGradient>
                    </TouchableOpacity>
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
        marginTop:30,
        marginLeft:270
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
    },
    reason:{
        marginTop:30,
        marginLeft:50
    },
    cost:{
        marginTop:30,
        marginLeft:50
    },

});