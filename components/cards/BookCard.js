import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { COLORS } from '../../constants/Them'


export default function BookCard({ imageURL, authorName, description }) {
  return (
    <View style={styles.container}>
        <Image
            style={styles.image}
            source={{uri:imageURL}}
            resizeMode='stretch'
        />
        <View style={styles.detailContainer}>
            <View style={{flex:1}}>
                <Text style={{fontSize:19, marginBottom:9}}>{authorName}</Text>
                <Text numberOfLines={4}>{description}</Text>
            </View>
            <View style={{flexDirection:'row'}}>
                <Ionicons name='star-outline' size={19} color='#d49c00' />
                <Ionicons name='star-outline' size={19} style={{marginHorizontal:5}} color='#d49c00' />
                <Ionicons name='star-outline' size={19} color='#d49c00' />
                <Ionicons name='star-outline' size={19} style={{marginHorizontal:5}} color='#d49c00' />
                <Ionicons name='star-outline' size={19} color='#d49c00' />
            </View>
            <TouchableOpacity>
                <Text style={styles.button}>Download</Text>
            </TouchableOpacity>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        margin:10,
        backgroundColor:'#fff',
        flexDirection:'row',
        justifyContent:'space-between'
    },
    image:{
        height:180,
        width:'40%'
    },
    detailContainer:{
        padding:10,
        flexBasis:'60%',
        alignItems:'flex-start',
        justifyContent:'center',
    },
    button:{
        marginTop:10,
        padding:10,
        backgroundColor:COLORS.green
    },
})