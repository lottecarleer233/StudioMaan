import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

const ProductCard = ({ title, description, price, image, onPress }) => {
  const navigation = useNavigation();
  return (
    <View style={styles.card}>
      <Image source={image} style={styles.image} />
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.description}>{description}</Text>
      <Text style={styles.price}>€{price}</Text>
      <TouchableOpacity style={styles.button} onPress={onPress}>
        <Text style={styles.buttonText}>Bekijk product</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: 250,
    padding: 16,
    backgroundColor: "#fff",
    borderRadius: 8,
    marginBottom: 16,
  },
  image: {
    width: "100%",
    height: 200,
    borderRadius: 8,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 8,
  },
  description: {
    fontSize: 14,
    color: "#555",
    marginTop: 4,
  },
  price: {
    fontSize: 18,
    marginTop: 6,
    fontWeight: "bold",

  },
   button: {
    backgroundColor: "#000000",
  paddingVertical: 12,
  paddingHorizontal: 28,
  borderRadius: 10,
  marginTop: 10,
  },
  buttonText: {
  color: "#fff",
  fontSize: 15,
  fontWeight: "600",
  textAlign: "center",
},
});

export default ProductCard;