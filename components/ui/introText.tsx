import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { Text, View } from 'react-native';

export default function IntroText() {
  return (
    <View className="w-full mb-8 flex flex-col justify-center items-center font-gabarito">
      <LinearGradient
        colors={['#238E8E', '#FFFFFF', '#FFFFFF', '#238E8E']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        className="px-4"
      >
        <Text className="text-transparent bg-clip-text bg-transparent text-center font-extrabold leading-[1.2] tracking-[0em] text-[18px] xs:text-[24px] sm:text-[32px] md:text-[40px] lg:text-[64px] font-gabarito">
          Your Ultimate Guide to{'\n'}Ethiopian Orthodox Books
        </Text>
      </LinearGradient>

      <Text className="text-center text-[10px] sm:text-[12px] font-handlee mt-2">
        Explore books from the Ethiopian Orthodox Tewahedo Church{'\n'}
        by <Text className="font-bold text-[#238E8E]">theme</Text>,{' '}
        <Text className="font-bold text-[#238E8E]">topic</Text>, or{' '}
        <Text className="font-bold text-[#238E8E]">traditional genre</Text>.
      </Text>
    </View>
  );
}
