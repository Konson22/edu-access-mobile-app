import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { COLORS, FILES } from '../../../constants';
import FileCard from '../../../components/cards/FileCard';


export default function ExamsFilesSection() {
    
    const navigation = useNavigation()

  return (
    <View style={styles.container}>
        <Text style={{fontSize:20, marginBottom:15}}>Exams Papers</Text>
        {FILES.map(file => <FileCard file={file} key={file.id} />)}
        <TouchableOpacity 
            style={{marginTop:20, justifyContent:'center', alignItems:'center'}}
            onPress={() => navigation.navigate('ExamsPaperSecreen')}
        >
            <Text style={{backgroundColor:COLORS.green, paddingVertical:10, paddingHorizontal:15}}>View All</Text>
        </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        margin:10,
        padding:15,
        backgroundColor:'#fff',
        borderWidth:1,
        borderColor:COLORS.gray,
    }
})

