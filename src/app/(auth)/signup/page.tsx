import colors from "@/constants/colors";
import { Link, router } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";

const Signup = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Pressable onPress={() => router.back()} style={styles.backButton}>
          <Ionicons name="arrow-back" size={24} color={colors.light.white} />
        </Pressable>

        <Text style={styles.logoText}>
          Dev<Text style={{ color: colors.light.green }}>App</Text>
        </Text>
        <Text style={styles.slogan}>Criar uma conta</Text>
      </View>

      <View style={styles.form}>
        <View>
          <Text style={styles.label}>Nome completo</Text>
          <TextInput
            style={styles.input}
            placeholder="Digite seu nome completo..."
          />
        </View>

        <View>
          <Text style={styles.label}>Email</Text>
          <TextInput style={styles.input} placeholder="Digite seu email..." />
        </View>

        <View>
          <Text style={styles.label}>Senha</Text>
          <TextInput
            secureTextEntry
            style={styles.input}
            placeholder="Digite sua senha..."
          />
        </View>

        <Pressable style={styles.button}>
          <Text style={styles.buttonText}>Acessar</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default Signup;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 64,
    backgroundColor: colors.light.zinc,
  },
  header: {
    paddingLeft: 14,
    paddingRight: 14,
  },
  logoText: {
    fontSize: 30,
    fontWeight: "bold",
    color: colors.light.white,
  },
  slogan: {
    fontSize: 34,
    marginTop: 10,
    marginBottom: 34,
    color: colors.light.white,
  },

  form: {
    flex: 1,
    gap: 4,
    backgroundColor: colors.light.white,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    paddingTop: 26,
    paddingLeft: 16,
    paddingRight: 16,
  },

  label: {
    color: colors.light.zinc,
    marginBottom: 8,
  },

  input: {
    borderWidth: 1,
    borderColor: colors.light.gray,
    borderRadius: 10,
    marginBottom: 16,
    paddingHorizontal: 14,
    paddingTop: 16,
    paddingBottom: 16,
  },

  button: {
    backgroundColor: colors.light.green,
    paddingTop: 14,
    paddingBottom: 14,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    borderRadius: 10,
  },

  buttonText: {
    color: colors.light.white,
    fontWeight: "bold",
  },

  backButton: {
    backgroundColor: "rgba(255, 255, 255, 0.247)",
    alignSelf: "flex-start",
    padding: 8,
    borderRadius: 10,
    marginBottom: 8,
  },
});
