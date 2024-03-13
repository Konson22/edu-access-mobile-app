import { View, Text, ScrollView } from 'react-native'
import SuggestedBooks from './SuggestedBooks'
import ExamsFilesSection from './ExamsFilesSection'
import HeaderSection from './HeaderSection'

export default function HomeScreen() {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <HeaderSection />
      <SuggestedBooks />
      <ExamsFilesSection />
    </ScrollView>
  )
}