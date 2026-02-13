// reader/ReaderView.tsx
import { WebView } from "react-native-webview";
import { useReaderStore } from "../store/readerStore";

interface ReaderViewProps {
    bookUri: string;
}

type ReaderStore = {
    fontSize: string;
    theme: "light" | "dark";
};

export default function ReaderView({ bookUri }: ReaderViewProps) {
    const { fontSize, theme } = useReaderStore() as ReaderStore

    return (
        <WebView
            originWhitelist={["*"]}
            source={{ uri: bookUri }}
            injectedJavaScript={`
        document.body.style.fontSize = "${fontSize}px";
        document.body.style.background = "${theme === "dark" ? "#000" : "#fff"}";
        true;
      `}
            javaScriptEnabled
        />
    );
}
