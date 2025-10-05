import BookJunk from '@/components/ui/bookLibrary';
import { Link, useRouter } from 'expo-router';
import { Text, View } from 'react-native';




export default function HomeScreen() {
    const router = useRouter()
  return (
    <View className='min-h-screen flex justify-center items-center bg-black/20'>
       <BookJunk />
       <Link href="/(tabs)">
        <Text className="text-white font-bold text-xl" >Go to Tabs</Text>
      </Link>
    </View>
  );
}