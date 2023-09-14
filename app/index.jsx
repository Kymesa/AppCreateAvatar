import { MEDIA_LIBRARY } from "expo-permissions";
import { Stack, router } from "expo-router";
import {
  View,
  ScrollView,
  SafeAreaView,
  Image,
  StyleSheet,
  Button,
  TouchableOpacity,
  Platform,
  Text,
} from "react-native";
//eas build -p android --profile preview

const Index = () => {
  const handleClickPress = () => {
    if (Platform.OS == "web") {
      router.push("web/App");
    }
    if (Platform.OS == "android" || Platform.OS == "ios") {
      router.push("/avatar/App");
    }
  };
  return (
    <SafeAreaView style={styles.container}>
      <Stack.Screen
        options={{
          title: "🎮  " + "PLAYER AVATAR  " + "  🎮",
          headerTitleAlign: "center",
          headerShadowVisible: false,
          headerStyle: { backgroundColor: "#DABCFF" },
          headerTintColor: "black",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      />
      <ScrollView>
        <View>
          <Image
            resizeMode="contain"
            style={styles.images}
            source={require("../assets/thumbnail.jpg")}
          />
          <TouchableOpacity style={styles.btn}>
            <View style={styles.containerViewBtn}>
              <Button
                onPress={handleClickPress}
                title="😎 Crear Mi Avatar 😎"
                color="#841584"
                accessibilityLabel="Learn more about this purple button"
              />
            </View>
          </TouchableOpacity>
        </View>
        {/* <Link href={{ pathname: "/avatar/ava", params: { id: "PLAYER" } }}> */}
        {/* </Link> */}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0A151B",
  },
  containerViewBtn: {
    overflow: "hidden",
    borderRadius: 100,
  },
  btn: {
    marginHorizontal: 100,
  },
  images: {
    height: 450,
    width: "100%",
  },
});

export default Index;
