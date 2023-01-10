import { View, Text, Image, ScrollView } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import { pizzaIcon } from '../assets/images/index'
import { bucketPizza } from '../assets/images/index'
import { Foundation } from '@expo/vector-icons';
import { useSelector } from 'react-redux'

const BucketHero = () => {

    const { size, sizePrice, crust, crustPrice, toppings, toppingsPrice } = useSelector(state => state.userStore)

    return (
        <View className='flex-1'>
            <LinearGradient
                colors={['#F5313F', '#FFA360']}
                start={{ x: 0, y: 1 }}
                end={{ x: 1, y: 1 }}
                className='w-full h-[200px] pl-6 pt-4'>
                <View className='w-8 h-8 mb-1'>
                    <Image className='w-full h-full object-contain' source={pizzaIcon} />
                </View>
                <Text className='font-light text-[25px] color-white'>Check your</Text>
                <Text className='font-bold color-white text-2xl mt-[-4px]'>custom pizza</Text>
            </LinearGradient>
            <View className='absolute top-[60px] right-[-250px]'>
                <Image source={bucketPizza} />
            </View>
            <View className='mt-[20px] w-[60%] min-h-[350px] rounded-tr-3xl bg-white/90 '>
                <View className='flex-[.5] pl-[22px] justify-end'>
                    <Foundation name="shopping-cart" size={16} color="#F5313F" />
                    <Text className='mb-[16px] uppercase text-[#F5313F] text-[10px] font-bold'>order summary</Text>
                </View>
                <ScrollView className='flex-1 border-y-[#DADAE5]/50 border-y-[1.5px]' showsVerticalScrollIndicator={false}>
                    <View className='mt-[20px]' />
                    <View className='flex-row items-center justify-between mx-[22px]'>
                        <Text className='text-[#6D6E9C] text-[14px]'>{size} Size </Text>
                        <Text className='text-[10px] font-bold text-[#6D6E9C] tracking-[1px]'>{`$${sizePrice.toFixed(2)}`}</Text>
                    </View>
                    <View className='flex-row items-center justify-between mx-[22px]'>
                        <Text className='text-[#6D6E9C] text-[14px]'>{crust} Crust </Text>
                        <Text className='text-[10px] font-bold text-[#6D6E9C] tracking-[1px]'>{`$${crustPrice.toFixed(2)}`}</Text>
                    </View>
                    {
                        toppings.map((v, i) => (
                            <View key={i} className='flex-row items-center justify-between mx-[22px]'>
                                <Text className='text-[#6D6E9C] text-[14px]'>{v}</Text>
                                <Text className='text-[10px] font-bold text-[#6D6E9C] tracking-[1px]'>{`$${i > 2 ? '0.50' : '0.00'}`}</Text>
                            </View>
                        ))
                    }
                    <View className='mb-[20px]' />
                </ScrollView>
                <View className='flex-[.5] px-[22px]'>
                    <View className='flex-row items-center justify-between mt-[10px]'>
                        <Text className='text-[#6D6E9C]'>Total: </Text>
                        <Text className='text-[#6D6E9C] text-xl font-light'>{`$${(sizePrice + crustPrice + toppingsPrice).toFixed(2)}`}</Text>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default BucketHero