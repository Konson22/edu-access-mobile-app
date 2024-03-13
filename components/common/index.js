import { useNavigation } from '@react-navigation/native'
import { TouchableOpacity } from 'react-native'
import { View, Text, Image } from 'react-native'

export function ProfileIcon() {
    return <CustomIcon source={require('../../assets/icons/user.png')} marginRight={15} size={30} />
}

export function CustomIcon({ source, path, size=24, marginRight=22 }) {
  const navigattion = useNavigation()
  return (
    <TouchableOpacity onPress={() => navigattion.navigate(path)}>
      <Image source={source} style={{
        marginRight:marginRight,
        height:size,
        width:size
      }} />
    </TouchableOpacity>
  )
}
