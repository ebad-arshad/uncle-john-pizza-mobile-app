import { Image, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import reorderPizza from '../assets/images/reorderPizza.png'
import createPizza from '../assets/images/createPizza.png'
import { LinearGradient } from 'expo-linear-gradient';

const HeroBar = ({ navigation }) => {
  return (
    <View className='flex-[10] px-5'>
      <View className='flex-row w-[100%] rounded-[20px] bg-white mt-[-40px] mb-[20px]'>
        <View className='flex-1'><Image source={reorderPizza} /></View>
        <View className='flex-1 justify-center'>
          <Text className='text-[#F5313F] text-[18px] font-bold'>Reorder again?</Text>
          <Text className='color-[#6D6E9C] font-bold text-[10px] tracking-[1px]'>SMALL,THIN CRUST, TOMATOES, BASIL, CHEESE</Text>
          <Text className='font-bold color-[#6D6E9C] text-[20px] my-2'>12$</Text>
          <TouchableOpacity className='mt-[3px]'>
            <LinearGradient
              colors={['#F5313F', '#FFA360']}
              start={{ x: 0, y: 1 }}
              end={{ x: 1, y: 1 }}
              className='h-[38px] w-[123px] rounded-[20px] justify-center items-center'
            >
              <Text className='color-white text-[15px] font-bold'>Add to Cart</Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </View>
      <TouchableOpacity className='flex-1' activeOpacity={.6} onPress={() => navigation.push('ChooseSizeScreen')}>
        <View className='flex-1 w-[100%] items-center rounded-t-[20px] bg-white'>
          <View className='pt-[31px]'>
            <Text className='font-light text-[25px] text-[#F5313F] text-center'>Create your <Text className='font-bold'>own pizza</Text></Text>
            <Text className='font-bold text-[10px] color-[#6D6E9C] tracking-[1px] text-center'>THE COST WILL DEPEND ON YOUR CUSTOMIZATION</Text>
          </View >
          <View className=''><Image source={createPizza} /></View>
        </View>
      </TouchableOpacity >
    </View >
  )
}

export default HeroBar