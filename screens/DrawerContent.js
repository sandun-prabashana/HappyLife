import React from 'react';
import { View, Button, StyleSheet } from 'react-native';
import { 
    Avatar,
    Title,
    Caption,
    Paragraph,
    Drawer,
    Text,
    TouchableRipple,
    Switch 

} from 'react-native-paper';
import { DrawerContentScrollView,
        DrawerItem
} from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/MaterialIcons';

// const[isDarkTheme,setIsDarkTheme]=React.useState(false);

// const toggleTheme = () =>{
//     setIsDarkTheme(!isDarkTheme);
// }

export function DrawerContent(props){
    return(
        <View style={{flex:1}}>
            <DrawerContentScrollView {...props}>
                <View style={styles.drawerContent}>
                    <View style={styles.userinfoSection}>
                        <View style={{flexDirection:'row',marginTop:15}}>
                            <Avatar.Image
                            source={{
                                uri:'https://cdn.icon-icons.com/icons2/2643/PNG/512/male_boy_person_people_avatar_icon_159358.png'
                            }}
                            size={50}
                            />
                            <View style={{flexDirection:'column',marginTop:7,marginLeft:10}}>
                                <Title style={styles.title}>Sandun Prabashana</Title>
                            </View>
                        </View>
                    </View>

                    <Drawer.Section style={styles.drawerSection}>
                    
                    <DrawerItem
                    icon={({color,size})=>(
                        <Icon
                        name="home"
                        color={color}
                        size={size}
                        />
                    )}
                    label="Home"
                    onPress={() => {props.navigation.navigate('HomeScreen')}}
                    />

                    <DrawerItem
                    icon={({color,size})=>(
                        <Icon
                        name="details"
                        color={color}
                        size={size}
                        />
                    )}
                    label="Details"
                    onPress={() => {props.navigation.navigate('DetailsScreen')}}
                    />

                    <DrawerItem
                    icon={({color,size})=>(
                        <Icon
                        name="supervised-user-circle"
                        color={color}
                        size={size}
                        />
                    )}
                    label="Profile"
                    onPress={() => {props.navigation.navigate('Profile')}}
                    />

                    <DrawerItem
                    icon={({color,size})=>(
                        <Icon
                        name="settings"
                        color={color}
                        size={size}
                        />
                    )}
                    label="Settings"
                    onPress={() => {props.navigation.navigate('Explore')}}
                    />

                    <DrawerItem
                    icon={({color,size})=>(
                        <Icon
                        name="contact-support"
                        color={color}
                        size={size}
                        />
                    )}
                    label="Support"
                    onPress={() => {}}
                    />
                    
                    </Drawer.Section>

                    {/* <Drawer.Section title="Preferences">
                        <TouchableRipple onPress={()=> {toggleTheme()}}>
                            <View style={styles.preference}>
                                <Text>Dark Theme</Text>
                                <View pointerEvents="none">
                                <Switch value={isDarkTheme}/>
                                </View>
                            </View>
                        </TouchableRipple>
                    </Drawer.Section> */}
                </View>
            </DrawerContentScrollView>
            <Drawer.Section style={styles.bottomDrawerSection}>
                <DrawerItem
                    icon={({color,size})=>(
                        <Icon
                        name="exit-to-app"
                        color={color}
                        size={size}
                        />
                    )}
                    label="Sign Out"
                    onPress={() => {}}
                />
            </Drawer.Section>
        </View>
    )
}

const styles= StyleSheet.create({
    drawerContent:{
        flex:1,
    },

    userinfoSection:{
        paddingLeft:20,
    },
    title:{
        fontSize:16,
        marginTop:3,
        fontWeight:'bold',
    },
    caption:{
        fontSize:14,
        lineHeight:14
    },
    row:{
        marginTop:20,
        flexDirection:'row',
        alignItems:'center',
    },
    section:{
        flexDirection:'row',
        alignItems:'center',
        marginRight:15,
    },
    paragraph:{
        fontWeight:'bold',
        marginRight:3,
    },
    drawerSection:{
        marginTop:15,
    },
    bottomDrawerSection:{
        marginBottom:15,
        borderTopColor:'#f4f4f4',
        borderTopWidth:1
    },

    preference:{
        flexDirection:'row',
        justifyContent:'space-between',
        paddingVertical:12,
        paddingHorizontal:16,
    }
})