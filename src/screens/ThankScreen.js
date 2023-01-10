import { Text, TouchableOpacity } from 'react-native'
import React, { useEffect } from 'react'
import { LinearGradient } from 'expo-linear-gradient';

const ThankScreen = ({ navigation }) => {

    useEffect(() => {
        navigation.addListener('blur', e => {
            navigation.navigate('Drawer')
        })
    }, [navigation])

    return (
        <LinearGradient
            colors={['#F5313F', '#FFA360']}
            start={{ x: 0, y: 1 }}
            end={{ x: 1, y: 1 }}
            className='flex-1 items-center justify-center'
        >
            <Text className='text-white font-extrabold text-lg uppercase'>Your order has been recorded</Text>
            <TouchableOpacity onPress={() => navigation.navigate('Drawer')} className='w-[100px] h-[40px] mt-[20px] bg-white rounded-3xl items-center justify-center'>
                <Text className='font-bold text-[#F5313F]'>Go Home</Text>
            </TouchableOpacity>
        </LinearGradient >
    )
}

export default ThankScreen