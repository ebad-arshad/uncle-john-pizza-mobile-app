import { Image, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { LinearGradient } from 'expo-linear-gradient';

const SizeBtn = ({ text, btnActive, setBtnActive }) => {
    return btnActive === text ? <TouchableOpacity className='w-[33%]'>
        <LinearGradient
            colors={['#F5313F', '#FFA360']}
            start={{ x: 0, y: 0 }}
            end={{ x: .6, y: 1 }}
            style={{
                shadowColor: "#F5313F",
                shadowOffset: {
                    width: 0,
                    height: 3,
                },
                shadowOpacity: 0.18,
                shadowRadius: 4.59,
                elevation: 5
            }}
            className='w-[100%] h-[40px] rounded-full items-center justify-center'
        >
            <Text className='font-bold text-white'>{text}</Text>
        </LinearGradient >
    </TouchableOpacity>
        : <TouchableOpacity onPress={() => setBtnActive(text)} className='w-[33%] h-[40px] items-center justify-center'><Text className='font-light text-[#6D6E9C]'>{text}</Text></TouchableOpacity>
}

const CartHero = () => {
    const [price, setPrice] = useState(null);
    const [size, setSize] = useState(null);
    const [btnActive, setBtnActive] = useState(null);

    const globalState = { price, setPrice, size, setSize, btnActive, setBtnActive }

    return (
        <View className='flex-1'>
            <View className='flex-[0.4]'>
                <LinearGradient
                    colors={['#F5313F', '#FFA360']}
                    start={{ x: 0, y: 1 }}
                    end={{ x: 1, y: 1 }}
                    className='h-[100%] flex-row justify-between pt-5 px-[20px]'
                >
                    <View>
                        <Text className='text-[25px] font-light tracking-[-0.3px] text-white'>Create Your Pizza</Text>
                        <Text className='text-[10px] font-bold tracking-[1px] text-white/30 backdrop-blur-[20px]'>SIZE, CRUST, TOPPING</Text>
                    </View>
                    <Text className='text-[25px] font-bold tracking-[-0.3px] text-white'>{btnActive === 'Small' ? '$8.00' : btnActive === 'Medium' ? '$10.00' : btnActive === 'Large' ? '$12.00' : '$0'}</Text>
                </LinearGradient>
                <View className='w-[320px] h-[320px] mt-[-50%] rounded-full bg-white/80 mx-auto items-center justify-center'><View className='w-[280px] h-[280px] rounded-full bg-white items-center justify-center'><Image source={require('../assets/images/createCartPizza.png')} /></View></View>
                <View className='bg-[#DADAE5] w-[48px] h-[22px] rounded-[4px] justify-center items-center mx-auto mt-[20px]'><Text className='text-[#A0A8CC] font-bold text-[10px] tracking-[1px]'>{btnActive === 'Small' ? '10”' : btnActive === 'Medium' ? '12”' : btnActive === 'Large' ? '14”' : '0”'}</Text></View>
                <View className='w-[90%] rounded-[20px] bg-white mx-auto text-center mt-[20px] p-[20px]'
                    style={{
                        shadowColor: "#000000",
                        shadowOffset: {
                            width: 0,
                            height: 1,
                        },
                        shadowOpacity: 0.15,
                        shadowRadius: 1.00,
                        elevation: 1
                    }}>
                    <Text className='font-light text-[20px] tracking-[-0.3px] text-[#6D6E9C] text-center mb-[20px]'>Choose your <Text className='font-bold text-[20px] tracking-[-0.3px] text-[#6D6E9C]'>size</Text></Text>
                    <View className=' flex-row justify-between'>
                        <SizeBtn {...globalState} text='Small' />
                        <SizeBtn {...globalState} text='Medium' />
                        <SizeBtn {...globalState} text='Large' />
                    </View>
                </View>
            </View>
        </View >
    )
}

export default CartHero