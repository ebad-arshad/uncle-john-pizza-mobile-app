import React, { useEffect } from 'react'
import NavBar from '../components/NavBar'
import GreetingBar from '../components/GreetingBar'
import HeroBar from '../components/HeroBar'
import { useDispatch } from 'react-redux'
import { SafeAreaView } from 'react-native-safe-area-context';

const HomeScreen = ({ navigation }) => {

    const dispatch = useDispatch()

    useEffect(() => {
        navigation.addListener('focus', e => {
            dispatch({ type: 'CLEAR_DATA' })
        })
    }, [navigation])

    return (
        <SafeAreaView className='flex-1'>
            <NavBar navigation={navigation} />
            <GreetingBar />
            <HeroBar navigation={navigation} />
        </SafeAreaView>
    )
}

export default HomeScreen