import { StyleSheet, Text, View } from 'react-native';


export default function HomeScreen() {
  return (
    <View className='flex justify-center items-center'>
      <Text  className=' text-white text-2xl'>hey there</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  texting: {
    color: 'red',
    fontSize: 24,
    textAlign: 'center',
  },
});