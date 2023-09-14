import { StyleSheet, TouchableOpacityBase } from "react-native";

const BtnHeader = () => {
  return (
    <TouchableOpacityBase>
      <Image
        source={require("../assets/favicon.png")}
        resizeMode="contain"
        style={styles.btn}
      ></Image>
    </TouchableOpacityBase>
  );
};

const styles = StyleSheet.create({
  btn: { width: "50%", height: "50%" },
});

export default BtnHeader;
