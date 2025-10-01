import Header from '@/components/ui/Header';
import { useFonts } from 'expo-font';
import { Slot } from 'expo-router';
import { Image, ScrollView, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const [fontsLoaded] = useFonts({
  Gabarito: require('../assets/font/gabarito/Gabarito-Regular.ttf'),
  Gantari: require('../assets/font/gantari/Gantari-Regular.ttf'),
  Handlee: require('../assets/font/handlee/Handlee-Regular.ttf'),
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
      <SafeAreaView className="flex-1 bg-black/90">
        <Header />

        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
          <Slot />

          <View className="mt-18 bg-black flex flex-col sm:flex-row sm:justify-around justify-center gap-8 py-10 px-5 w-full">
            {/* Logo Section */}
            <View className="flex justify-center sm:order-2">
              <Image
                source={require('@/assets/images/favicon.png')}
                className="w-20 h-20"
                resizeMode="contain"
              />
            </View>

            {/* Social Links */}
            <View className="flex flex-col sm:order-1">
              <Text className="font-bold mb-5 text-white">Follow Us</Text>
              <Text className="text-white">facebook</Text>
              <Text className="text-white">instagram</Text>
              <Text className="text-white">twitter</Text>
            </View>

            {/* Contact Info */}
            <View className="flex flex-col justify-center sm:order-3">
              <Text className="font-bold mb-5 text-white">Contact Us</Text>
              <Text className="text-white">bookfinder@gmail.com</Text>
              <Text className="text-white">Adiss Abeba, 4kilo</Text>
              <Text className="text-white">bookfinder | 2025.copyright</Text>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
  );
}

