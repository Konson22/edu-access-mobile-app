import { View, Text } from 'react-native'
// import Pdf from 'react-native-pdf';



export default function ViewSyllabus() {
  const PdfResource = { uri: 'https://eastafricaschoolserver.org/content/_public/Local%20Topics/South%20Sudan/South%20Sudan%20Secondary%20Textbooks/Secondary%20Chemistry/Secondary%20Chemistry%20Student%20Textbooks/Secpndary%20Chemistry%201%20Student%20Textbook.pdf', cache: true };
  return (
    <View>
      {/* <Pdf 
          trustAllCerts={false}
          source={PdfResource}
      /> */}
    </View>
  )
}