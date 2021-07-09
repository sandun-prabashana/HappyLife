// import React from 'react';
// import { createStackNavigator } from '@react-navigation/stack';
// import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
// import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
// import Icon from 'react-native-vector-icons/MaterialIcons';
// import HomeScreen from './HomeScreen';
// import DetailsScreen from './DetailsScreen';
// import ExploreScreen from './ExploreScreen';
// import ProfileScreen from './ProfileScreen';

// const HomeStack = createStackNavigator();
// const DetailsStack = createStackNavigator();
// const ProfileStack = createStackNavigator();
// const ExploreStack = createStackNavigator();
// const Tab = createMaterialBottomTabNavigator();

// const MainTabScreen=()=>(
// <Tab.Navigator
//       initialRouteName="Home"
//       activeColor="#fff"
    
//     >
//       <Tab.Screen 
//         name="HomeScreen"
//         component={HomeStackScreen}
//         options={{
//           tabBarLabel: 'Home',
//           tabBarColor:  '#009387',
//           tabBarIcon: ({ color }) => (
//             <Icon name="home" color={color} size={26} />
//           ),
//         }}
//       />
//       <Tab.Screen
//         name="DetailsScreen"
//         component={DetailStackScreen}
//         options={{
//           tabBarLabel: 'Details',
//           tabBarColor:  '#1f65ff',
//           tabBarIcon: ({ color }) => (
//             <Icon name="details" color={color} size={26} />
//           ),
//         }}
//       />
//       <Tab.Screen
//         name="Profile"
//         component={ProfileStackScreen}
//         options={{
//           tabBarLabel: 'Profile',
//           tabBarColor:  '#694fad',
//           tabBarIcon: ({ color }) => (
//             <MaterialCommunityIcons name="account" color={color} size={26} />
//           ),
//         }}
//       />
//       <Tab.Screen
//         name="Explore"
//         component={ExploreStackScreen}
//         options={{
//           tabBarLabel: 'Explore',
//           tabBarColor:  '#d02860',
//           tabBarIcon: ({ color }) => (
//             <Icon name="tag-faces" color={color} size={26} />
//           ),
//         }}
//       />
//     </Tab.Navigator>
// );

// export default MainTabScreen;

// const HomeStackScreen = ({navigation})=>(
//     <HomeStack.Navigator screenOptions={{
//        headerStyle :{
//          backgroundColor:'#009387'
//            },
//         headerTintColor:"#fff",
//         headerTitleStyle:{
//        fontWeight:'bold'
//      }
//      }}>
//        <HomeStack.Screen name="Home" component={HomeScreen} options={{
//          title:'Overview',
//          headerLeft:()=>(
//            <Icon.Button name="menu" size={25} 
//            backgroundColor="#009387" onPress={()=>
//              navigation.openDrawer()
//            }></Icon.Button>
//          )
//        }} />
//      </HomeStack.Navigator>
// );


// const DetailStackScreen = ({navigation})=>(
//  <DetailsStack.Navigator screenOptions={{
//     headerStyle :{
//       backgroundColor:'#1f65ff'
//         },
//      headerTintColor:"#fff",
//      headerTitleStyle:{
//     fontWeight:'bold'
//   }
//   }}>
//     <DetailsStack.Screen name="Details" component={DetailsScreen} options={{
//                 headerLeft:()=>(
//                  <Icon.Button name="menu" size={25} 
//                  backgroundColor="#1f65ff" onPress={()=>
//                    navigation.openDrawer()
//                  }></Icon.Button>
//                )
//     }} />
//   </DetailsStack.Navigator>
// );

// const ProfileStackScreen = ({navigation})=>(
//   <ProfileStack.Navigator screenOptions={{
//      headerStyle :{
//        backgroundColor:'#694fad'
//          },
//       headerTintColor:"#fff",
//       headerTitleStyle:{
//      fontWeight:'bold'
//    }
//    }}>
//      <ProfileStack.Screen name="Profile" component={ProfileScreen} options={{
//                  headerLeft:()=>(
//                   <Icon.Button name="menu" size={25} 
//                   backgroundColor="#694fad" onPress={()=>
//                     navigation.openDrawer()
//                   }></Icon.Button>
//                 )
//      }} />
//    </ProfileStack.Navigator>
//  );

//  const ExploreStackScreen = ({navigation})=>(
//   <ExploreStack.Navigator screenOptions={{
//      headerStyle :{
//        backgroundColor:'#d02860'
//          },
//       headerTintColor:"#fff",
//       headerTitleStyle:{
//      fontWeight:'bold'
//    }
//    }}>
//      <ExploreStack.Screen name="Explore" component={ExploreScreen} options={{
//                  headerLeft:()=>(
//                   <Icon.Button name="menu" size={25} 
//                   backgroundColor="#d02860" onPress={()=>
//                     navigation.openDrawer()
//                   }></Icon.Button>
//                 )
//      }} />
//    </ExploreStack.Navigator>
//  );