import { useRouter } from 'expo-router';
import { Pressable, Text, TouchableOpacity, View } from 'react-native';

export default function Menu({
  menuVisible,
  handleMenuVisibility,
}: {
  menuVisible: boolean;
  handleMenuVisibility: () => void;
}) {
  const router = useRouter();

  return (
    <View>
      {/* Slide-in Menu */}
      <View
        className={`flex-col md:hidden absolute z-30 top-0 left-0 bg-black/80 min-h-screen w-[90%] transition-all duration-700 ease-out ${
          menuVisible ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <View className="p-5">
          {/* Header */}
          <View className="flex-row justify-between border-b-2 border-gray-600 pb-6">
            <Text className="font-bold text-4xl text-white">Logo</Text>
            <TouchableOpacity
              className="flex justify-center items-center rounded-full w-8 h-8 border border-white p-1"
              onPress={handleMenuVisibility}
            >
              <Text className="text-white font-bold">x</Text>
            </TouchableOpacity>
          </View>

          {/* Navigation Links */}
          <View className="flex-col gap-3 mt-5">
            <TouchableOpacity onPress={() => router.push('/')}>
              <Text className="font-bold text-white">Home</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => router.push('/')}>
              <Text className="font-bold text-white">Genres</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => router.push('/')}>
              <Text className="font-bold text-white">Blog</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => router.push('/')}>
              <Text className="font-bold text-white">Contact Us</Text>
            </TouchableOpacity>

            {/* Auth Links */}
            <View className="flex-row gap-6 items-center font-bold mt-3">
              <TouchableOpacity onPress={() => router.push('/')}>
                <Text className="font-bold text-white">Login</Text>
              </TouchableOpacity>
              <Text className="font-bold text-3xl text-white">|</Text>
              <TouchableOpacity onPress={() => router.push('/')}>
                <Text className="text-[#238E8E] font-bold">Register</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>

      {/* Backdrop */}
      {menuVisible && (
        <Pressable
          className="h-screen w-screen absolute top-0 left-0"
          onPress={handleMenuVisibility}
        />
      )}
    </View>
  );
}
