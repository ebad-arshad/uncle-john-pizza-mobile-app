import { StatusBar, View } from 'react-native'
import React from 'react'
import NavBar from '../components/NavBar'
import GreetingBar from '../components/GreetingBar'
import HeroBar from '../components/HeroBar'

const HomeScreen = ({ navigation }) => {
    return (
        <View style={{
            flex: 1,
            paddingTop: StatusBar.currentHeight,
        }}>
            <NavBar navigation={navigation} />
            <GreetingBar />
            <HeroBar navigation={navigation} />
        </View>
    )
}

export default HomeScreen