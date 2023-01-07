import { StatusBar, View } from 'react-native'
import React from 'react'
import CartNavBar from '../components/CartNavBar'
import CartHero from '../components/CartHero'
import CartBtn from '../components/CartBtn'

const ChooseSize = ({ navigation }) => {
  return (
    <View className='flex-1 bg-[#F4F3F9]' style={{ paddingTop: StatusBar.currentHeight }}>
      <CartNavBar navigation={navigation} />
      <CartHero navigation={navigation} />
      <CartBtn navigation={navigation} goTo='ChooseCrust' text='Next' />
    </View>
  )
}

export default ChooseSize