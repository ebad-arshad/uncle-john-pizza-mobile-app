import React from 'react'
import CartNavBar from '../components/CartNavBar'
import CartBtn from '../components/CartBtn'
import BucketHero from '../components/BucketHero'
import { SafeAreaView } from 'react-native-safe-area-context';

const BucketScreen = ({ navigation }) => {

    return (
        <SafeAreaView className='flex-1 bg-[#F4F3F9]'>
            <CartNavBar navigation={navigation} />
            <BucketHero />
            <CartBtn navigation={navigation} goTo='ThankScreen' disable={false} text='Confirm Pizza' />
        </SafeAreaView>
    )
}

export default BucketScreen