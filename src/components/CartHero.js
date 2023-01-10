import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { LinearGradient } from 'expo-linear-gradient';
import { useDispatch, useSelector } from 'react-redux';
import {
    pepperoni
    , sausage
    , extraCheese
    , blackOlives
    , jalapeno
    , mushroom
    , onion
} from '../assets/images';
import { RadioButton } from 'react-native-paper';

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

const ChooseTopping = ({ imageName, name, setItemsArray, itemsArray, id, setIsLastItem }) => {

    const [checked, setChecked] = useState(itemsArray.includes(name) ? true : false);

    const changeRadioCheck = () => {
        if (itemsArray.includes(name) && itemsArray.length === 1) {
            setIsLastItem(true);
        } else {
            setIsLastItem(false);
        }
        !itemsArray.includes(name) ? setItemsArray(e => [...e, name]) : setItemsArray(e => e.filter((v) => v !== name));
        setChecked(!checked);
    }

    return (
        <View className='flex-row items-center justify-center w-52 h-[80px] rounded-[16px] my-4 mr-3 bg-white'
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
        >
            <View className='mx-2 w-16 h-16'>
                <Image className='w-[100%] h-[100%] object-contain' source={imageName} />
            </View>
            <View className=''>
                <Text className='text-[#6D6E9C] font-bold text-[14px]'>{name}</Text>
                <Text className='text-[#6D6E9C] font-light text-[12px]'>{id > 3 ? '+ $0.50' : '+ $0.00'}</Text>
            </View>
            <View className='m-[2px] ml-auto self-end'>
                <RadioButton
                    value='first'
                    status={checked ? 'checked' : 'unchecked'}
                    color='#6D6E9C'
                    uncheckedColor='#6D6E9C'
                    onPress={changeRadioCheck}
                />
            </View>
        </View>
    )
}

