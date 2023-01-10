import React, { useState } from 'react'
import CartNavBar from '../components/CartNavBar'
import CartHero from '../components/CartHero'
import CartBtn from '../components/CartBtn'
import { SafeAreaView } from 'react-native-safe-area-context';

const ChooseCrustScreen = ({ navigation }) => {

  const [isBtnDisabled, setIsBtnDisabled] = useState(true);

  return (
    <SafeAreaView className='flex-1 bg-[#F4F3F9]'>
      <CartNavBar navigation={navigation} />
      <CartHero cartPage='ChooseCrustScreen' isDisabled={setIsBtnDisabled} navigation={navigation} />
      <CartBtn navigation={navigation} goTo='ChooseToppingsScreen' disable={isBtnDisabled} text='Next' />
    </SafeAreaView>
  )
}

export default ChooseCrustScreen