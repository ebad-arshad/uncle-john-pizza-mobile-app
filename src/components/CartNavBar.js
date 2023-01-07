import { Image, StatusBar, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Feather, Entypo } from '@expo/vector-icons';

const CartNavBar = ({ navigation }) => {
    return (
        <View className='flex-row h-[48px] px-[20px] items-center border-t-[1px] border-gray-200 '>
            <View className='flex-1'><TouchableOpacity onPress={() => navigation.goBack()}><Feather name="arrow-left" size={20} color="#6D6E9C" /></TouchableOpacity></View>
            <View className='flex-[8]'><Text className='text-center text-[#6D6E9C]'>Uncle John Pizzas</Text></View>
            <View className='flex-1'><TouchableOpacity onPress={() => navigation.navigate('Home')}><Entypo name="home" size={20} color="#6D6E9C" /></TouchableOpacity></View>
        </View>
    )
}

export default CartNavBar