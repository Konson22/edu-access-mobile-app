import { View, Text, ScrollView, StyleSheet, FlatList, TouchableOpacity, ActivityIndicator } from 'react-native'
import SearchBar from '../../components/SearchBar'
import { useState } from 'react';
import BookCard from '../../components/cards/BookCard';
import useFetch from '../../hooks/useFetch';
import { globalStyles } from '../../utils';

export default function LibraryScreen({ navigation }) {

  const [selectText, setSelectText] = useState(DATA[0]);

  const { isLoading, error, data } = useFetch(`https://www.googleapis.com/books/v1/volumes?q=${selectText}`)

  const handlSearch = item => {
    setSelectText(item)
    navigation.navigate('Search', {query:item})
  }
  return (
    <ScrollView>
      <SearchBar handlSearch={handlSearch} />
      <View style={{marginTop:10}}>
        <FlatList
          style={{width:'100%', marginLeft:10}}
          data={DATA}
          renderItem={({ item }) => (
            <TouchableOpacity 
              style={globalStyles.tab(selectText, item)} 
              onPress={() => handlSearch(item)}
            >
              <Text>{item}</Text>
            </TouchableOpacity>
          )}
          horizontal
          keyExtractor={item => item}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            columnGap:10
          }}
        />
      </View>
      {isLoading && <ActivityIndicator size={'large'} />}
      {error &&
        <View 
          style={{
            marginTop:25,
            alignItems:'center',
            justifyContent:'center'
          }}
        >
          <Text style={{fontSize:15,}}>YOU ARE NOT CONNECTED TO INTERNET</Text>
          <Text style={{fontSize:16, marginTop:10, color:'red'}}>{error.message}</Text>
        </View> 
      }
      {!isLoading && data.length > 0 &&
        <View style={{marginTop:20}}>
          <Text style={styles.title}>Most Rated Books</Text>
          {data.map(book => 
            <BookCard 
              imageURL={book.volumeInfo?.imageLinks?.smallThumbnail} 
              authorName={book.volumeInfo.title} 
              description={book.volumeInfo.subtitle} 
              key={book.id} 
            />
          )}
        </View>
      }
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  title:{
    marginBottom:10, 
    fontSize:18, 
    marginLeft:10
  },
})

export const DATA = [
  'Science',
  'Technology',
  'Physics',
  'Chemistry',
  'Biology',
  'Art',
  'History',
]

