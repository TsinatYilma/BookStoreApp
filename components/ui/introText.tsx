import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { Text, View } from 'react-native';

export default function IntroText() {
  return (
    <View className="w-full mb-8 flex flex-col justify-center items-center font-gabarito">
     
        <Text
          style={{
            fontSize: 40,
            fontWeight: 'bold',
            textAlign: 'center',
            fontFamily: 'Gabarito',
            color: 'black', // required for mask
          }}
        >
          Your Ultimate Guide to{'\n'}Ethiopian Orthodox Books
        </Text>
      <LinearGradient
        colors={['#238E8E', '#FFFFFF', '#238E8E']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={{ flex: 1 }}
      />

      <Text className="text-center text-[10px] sm:text-[12px] font-handlee mt-2">
        Explore books from the Ethiopian Orthodox Tewahedo Church{'\n'}
        by <Text className="font-bold text-[#238E8E]">theme</Text>,{' '}
        <Text className="font-bold text-[#238E8E]">topic</Text>, or{' '}
        <Text className="font-bold text-[#238E8E]">traditional genre</Text>.
      </Text>
    </View>
  );
}
