import { Image, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Bars3Icon } from "react-native-heroicons/solid";
import { ShoppingBagIcon } from "react-native-heroicons/solid";

const NavBar = ({ navigation }) => {
    return (
        <View className='flex-row h-[48px] px-[20] items-center border-t-[1px] border-gray-200 '>
            <View className='flex-1 pr-[20px]'><TouchableOpacity onPress={() => navigation.openDrawer()}><Bars3Icon color='gray' /></TouchableOpacity></View>
            <View className='flex-[8]'><Text className='font-extralight'>Deliver to:</Text><Text className='font-bold text-[10px] text-[#6D6E9C]'>HOME</Text></View>
            <View className='flex-1'><TouchableOpacity><ShoppingBagIcon size={20} color='#6D6E9C' /></TouchableOpacity></View>
        </View>
    )
}

export default NavBar