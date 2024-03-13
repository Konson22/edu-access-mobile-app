import { StyleSheet, Text } from 'react-native'

export function Heading1({text}) {
  return (
    <Text style={{fontSize:18}}>{text}</Text>
  )
}


export function checkImageURL(url) {
    if (!url) return false
    else {
        const pattern = new RegExp('^https?:\\/\\/.+\\.(png|jpg|jpeg|bmp|gif|webp)$', 'i');
        return pattern.test(url);
    }
};

export const globalStyles = StyleSheet.create({
  tab:(selectText, item) => ({
    paddingHorizontal:10,
    paddingVertical:8,
    borderRadius: 7,
    borderWidth: 1,
    borderColor: selectText === item ? '#444' : '#ccc',
    color: selectText === item ? '#333' : '#666',
    backgroundColor: selectText === item ? '#fff':'#fff7',
  }),
  title:{
    fontSize:20
  }
})