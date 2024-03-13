import { View, StyleSheet, FlatList } from 'react-native'
import { UserCard } from '../../../components/cards/UserCard'

export default function DisplayUsers({ title, data, isFriend=false}) {
  return (
    <View style={styles.container}> 
      <FlatList
        data={data}
        renderItem={({item}) => <UserCard user={item} />}
      />
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        paddingHorizontal:15
    },
    title:{
      fontSize:18
    }
})