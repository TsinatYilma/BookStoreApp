
import { Image, ScrollView, Text, View } from 'react-native';
import { books } from './PlaceHoldeBooks';

export default function BookJunk() {
  return (
    <ScrollView className={"font-gabarito flex flex-col w-full mb-8 gap-10"}>
       {books.map((book, index) => (
        <View className="flex flex-row gap-5 mb-10" key={index}>
           <View>
           <Image
            source={{ uri: book.cover }}
            className="w-[60px] h-[80px] rounded"
          />
           </View>
           <View>
             <Text className='text-2xl text-white'>{book.name}</Text>
             <Text className='text-white'>{"by "+ book.author}</Text>
           </View>
        </View>
       ))}
    </ScrollView>
  );
}