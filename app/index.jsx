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
} from "react-native";

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
          title: "🎮 PLAYER AVATAR 🎮",
          headerTitleAlign: "center",
          headerShadowVisible: false,
          headerStyle: { backgroundColor: "#0A151B" },
          headerTintColor: "#FFFFFF",
          headerLargeTitleShadowVisible: false,
          headerSearchBarOptions: false,
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
        </View>

        {/* <Link href={{ pathname: "/avatar/ava", params: { id: "PLAYER" } }}> */}
        <TouchableOpacity style={styles.btn}>
          <Button
            onPress={handleClickPress}
            title="Crear Mi Avatar 😎"
            color="#841584"
            accessibilityLabel="Learn more about this purple button"
          />
        </TouchableOpacity>
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
  btn: {
    width: "100%",
    paddingHorizontal: 100,
  },
  images: {
    width: "100%",
  },
  logo: {
    width: 66,
    height: 58,
  },
});

export default Index;
