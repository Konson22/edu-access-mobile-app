import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity, TextInput } from 'react-native'
import { useRoute } from '@react-navigation/native'
import Ionicons from 'react-native-vector-icons/Ionicons'


import { COLORS } from '../../../constants/Them'

export default function ConversationScreen() {

  const route = useRoute()
  const { conversationId } = route.params

  return (
    <View style={styles.container}>
      <Text>Conversation {conversationId}</Text>
      <ScrollView style={{flex:1, paddingHorizontal:10}} showsVerticalScrollIndicator={false}>
        {messages.map(message => (
          <View style={styles.messageContent}>
            <Image
              style={styles.avatar}
              source={message.avatar}
              resizeMode='cover'
            />
            <View style={styles.card}>
              <Text style={{fontSize:18}}>{message.userName}</Text>
              <Text style={{fontSize:13, marginVertical:5}}>Juba Day</Text>
              <Text>{message.text}</Text>
            </View>
          </View>
        ))}
      </ScrollView>
      <View style={styles.chatBox}>
        <TextInput style={styles.input} />
        <TouchableOpacity style={styles.button}>
          {/* <Ionicons name='plane-paper' /> */}
            <Text>Sent</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}


const styles = StyleSheet.create({
  container:{
    flex:1,
  },
  messageContent:{
    marginBottom:15,
    flexDirection:'row',
  },
  card:{
   padding:15,
   flexBasis:'80%',
    backgroundColor:'#fff',
  },
  avatar:{
    marginRight:10,
    height:47,
    width:'15%',
    borderRadius:25,
  },
  chatBox:{
    marginHorizontal:10,
    marginBottom:10,
    height:60,
    borderRadius:7,
    borderWidth:1,
    borderColor:COLORS.gray,
    flexDirection:'row',
    backgroundColor:'#fff'
  },
  input:{
    height:'100%',
    flexGrow:1,
  },
  button:{
    paddingHorizontal:15,
    height:'100%',
    backgroundColor:COLORS.green,
    justifyContent:'center'
  },
})

const messages = [
  {
    id:1,
    userName:'Grace',
    avatar:require('../../../assets/images/avatars/grace.jpg'),
    text:'It is an unofficial and free JavaScript ebook created for educational purposes. All the content is extracted from Stack Overflow Documentation',
    reply:15
  },
  {
    id:2,
    userName:'John Marit',
    avatar:require('../../../assets/images/avatars/john.jpg'),
    text:'It is an unofficial and free JavaScript ebook created for educational purposes. All the content is extracted from Stack Overflow Documentation',
    reply:65
  },
  {
    id:3,
    userName:'Konson Ak',
    avatar:require('../../../assets/images/avatars/kon2.jpg'),
    text:'It is an unofficial and free JavaScript ebook created for educational purposes. All the content is extracted from Stack Overflow Documentation',
    reply:25
  },
  {
    id:4,
    userName:'Malier GSDC',
    avatar:require('../../../assets/images/avatars/malier.jpg'),
    text:'It is an unofficial and free JavaScript ebook created for educational purposes. All the content is extracted from Stack Overflow Documentation',
    reply:10
  },
]