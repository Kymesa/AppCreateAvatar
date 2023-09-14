import { Stack } from "expo-router";
import React, { useRef, useState } from "react";
import { Button, View } from "react-native";
import WebView from "react-native-webview";

import * as FileSystem from "expo-file-system";
import { shareAsync } from "expo-sharing";

const App = () => {
  const webView = useRef();

  const [donwload, setDonwload] = useState(null);
  const [statusDonwload, setStatusDonwload] = useState(true);

  const donwloadFromUrl = async () => {
    const fileName = "player_avatar.png";
    const result = await FileSystem.downloadAsync(
      donwload,
      FileSystem.documentDirectory + fileName
    );
    save(result.uri);
  };

  const save = async (url) => {
    await shareAsync(url);
  };

  const onAvatarUrlReceived = async (message) => {
    const msj = message.data?.url;
    const sbString = msj.substring(0, 54);
    setDonwload(`${sbString}.png?scene=fullbody-posture-v1-transparent
`);
    setStatusDonwload(false);
  };

  // const handleClickDonwload = () => {
  //   donwloadFromUrl();
  // };

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
          headerTintColor: "black",
          headerRight: () => (
            <>
              <View>
                <Button
                  disabled={statusDonwload}
                  onPress={donwloadFromUrl}
                  title="DOW"
                />
              </View>
            </>
          ),
          headerStyle: { backgroundColor: "white" },
        }}
      />
      <WebView
        ref={webView}
        onLoad={onWebViewLoaded}
        onMessage={onMessageReceived}
        source={{
          uri: `https://readyreactnative.readyplayer.me?frameApi&clearCache`,
        }}
        allowFileAccess={true}
        allowUniversalAccessFromFileURLs={true}
        allowFileAccessFromFileURLs={true}
      />
    </>
  );
};

export default App;
