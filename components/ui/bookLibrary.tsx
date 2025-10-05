import '@/app/globals.css';
import { Text, View } from 'react-native';
import { books } from './PlaceHoldeBooks';

export default function BookJunk() {
  return (
    <View className={"font-gabarito flex flex-col justify-center w-full mb-8"}>
       {books.map((book, index) => (
        <View className="flex gap-10" key={index}>
           <View>
             <img src={book.cover} alt="" width={30} height={40} />
           </View>
           <View>
             <Text>{book.name}</Text>
             <Text>{"by "+ book.author}</Text>
           </View>
        </View>
       ))}
    </View>
  );
}