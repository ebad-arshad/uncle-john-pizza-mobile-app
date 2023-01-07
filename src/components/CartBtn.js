import { Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient';

const CartBtn = ({ text, goTo, navigation }) => {
    return (
        <TouchableOpacity onPress={() => navigation.navigate(goTo)}>
            <LinearGradient
                colors={['#F5313F', '#FFA360']}
                start={{ x: 0, y: 0 }}
                end={{ x: .6, y: 1 }}
                className='w-full h-[50px] justify-center items-center'
            >
                <Text className='text-center text-white font-bold'>{text}</Text>
            </LinearGradient>
        </TouchableOpacity>
    )
}

export default CartBtn