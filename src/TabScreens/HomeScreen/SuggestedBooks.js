import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native'
import React from 'react'
import { BOOKS, COLORS } from '../../../constants'
import { Image } from 'react-native'

export default function SuggestedBooks() {
  return (
    <View style={{marginVertical:20}}>
        <Text style={styles.title}>Sugested Books</Text>
        <FlatList
          style={{paddingLeft:10}}
          data={BOOKS}
          renderItem={({ item }) => (
            <TouchableOpacity >
              <Image
                style={{
                  height:150,
                  width:140
                }}
                source={item.cover_image}
                resizeMode='stretch'
                />
                <Text style={styles.btn}>View</Text>
            </TouchableOpacity>
          )}
          keyExtractor={item => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            columnGap:10
          }}
        />
      </View>
  )
}

const styles = StyleSheet.create({
  title:{
    marginBottom:10, 
    fontSize:18, 
    marginLeft:10
  },
  btn:{
    backgroundColor:COLORS.green, 
    paddingVertical:7, 
    textAlign:'center', 
    color:'#fff', 
    marginTop:10,
  }
})

