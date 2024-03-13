import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import { SUBJECTS } from '../../constants'

export default function ChatRoomScreen() {

  const navigation = useNavigation()
  return (
    <ScrollView style={styles.container}>
      <Text>Join Chat Room</Text>
     
      {SUBJECTS.slice(1).map(subject => (
        <TouchableOpacity style={styles.card} key={subject}
          onPress={() => navigation.navigate('ConversationScreen', { conversationId:subject })}
        >
          <Text style={{
            fontSize:20
          }}>
            {subject}
          </Text>
          <Text style={{
            marginVertical:7,
            fontSize:16
          }}>
            25+ Students
          </Text>
          <Text style={{
            fontSize:16
          }}>
            5+ Topics
          </Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container:{
    padding:15,
  },
  content:{
    flexDirection:'row',
    flexWrap:'wrap',
    justifyContent:'space-between'
  },
  card:{
    marginBottom:10,
    padding:15,
    backgroundColor:'#fff'
  }
})