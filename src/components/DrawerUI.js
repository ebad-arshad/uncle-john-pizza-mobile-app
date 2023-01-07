import { Image, StatusBar, Text, View } from 'react-native'
import React from 'react'
import ghost from '../assets/images/ghost.jpg'
import { LinearGradient } from 'expo-linear-gradient';
import { FontAwesome5, AntDesign, Ionicons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';

const DrawerItem = ({ navigation, type, text, name, size, color }) => {
    if (type === 'FontAwesome5') {
        return <TouchableOpacity onPress={() => navigation.closeDrawer()} className='flex-row items-center p-[10px] pl-14 justify-start'><Text className='w-[60px]'><FontAwesome5 name={name} size={size} color={color} /></Text>
            <Text className='text-[#6D6E9C] text-[13.22px]'>{text}</Text>
        </TouchableOpacity>
    } else if (type === 'AntDesign') {
        return <TouchableOpacity onPress={() => navigation.closeDrawer()} className='flex-row items-center p-[10px] pl-14 justify-start'><Text className='w-[60px]'><AntDesign name={name} size={size} color={color} /></Text>
            <Text className='text-[#6D6E9C] text-[13.22px]'>{text}</Text>
        </TouchableOpacity >
    } else {
        return <TouchableOpacity onPress={() => navigation.closeDrawer()} className='flex-row items-center p-[10px] pl-14 justify-start'><Text className='w-[60px]'><Ionicons name={name} size={size} color={color} /></Text>
            <Text className='text-[#6D6E9C] text-[13.22px]'>{text}</Text>
        </TouchableOpacity>
    }
}

const DrawerUI = ({ navigation }) => {
    return (
        <View className='flex-1' style={{ paddingTop: StatusBar.currentHeight }}>
            <View className='flex-[3.5] items-center justify-center'>
                <LinearGradient colors={['rgb(218, 218, 229)', '#fff']} className='w-[110px] h-[110px] rounded-full overflow-hidden p-[20px] mb-[20px]'>
                    <Image className='w-[100%] h-[100%] object-contain rounded-full' source={ghost} />
                </LinearGradient>
                <Text className='font-bold text-[18.89px] tracking-[-0.28px] text-[#6D6E9C]'>Ebad Arshad</Text>
                <Text className='font-normal text-[13.22px] text-[#A0A8CC]'>ebad@gmail.com</Text>
            </View>
            <View className='flex-[5] bg-[#F4F3F9]'>
                <View className='mt-14'>
                    <DrawerItem navigation={navigation} type='FontAwesome5' text='Profile' name='user-alt' size={20} color='#F5313F' />
                    <DrawerItem navigation={navigation} type='FontAwesome5' text='Payment Method' name='money-bill' size={20} color='#F5313F' />
                    <DrawerItem navigation={navigation} type='AntDesign' text='Order History' name='profile' size={20} color='#F5313F' />
                    <DrawerItem navigation={navigation} type='FontAwesome5' text='Addresses' name='map-marker-alt' size={20} color='#F5313F' />
                    <DrawerItem navigation={navigation} type='Ionicons' text='Help Center' name='help-circle' size={20} color='#F5313F' />
                </View>
            </View>
            <View className='flex-[2.5]'>
                <View className='pt-6'>
                    <DrawerItem navigation={navigation} type='Ionicons' text='Settings' name='settings-sharp' size={20} color='#F5313F' />
                    <DrawerItem navigation={navigation} type='AntDesign' text='Log out' name='logout' size={20} color='#F5313F' />
                </View>
            </View>
        </View>
    )
}

export default DrawerUI