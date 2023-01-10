import React from 'react'
import CartNavBar from '../components/CartNavBar'
import CartHero from '../components/CartHero'
import CartBtn from '../components/CartBtn'
import { SafeAreaView } from 'react-native-safe-area-context';

const ChooseCrustScreen = ({ navigation }) => {

    return (
        <SafeAreaView className='flex-1 bg-[#F4F3F9]'>
            <CartNavBar navigation={navigation} />
            <CartHero cartPage='ChooseToppingsScreen' navigation={navigation} />
            <CartBtn navigation={navigation} goTo='BucketScreen' disable={false} text='Done' />
        </SafeAreaView>
    )
}

export default ChooseCrustScreen