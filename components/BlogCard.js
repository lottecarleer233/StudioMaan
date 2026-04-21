import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

const BlogCard = ({ title, description, image, onPress }) => {
  const navigation = useNavigation();
  return (
    <View style={styles.card}>
      <Image source={image} style={styles.image} />
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.description}>{description}</Text>

      <TouchableOpacity style={styles.button} onPress={onPress}>
        <Text style={styles.buttonText}>Lees blog</Text>
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
  button: {
    backgroundColor: "#651121",
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

export default BlogCard;