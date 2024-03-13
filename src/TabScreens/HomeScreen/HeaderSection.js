import { View, Text, ImageBackground } from 'react-native'
const bg = require('../../../assets/images/bg2.jpg')
export default function HeaderSection() {
  return (
    <ImageBackground
        style={{
            margin:10,
            borderRadius:15,
            overflow:'hidden',
            height:200,
        }}
        source={bg}
    >
      <Text>HeaderSection</Text>
    </ImageBackground>
  )
}