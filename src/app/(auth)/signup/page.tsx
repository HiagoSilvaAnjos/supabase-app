import { StyleSheet, Text, View } from "react-native";

const Signup = () => {
  return (
    <View style={styles.container}>
      <Text>Página Signup</Text>
    </View>
  );
};

export default Signup;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
