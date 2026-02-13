
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { View } from "react-native";
import ReaderView from "../reader/ReaderView";

type RootStackParamList = {
    ReaderScreen: { bookUri: string };
    // ... other screens
};

type Props = NativeStackScreenProps<RootStackParamList, "ReaderScreen">;

export default function ReaderScreen({ route }: Props) {
    return (
        <View style={{ flex: 1 }}>
            <ReaderView bookUri={route.params.bookUri} />
        </View>
    );
}
