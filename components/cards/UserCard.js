import { View, Text, StyleSheet, Image, Button, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'

export function ActiveUserCard({ user }) {
  return (
    <View style={styles.activeUserContainer}>
        <Image
            style={styles.activeUserImage}
            source={user.avatar}
        />
        <Text>{user.name.split(' ')[0]}</Text>
    </View>
  )
}

export function UserCard({ user, isFriend=false }) {
    const navigation = useNavigation()
  return (
    <TouchableOpacity style={styles.container} onPress={() => navigation.navigate('Student', {id:user.id})}>
        <Image
            style={styles.image}
            source={user.avatar}
        />
        <View style={{flexGrow:1, marginLeft:10}}>
            <Text style={{fontSize:18}}>{user.name}</Text>
            <Text style={{fontSize:16, marginTop:5, color:'gray'}}>{user.grade}</Text>
        </View>
        {isFriend ? <Button title='Add' /> :
        <Image
            style={{height:30, width:30}}
            source={require('../../assets/icons/chat.png')}
        />}
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    container:{
        padding:10,
        marginBottom:7,
        flexDirection:'row',
        alignItems:'center',
        backgroundColor:'#fff'
    },
    activeUserContainer:{
        marginHorizontal:10,
        alignItems:'center'
    },
    activeUserImage:{
        marginBottom:7,
        height:55,
        width:55,
        borderRadius:27.5,
        borderWidth:2,
        borderColor:'green'
    },
    image:{
        height:55,
        width:55,
        borderRadius:35,
    }
})