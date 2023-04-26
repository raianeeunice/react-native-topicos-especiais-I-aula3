import * as React from "react";
import { StyleSheet, Text, Image } from "react-native";

export default function CustomImage({ fromWeb, image, title, width, height }) {
  return (
    <>
      <Text style={styles.tituloImage}>{title}</Text>

      <Image
        source={fromWeb ? { uri: image } : image}
        style={{ width: width, height: height, alignSelf: "center" }}
      />
    </>
  );
}

const styles = StyleSheet.create({
  tituloImage: {
    paddingTop: 10,
    fontSize: 14,
    fontWeight: "bold",
    textAlign: "center",
  },
});
