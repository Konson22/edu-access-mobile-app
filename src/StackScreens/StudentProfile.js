import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native'
import { useRoute } from '@react-navigation/native'


import { useEffect, useState } from 'react'
import { USERS } from '../../constants'

export default function StudentProfile() {

  const [profile, setProfile] = useState(null)

  const route = useRoute()
  const userId = route.params.id;

  useEffect(() => {
    if(userId){
      const res = USERS.filter(user => user.id === userId)[0];
      if(res){
        setProfile(res)
      }
    }
  }, [userId])
  return profile ? (
    <ScrollView>
      <View style={styles.header}>
        <View style={{alignItems:'center'}}>
          <Image
            source={profile.avatar}
            resizeMode='cover'
            style={styles.image}
          />
          <View>
            <Text style={styles.title}>{profile.name}</Text>
            <Text style={styles.subTitle}>Juba Day Secondary</Text>
            <Text style={[styles.subTitle, {marginTop:5}]}>{profile.grade}</Text>
            <View style={{
              marginTop:18,
                flexDirection:'row'
              }}
            >
            <TouchableOpacity>
              <Image 
                style={styles.iconStyle}
                source={require('../../assets/icons/facebook2.png')}
                resizeMode='contain'
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image 
                style={styles.iconStyle}
                source={require('../../assets/icons/whatsapp.png')}
                resizeMode='contain'
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image 
                style={styles.iconStyle}
                source={require('../../assets/icons/twitter2.png')}
                resizeMode='contain'
              />
            </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
      <View style={{paddingVertical:7, paddingHorizontal:10, flexDirection:'row', backgroundColor:'#fff', alignItems:'center', justifyContent:'space-between'}}>
        <View style={{flexDirection:'row'}}>
          {['About', 'Files', 'Videos'].map(item => (
            <TouchableOpacity style={{backgroundColor:'#fff', padding:15}} key={item}>
              <Text>{item}</Text>
            </TouchableOpacity>
          ))}
        </View>
        <TouchableOpacity style={{backgroundColor:'lightgreen', padding:10}}>
            <Text>Sent Message</Text>
          </TouchableOpacity>
      </View>
     
    </ScrollView>
  ):(
    <Text>No profile</Text>
  )
}

const styles = StyleSheet.create({
  container:{

  },
  header:{
    paddingVertical:28,
    paddingHorizontal:15,
    backgroundColor:'rgb(134, 202, 165)'
  },
  title:{
    marginBottom:10,
    fontSize:26
  },
  subTitle:{
    fontSize:17
  },
  image:{
    marginRight:20,
    marginBottom:15,
    height:160,
    width:160,
    borderRadius:80
  },
  iconStyle:{
    marginRight:10,
    height:30,
    width:30
  }
})
