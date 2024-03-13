import { useState } from 'react';
import { View, Text, ScrollView, FlatList, StyleSheet, TouchableOpacity } from 'react-native'

import { COLORS, FILES, SUBJECTS } from '../../constants'
import FileCard from '../../components/cards/FileCard'
import { globalStyles } from '../../utils';

export default function ExamsPaperSecreen() {

  const [selectText, setSelectText] = useState('All Papers');

  return (
    <ScrollView style={{padding:10}} showsVerticalScrollIndicator={false}>
      <View style={{marginVertical:20}}>
        <FlatList
          data={SUBJECTS}
          renderItem={({ item }) => (
            <TouchableOpacity style={globalStyles.tab(selectText, item)}
              onPress={() => setSelectText(item)}
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
      <View style={{marginBottom:20, flexDirection:'row', alignItems:'center', justifyContent:'space-between'}}>
        <Text style={globalStyles.title}>{selectText}</Text>
        <View style={{
          paddingVertical:10,
          borderWidth:1,
          borderRadius:7,
          paddingHorizontal:12,
          backgroundColor:'#fff'
        }}>
          <Text>Exam Year</Text>
        </View>
      </View>
      {FILES.map(file => <FileCard cName={styles.fileCard} file={file} key={file.id} />)}
    </ScrollView>
  )
}



const styles = StyleSheet.create({
  fileCard:{
    padding:10,
    borderWidth:1,
    backgroundColor:'#fff',
    borderColor:COLORS.gray
  },
})