import { useState } from 'react'
import { View, Text, ScrollView, FlatList, TouchableOpacity, StyleSheet } from 'react-native'
import { BOOKS } from '../../constants';
import SyllabusCard from '../../components/cards/SyllabusCard';
import { globalStyles } from '../../utils';

export default function SyllabusScreen({ navigation }) {
  const [activeLink, setActiveLink] = useState('All Syllabus');
  const [currentBooks, setCurrentBooks] = useState(BOOKS);

  return (
    <ScrollView>
      <View style={{width:'100%'}}>
        <FlatList
          style={styles.nav}
          data={DATA}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => setActiveLink(item)}>
              <Text style={globalStyles.tab(activeLink, item)}>{item}</Text>
            </TouchableOpacity>
          )}
          keyExtractor={item => item}
          horizontal
          contentContainerStyle={{
            columnGap:10
          }}
        />
      </View>
      <View style={{padding:10}}>
        <Text style={{fontSize:20}}>{activeLink} ({currentBooks.length})</Text>
        <View style={styles.booksWraper}>
          {currentBooks.map(book => <SyllabusCard book={book} navigation={navigation} key={book.id} />)}
        </View>
      </View>
    </ScrollView>
  )
}

const DATA = ['All Syllabus', 'Primary', 'Secondary']

const styles = StyleSheet.create({
  nav:{
    padding:15
  },
  booksWraper:{
    marginTop:20,
    flexDirection:'row', 
    flexWrap:'wrap', 
    justifyContent:'space-between'
  }
})