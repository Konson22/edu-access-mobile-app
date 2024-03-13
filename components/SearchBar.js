import { View, Text, TextInput, StyleSheet, TouchableOpacity, Image } from 'react-native'
import { COLORS } from '../constants/Them'
import { useState } from 'react'

export default function SearchBar({ handlSearch }) {
    const [queryText, setQueryText] = useState('')
  return (
    <View style={styles.container}>
        <TextInput style={styles.input} onChangeText={text => setQueryText(text)} />
        <TouchableOpacity style={styles.button} onPress={() => handlSearch(queryText)}>
            <Image 
                style={styles.icon}
                source={require('../assets/icons/search.png')}
                resizeMode='contain' 
            />
        </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        margin:10,
        height:50,
        flexDirection:'row',
        backgroundColor:'#fff',
        alignItems:'center',
        borderRadius:10,
        borderWidth:1,
        borderColor:COLORS.gray
    },
    input:{
        height:'100%',
        flexGrow:1,
    },
    button:{
        marginRight:4,
        borderRadius:10,
        paddingHorizontal:9,
        height:40,
        backgroundColor:COLORS.green,
        justifyContent:'center'
    },
    icon:{
        height:27, 
        width:27, 
        tintColor:'#fff',
    },
})