const CartHero = ({ cartPage, isDisabled }) => {

    const dispatch = useDispatch();
    const userStore = useSelector((state) => state.userStore);
    const [btnActive, setBtnActive] = useState(null);
    const [itemsArray, setItemsArray] = useState([]);
    const [isLastItem, setIsLastItem] = useState(false);
    const globalState = { itemsArray: userStore.toppings.length === 0 ? itemsArray : userStore.toppings, setItemsArray, setIsLastItem }

    if (cartPage === 'ChooseSizeScreen') {

        useEffect(() => {
            if (userStore.size && !btnActive) {
                isDisabled(false)
                setBtnActive(userStore.size)
            }
            else if (btnActive) {
                dispatch({ type: 'SIZE_DATA', size: btnActive, price: btnActive === 'Small' ? 8 : btnActive === 'Medium' ? 10 : btnActive === 'Large' ? 12 : null })
                isDisabled(false)
            }
        }, [btnActive])

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
                        <Text className='text-[25px] font-bold tracking-[-0.3px] text-white'>{userStore.sizePrice ? '$' + userStore.sizePrice.toFixed(2) : '$0'}</Text>
                    </LinearGradient>
                    <View className='w-[320px] h-[320px] mt-[-50%] rounded-full bg-white/80 mx-auto items-center justify-center'><View className='w-[280px] h-[280px] rounded-full bg-white items-center justify-center'><Image source={require('../assets/images/createCartPizza.png')} /></View></View>
                    <View className='bg-[#DADAE5] w-[48px] h-[22px] rounded-[4px] justify-center items-center mx-auto mt-[20px]'><Text className='text-[#A0A8CC] font-bold text-[10px] tracking-[1px]'>{btnActive === 'Small' ? '10”' : btnActive === 'Medium' ? '12”' : btnActive === 'Large' ? '14”' : '0”'}</Text></View>
                    <View className='w-[90%] rounded-[20px] bg-white mx-auto text-center mt-[20px] p-[20px]'
                        style={{
                            shadowColor: "#F5313F",
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
                            <SizeBtn btnActive={btnActive} setBtnActive={setBtnActive} text='Small' />
                            <SizeBtn btnActive={btnActive} setBtnActive={setBtnActive} text='Medium' />
                            <SizeBtn btnActive={btnActive} setBtnActive={setBtnActive} text='Large' />
                        </View>
                    </View>
                </View>
            </View >
        )
    }
    else if (cartPage === 'ChooseCrustScreen') {

        useEffect(() => {
            if (userStore.crust && !btnActive) {
                isDisabled(false)
                setBtnActive(userStore.crust)
            }
            else if (btnActive) {
                dispatch({ type: 'CRUST_DATA', crust: btnActive, price: btnActive === 'Thin' ? 2 : btnActive === 'Thick' ? 4 : null })
                isDisabled(false)
            }
        }, [btnActive])

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
                            <Text className='text-[10px] font-bold tracking-[1px] text-white/30 backdrop-blur-[20px] uppercase'><Text className='text-white'>{userStore.size}, </Text>CRUST, TOPPING</Text>
                        </View>
                        <Text className='text-[25px] font-bold tracking-[-0.3px] text-white'>{userStore.sizePrice && userStore.crustPrice ? '$' + eval(userStore.sizePrice + userStore.crustPrice).toFixed(2) : '$' + userStore.sizePrice.toFixed(2)}</Text>
                    </LinearGradient>
                    <View className='w-[320px] h-[320px] mt-[-50%] rounded-full bg-white/80 mx-auto items-center justify-center'><View className='w-[280px] h-[280px] rounded-full bg-white items-center justify-center'><Image source={require('../assets/images/createCartPizza.png')} /></View></View>
                    <View className='bg-[#DADAE5] w-[48px] h-[22px] rounded-[4px] justify-center items-center mx-auto mt-[20px]'><Text className='text-[#A0A8CC] font-bold text-[10px] tracking-[1px]'>{btnActive === 'Thin' ? '+$2.00' : btnActive === 'Thick' ? '+$4.00' : '+$0'}</Text></View>
                    <View className='w-[90%] rounded-[20px] bg-white mx-auto text-center mt-[20px] p-[20px]'
                        style={{
                            shadowColor: "#F5313F",
                            shadowOffset: {
                                width: 0,
                                height: 1,
                            },
                            shadowOpacity: 0.15,
                            shadowRadius: 1.00,
                            elevation: 1
                        }}>
                        <Text className='font-light text-[20px] tracking-[-0.3px] text-[#6D6E9C] text-center mb-[20px]'>Choose your <Text className='font-bold text-[20px] tracking-[-0.3px] text-[#6D6E9C]'>crust</Text></Text>
                        <View className=' flex-row justify-between'>
                            <SizeBtn btnActive={btnActive} setBtnActive={setBtnActive} text='Thin' />
                            <SizeBtn btnActive={btnActive} setBtnActive={setBtnActive} text='Thick' />
                        </View>
                    </View>
                </View>
            </View >
        )
    }
    else if (cartPage === 'ChooseToppingsScreen') {

        useEffect(() => {
            if (isLastItem) {
                dispatch({ type: 'TOPPINGS_DATA', toppings: [], price: 0 })
            }
            else if (userStore.toppings.length !== 0 && itemsArray.length === 0 && !isLastItem) {
                setItemsArray(userStore.toppings)
            }
            else if (itemsArray.length !== 0 && JSON.stringify(itemsArray) !== JSON.stringify(userStore.toppings)) {
                dispatch({ type: 'TOPPINGS_DATA', toppings: itemsArray, price: itemsArray.length > 3 ? (itemsArray.length - 3) * 0.50 : 0 })
            }
        }, [itemsArray])

        // dispatch({ type: 'TOPPINGS_DATA', toppings: itemsArray, price: itemsArray.length > 3 ? (itemsArray.length - 3) * 0.50 : 0 })

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
                            <Text className='text-[10px] font-bold tracking-[1px] text-white/30 backdrop-blur-[20px] uppercase'><Text className='text-white'>{userStore.size}, {userStore.crust}, </Text>Toppings</Text>
                        </View>
                        <Text className='text-[25px] font-bold tracking-[-0.3px] text-white'>{`$ ${eval(userStore.sizePrice + userStore.crustPrice).toFixed(2)}`}</Text>
                    </LinearGradient>
                    <View className='w-[320px] h-[320px] mt-[-50%] rounded-full bg-white/80 mx-auto items-center justify-center'><View className='w-[280px] h-[280px] rounded-full bg-white items-center justify-center'><Image source={require('../assets/images/createCartPizza.png')} /></View></View>
                    <View className='w-[90%] rounded-[20px] mx-auto text-center bg-white mt-[20px] p-[20px]' style={{
                        shadowColor: "#F5313F",
                        shadowOffset: {
                            width: 0,
                            height: 1,
                        },
                        shadowOpacity: 0.15,
                        shadowRadius: 1.00,
                        elevation: 1
                    }}>
                        <Text className='font-light text-[20px] tracking-[-0.3px] text-[#6D6E9C] text-center'>Choose up to <Text className='font-bold text-[20px] tracking-[-0.3px] text-[#6D6E9C]'>7 toppings</Text></Text>
                        <Text className='uppercase font-bold text-[10px] text-center text-[#A0A8CC] mb-2'>Free 3 add-ons</Text>
                        <ScrollView contentContainerStyle='flex-row justify-center' horizontal showsHorizontalScrollIndicator={false}>
                            <ChooseTopping {...globalState} imageName={pepperoni} id={1} name='Pepperoni' />
                            <ChooseTopping {...globalState} imageName={sausage} id={2} name='Sausage' />
                            <ChooseTopping {...globalState} imageName={extraCheese} id={3} name='Extra Cheese' />
                            <ChooseTopping {...globalState} imageName={blackOlives} id={4} name='Black Olives' />
                            <ChooseTopping {...globalState} imageName={jalapeno} id={5} name='Jalapeno' />
                            <ChooseTopping {...globalState} imageName={mushroom} id={6} name='Mushroom' />
                            <ChooseTopping {...globalState} imageName={onion} id={7} name='Onion' />
                        </ScrollView>
                    </View>
                </View>
            </View >
        )
    }
}

export default CartHero