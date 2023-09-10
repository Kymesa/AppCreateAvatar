import { Stack } from "expo-router";

const WebApp = () => {
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
      <iframe
        src="https://readyreactnative.readyplayer.me?frameApi&clearCache"
        height={"100%"}
        width={"100%"}
      />
    </>
  );
};

export default WebApp;
