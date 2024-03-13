import 'react-native-gesture-handler'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { View } from 'react-native';


import WelcomeScreen from './src/StackScreens/WelcomeScreen';
import ProfileScreen from './src/StackScreens/ProfileScreen';
import StudentProfile from './src/StackScreens/StudentProfile';
import ViewSyllabus from './src/StackScreens/ViewSyllabus/[id]';
import BookSearchScreen from './src/StackScreens/BookSearchScreen/[query]';
import { CustomIcon, ProfileIcon } from './components/common';
import FriendScreen from './src/StackScreens/FriendScreen';
import ExamsPaperSecreen from './src/StackScreens/ExamsPaperSecreen';
import ConversationScreen from './src/StackScreens/ConversationScreen/[conversationId]';


const Stack = createStackNavigator()

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator 
        screenOptions={{
          headerShown:false,
          headerShadowVisible:false,
        }}
      >
        <Stack.Screen name='Welcome' component={WelcomeScreen} 
          options={{
            headerShown:false
          }} 
        />
        <Stack.Screen name='Profile' component={ProfileScreen} 
          options={{
            headerShown:true
          }} 
        />
        <Stack.Screen name='Friends' component={FriendScreen} 
          options={{
            headerShown:true,
            headerRight:() => (
              <View style={{flexDirection:'row', alignItems:'center'}}>
                <CustomIcon source={require('./assets/icons/message.png')} path='Friends' />
                <ProfileIcon />
              </View>
            )
          }} 
        />
        <Stack.Screen name='Student' component={StudentProfile} 
          options={{
            headerShown:true,
            headerRight:() => (
              <View style={{flexDirection:'row', alignItems:'center'}}>
                <CustomIcon source={require('./assets/icons/message.png')} path='ChatRoom' />
                <ProfileIcon />
              </View>
            )
          }} 
        />
        <Stack.Screen name='ViewSyllabus' component={ViewSyllabus} 
          options={{
            headerShown:true,
          }} 
        />
        <Stack.Screen name='Search' component={BookSearchScreen} 
          options={{
            headerShown:true
          }} 
        />
        <Stack.Screen name='ExamsPaperSecreen' component={ExamsPaperSecreen} 
          options={{
            headerShown:true,
            title:'Exam Papers',
            headerRight:() => (
              <View style={{flexDirection:'row', alignItems:'center'}}>
                <CustomIcon source={require('./assets/icons/plus.png')} path='Syllabus' />
                <CustomIcon source={require('./assets/icons/library.png')} path='Library' />
                <ProfileIcon />
              </View>
            )
          }} 
        />
        <Stack.Screen name='ConversationScreen' component={ConversationScreen} 
          options={{
            headerShown:true,
            title:'Chat',
            headerRight:() => (
              <View style={{flexDirection:'row', alignItems:'center'}}>
                <ProfileIcon />
              </View>
            )
          }} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;



