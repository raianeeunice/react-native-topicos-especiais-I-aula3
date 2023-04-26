import { StatusBar } from "expo-status-bar";
import React from "react";
import * as Speech from "expo-speech";
import {
  Alert,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import CustomImage from "./CustomImage";
import medica from "./assets/medica.png";
import balanca from "./assets/balanca.png";

export default function App() {
  const [peso, setPeso] = React.useState("");
  const [altura, setAltura] = React.useState("");

  function handleSubmit() {
    let msg = "";
    const alt = altura / 100;
    const imc = peso / (alt * alt);

    if (imc <= 0 || alt <= 0 || peso <= 0) {
      Speech.speak(
        "Dados Incorretos!" +
          "Por favor, informe os campos com valores válidos",
        { language: "pt-BR" }
      );
      Alert.alert(
        "Dados Incorretos!",
        "Por favor, informe os campos com valores válidos"
      );
    } else if (imc < 17) {
      Speech.speak(
        "Cálculo do IMC - Resultado" +
          `I M C = ${imc.toFixed(2)} \n Você está MUITO ABAIXO do peso!`,
        { language: "pt-BR" }
      );
      Alert.alert(
        "Cálculo do IMC - Resultado",
        `I M C = ${imc.toFixed(2)} \n Você está MUITO ABAIXO do peso!`
      );
    } else if (imc >= 17 && imc < 18.5) {
      Speech.speak(
        "Cálculo do IMC - Resultado" +
          `I M C = ${imc.toFixed(2)} \n Você está ABAIXO do peso!`,
        { language: "pt-BR" }
      );
      Alert.alert(
        "Cálculo do IMC - Resultado",
        `I M C = ${imc.toFixed(2)} \n Você está ABAIXO do peso!`
      );
    } else if (imc >= 18.5 && imc < 25) {
      Speech.speak(
        "Cálculo do IMC - Resultado" +
          `I M C = ${imc.toFixed(2)} \n Você está com o peso NORMAL!`,
        { language: "pt-BR" }
      );
      Alert.alert(
        "Cálculo do IMC - Resultado",
        `I M C = ${imc.toFixed(2)} \n Você está com o peso NORMAL!`
      );
    } else if (imc >= 25 && imc < 30) {
      Speech.speak(
        "Cálculo do IMC - Resultado" +
          `I M C = ${imc.toFixed(2)} \n Você está com SOBREPESO!`,
        { language: "pt-BR" }
      );
      Alert.alert(
        "Cálculo do IMC - Resultado",
        `I M C = ${imc.toFixed(2)} \n Você está com SOBREPESO!`
      );
    } else if (imc >= 30 && IMC < 35) {
      Speech.speak(
        "Cálculo do IMC - Resultado" +
          `I M C = ${imc.toFixed(
            2
          )} \n Você está OBESO(ou seja, obesidade grau I)!`,
        { language: "pt-BR" }
      );
      Alert.alert(
        "Cálculo do IMC - Resultado",
        `I M C = ${imc.toFixed(
          2
        )} \n Você está OBESO(ou seja, obesidade grau I)!`
      );
    } else if (imc >= 35 && imc < 40) {
      Speech.speak(
        "Cálculo do IMC - Resultado" +
          `I M C = ${imc.toFixed(
            2
          )} \n Você está com OBESIDADE SEVERA (ou seja, obesidade grau II)!`,
        { language: "pt-BR" }
      );
      Alert.alert(
        "Cálculo do IMC - Resultado",
        `I M C = ${imc.toFixed(
          2
        )} \n Você está com OBESIDADE SEVERA (ou seja, obesidade grau II)!`
      );
    } else if (imc >= 40) {
      Speech.speak(
        "Cálculo do IMC - Resultado" +
          `I M C = ${imc.toFixed(
            2
          )} \n Você está com OBESIDADE MÓRBIDA (ou seja, obesidade grau III)!`,
        { language: "pt-BR" }
      );
      Alert.alert(
        "Cálculo do IMC - Resultado",
        `I M C = ${imc.toFixed(
          2
        )} \n Você está com OBESIDADE MÓRBIDA (ou seja, obesidade grau III)!`
      );
    }
  }

  function handleClear() {
    setAltura("");
    setPeso("");
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="light" backgroundColor="#CD5C5C" />

      <View>
        <CustomImage
          fromWeb={false}
          image={balanca}
          title={"Calcule seu IMC"}
          width={147}
          height={168}
        />

        <TextInput
          style={styles.input}
          value={peso}
          onChangeText={(peso) => setPeso(peso)}
          placeholder="Digite o peso (Kg)"
          keyboardType="numeric"
        />

        <TextInput
          style={styles.input}
          value={altura}
          onChangeText={(altura) => setAltura(altura)}
          placeholder="Digite a altura (cm)"
          keyboardType="numeric"
        />

        <TouchableOpacity style={styles.button} onPress={handleSubmit}>
          <CustomImage
            fromWeb={false}
            image={medica}
            title={"Calcular"}
            width={125}
            height={213}
          />
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={handleClear}>
          <Text style={{ color: "#DB7093", fontSize: 25, fontWeight: "bold" }}>
            Limpar
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#CD5C5C",
  },
  input: {
    backgroundColor: "#fff",
    borderColor: "#B22222",
    borderWidth: 1,
    borderRadius: 10,
    marginTop: 15,
    marginHorizontal: 30,
    padding: 10,
    color: "#CD5C5C",
    fontSize: 18,
  },
  button: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 15,
    marginHorizontal: 30,
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 10,
  },
});
