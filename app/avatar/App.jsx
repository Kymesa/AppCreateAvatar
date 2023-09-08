import { Stack } from "expo-router";
import React, { useRef } from "react";
import { SafeAreaView, View } from "react-native";
import WebView from "react-native-webview";
// "main": "node_modules/expo/AppEntry.js",
const App = () => {
  const webView = useRef();

  function onAvatarUrlReceived(message) {
    alert(`Avatar Url = ${message.data?.url}`);
  }

  function onWebViewLoaded() {
    webView.current.postMessage(
      JSON.stringify({
        target: "readyplayerme",
        type: "subscribe",
        eventName: "v1.avatar.exported",
      })
    );
  }

  function onMessageReceived(message) {
    const data = message.nativeEvent.data;
    const json = JSON.parse(data);

    if (json?.source !== "readyplayerme") {
      return;
    }

    if (json.eventName === "v1.avatar.exported") {
      console.log(json.eventName);
      onAvatarUrlReceived(json);
    }
  }

  return (
    <>
      <Stack.Screen
        options={{
          title: "Personaliza Tu avatar",
          headerTitleAlign: "center",
          headerShadowVisible: false,
          headerLargeTitleShadowVisible: false,
          headerTitleStyle: {
            fontWeight: "bold",
          },
          headerTintColor: "#FFFFFF",
          headerStyle: { backgroundColor: "#0A151B" },
        }}
      />
      <WebView
        ref={webView}
        onLoad={onWebViewLoaded}
        onMessage={onMessageReceived}
        source={{
          uri: `https://readyreactnative.readyplayer.me?frameApi&clearCache`,
        }}
      />
    </>
  );
};

export default App;
