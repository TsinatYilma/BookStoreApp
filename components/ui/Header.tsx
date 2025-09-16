import { useRouter } from 'expo-router';
import { useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import Menu from './menu';

export default function Header() {
  const [menuVisible, setMenuVisibility] = useState(false);
  const router = useRouter();
  function handleMenuVisibility() {
    setMenuVisibility(prev => !prev);
    console.log("i am on side")
  }

  return (
    <View>
      <View className="flex-row p-4 w-full h-[60px] justify-between items-center bg-black">
        {/* Mobile Menu Toggle */}
        <View className="md:hidden flex-row justify-between w-full">
        <TouchableOpacity onPress={() => router.push('/')}>
          <Text className="font-bold text-3xl text-white border">Logo</Text>
        </TouchableOpacity>
          <TouchableOpacity onPress={() => router.push('/')} className="flex flex-col justify-center">
            <View className={`w-6 h-1 rounded bg-white ${menuVisible ? 'opacity-0' : ''}`} />
            <View className={`w-4 h-1 mt-1 ml-auto rounded bg-white ${menuVisible ? 'opacity-0' : ''}`} />
            <View className={`w-2 h-1 mt-1 ml-auto rounded bg-white ${menuVisible ? 'opacity-0' : ''}`} />
          </TouchableOpacity>
        </View>

        {/* Desktop Navigation */}
        <View className="hidden md:flex-row gap-6">
          <TouchableOpacity onPress={() => router.push('/')}>
            <Text className="text-white">Home</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => router.push('/')}>
            <Text className="text-white">Genres</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => router.push('/')}>
            <Text className="text-white">Blog</Text>
          </TouchableOpacity>
        </View>

        {/* Branding */}
        <View className="hidden md:block">
          <Text className="text-2xl font-bold text-white">Book Store</Text>
        </View>

        {/* Session Info */}
        <View className="hidden md:flex gap-3 md:gap-6  items-center">
            <TouchableOpacity >
                <Text className="text-white font-bold">Login</Text>
            </TouchableOpacity>
            <Text className="font-bold text-3xl flex items-center">|</Text>
            <TouchableOpacity >
                <Text className="text-white font-bold">Register</Text>
            </TouchableOpacity>
        </View>
      </View>

      {/* Slide-out Menu */}
      <Menu menuVisible={menuVisible} handleMenuVisibility={handleMenuVisibility} />
    </View>
  );
}
