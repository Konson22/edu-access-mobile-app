import { TouchableOpacity, Button, Image, StyleSheet } from 'react-native'

export default function SyllabusCard({ book, navigation }) {
  return (
    <TouchableOpacity style={styles.container} onPress={() => navigation.navigate('ViewSyllabus', {id:book.id})}>
      <Image 
        style={styles.image} 
        source={book.cover_image} 
        resizeMode='stretch'
      />
      <Button title='download' color='green' />
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container:{
    padding:6,
    width:'49%',
    marginBottom:5,
    backgroundColor:'#fff'
  }, 
  image:{
    marginBottom:10,
    height:180,
    width:'100%'
  }
})