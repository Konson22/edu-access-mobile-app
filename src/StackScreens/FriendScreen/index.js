import { View, Text, StyleSheet, FlatList, TouchableOpacity, ScrollView } from 'react-native'
import { useState } from 'react';

import { USERS } from '../../../constants'
import { ActiveUserCard } from '../../../components/cards/UserCard';
import DisplayUsers from './DisplayUsers';
import { globalStyles } from '../../../utils';


export default function FriendScreen() {

  const [currentPage, setCurrentPage] = useState('Friends');

  return (
    <ScrollView style={{flex:1, width:'100%'}}>
        <View>
            <FlatList 
                style={{marginVertical:20}}
                data={USERS}
                renderItem={({item}) => <ActiveUserCard user={item} />}
                keyExtractor={(item) => item.id}
                horizontal
                showsHorizontalScrollIndicator={false}
            />
        
            <View style={styles.subNav}>
                <Text style={{fontSize:20, flexGrow:1}}>{currentPage}</Text>
                <View style={{flexDirection:'row'}}>
                    <TouchableOpacity style={[globalStyles.tab(currentPage, 'Friends'), {marginRight:10}]} onPress={() => setCurrentPage('Friends')}>
                        <Text>Friends</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={globalStyles.tab(currentPage, 'Users')} onPress={() => setCurrentPage('Users')}>
                        <Text>Users</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <DisplayUsers title={currentPage} data={USERS} isFriend={true} />
        </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
    subNav:{
        paddingHorizontal:15,
        marginVertical:20,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between'
    },
    navItem:{
      marginLeft:10,
      padding:10,
      borderRadius:5,
      backgroundColor:'#fff'
    }
})