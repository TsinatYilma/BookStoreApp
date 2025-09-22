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
    <View className='relative'>
      <View className="flex-row p-4 w-full h-[60px] justify-between items-center bg-black border ">
        {/* Mobile Menu Toggle */}
        <View className="md:hidden flex-row justify-between w-full">
            <TouchableOpacity onPress={() => router.push('/')}>
              <Text className="font-bold text-3xl text-white border">Logo</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleMenuVisibility()} className="flex flex-col justify-center">
              <View className={`w-6 h-1 rounded bg-white ${menuVisible ? 'opacity-0' : ''}`} />
              <View className={`w-4 h-1 mt-1 ml-auto rounded bg-white ${menuVisible ? 'opacity-0' : ''}`} />
              <View className={`w-2 h-1 mt-1 ml-auto rounded bg-white ${menuVisible ? 'opacity-0' : ''}`} />
            </TouchableOpacity>
        </View>

        
      </View>

      {/* Slide-out Menu */}
      <Menu menuVisible={menuVisible} handleMenuVisibility={handleMenuVisibility} />
    </View>
  );
}
