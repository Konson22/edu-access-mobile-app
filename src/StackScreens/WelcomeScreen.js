import { Image, Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator() 

import HomeScreen from '../TabScreens/HomeScreen'
import SyllabusScreen from '../TabScreens/SyllabusScreen';
import LibraryScreen from '../TabScreens/LibraryScreen';
import ChatRoomScreen from '../TabScreens/ChatRoomScreen';
import QuizeScreen from '../TabScreens/QuizeScreen';
import { CustomIcon, ProfileIcon } from '../../components/common';


export default function WelcomeScreen() {
  return (
    <Tab.Navigator 
        initialRouteName={HomeScreen}
        screenOptions={{
            tabBarStyle:{
                height:65,
            },
            headerShadowVisible:false,
            tabBarShowLabel:false,
            headerRight:() => <ProfileIcon />
        }}
    >
        <Tab.Screen name='Home' component={HomeScreen} 
            options={{
                tabBarIcon:({focused}) => (
                    <CustomTabBarIcon 
                        focused={focused} 
                        label='Home' 
                        source={require('../../assets/icons/home.png')} 
                    />
                ),
            }}  
        />
        <Tab.Screen name='Syllabus' component={SyllabusScreen} 
            options={{
                tabBarShowLabel:false,
                tabBarIcon:({focused}) => (
                    <CustomTabBarIcon 
                        focused={focused} 
                        label='Syllabus' 
                        source={require('../../assets/icons/book.png')} 
                    />
                ),
                headerRight:() => (
                    <View style={{flexDirection:'row', alignItems:'center'}}>
                      <CustomIcon source={require('../../assets/icons/book.png')} path='ExamsPaperSecreen' />
                      <ProfileIcon />
                    </View>
                )
            }}   
        />
        <Tab.Screen name='Library' component={LibraryScreen} 
            options={{
                tabBarIcon:({focused}) => (
                    <CustomTabBarIcon 
                        focused={focused} 
                        label='Library' 
                        source={require('../../assets/icons/library.png')} 
                    />
                )
            }}  
        />
        <Tab.Screen name='ChatRoom' component={ChatRoomScreen} 
            options={{
                tabBarIcon:({focused}) => (
                    <CustomTabBarIcon 
                        focused={focused} 
                        label='Chat Room' 
                        source={require('../../assets/icons/chat.png')} 
                    />
                ),
                headerRight:() => (
                    <View style={{flexDirection:'row', alignItems:'center'}}>
                        <CustomIcon source={require('../../assets/icons/users.png')} path='Friends' />
                        <ProfileIcon />
                    </View>
                )
            }} 
        />
        <Tab.Screen name='Quize' component={QuizeScreen} 
            options={{
                tabBarIcon:({focused}) => <CustomTabBarIcon focused={focused} label='Quize' source={require('../../assets/icons/library.png')} />
            }} 
        />
    </Tab.Navigator>
  )
}


function CustomTabBarIcon({ source, focused, label }){
    return(
        <View style={{alignItems:'center'}}>
            <Image 
                style={{
                    marginBottom:7,
                    height:25,
                    width:25,
                    tintColor:focused ? 'red':'gray'
                }}
                source={source} 
                resizeMode='contain'
            />
            <Text style={{fontSize:11, color:focused ? 'red':'gray'}}>{label}</Text>
        </View>
    )
}

