import { Text, View } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient';

const GreetingBar = () => {
    return (
        <View className='flex-[3]'>
            <LinearGradient
                colors={['#F5313F', '#FFA360']}
                start={{ x: 0, y: 1 }}
                end={{ x: 1, y: 1 }}
                className='h-[100%] pt-5 pl-11'
            >
                <Text className='text-white font-light mb-1'>Hi Ebad!</Text>
                <Text className='text-white font-light pl-3 border-l-[1px] border-white text-[24px] w-[80%]'>What <Text className='font-bold'>pizza</Text> do you want to try today?</Text>
            </LinearGradient>
        </View>
    )
}

export default GreetingBar