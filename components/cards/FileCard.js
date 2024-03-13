import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons';
import { COLORS } from '../../constants';


export default function FileCard({ file, cName={} }) {
  return (
    <View style={[styles.content, cName]}>
        <View>
            <Text style={{fontSize:19, marginBottom:10}}>{file.subject}</Text>
            <Text style={{color:'#999'}}>{file.year}</Text>
        </View>
        <TouchableOpacity>
            <Ionicons name='download-outline' size={25} />
        </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
    content:{
        marginBottom:7,
        borderRadius:10,
        padding:10,
        backgroundColor:'#eee',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between'
    }
})