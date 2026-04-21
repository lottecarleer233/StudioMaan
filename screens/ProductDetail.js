import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";
import { useState } from "react";

const ProductDetail = ({ route }) => {
  const { title, subtitle, price, image } = route.params;
  const [quantity, setQuantity] = useState(1);

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };
  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
     
      <Image source={image} style={styles.image} />
       <Text style={styles.title}>{title}</Text>
      <Text style={styles.subtitle}>{subtitle}</Text>

      <View style={styles.divider} />
      <Text  style={styles.price}>€{price}</Text>
      <View style={styles.divider} />

      <View style={styles.quantityContainer}>
        <TouchableOpacity style={styles.button} onPress={decreaseQuantity}>
          <Text style={styles.buttonText}>-</Text>
        </TouchableOpacity>

        <Text style={styles.quantityText}>{quantity}</Text>

        <TouchableOpacity style={styles.button} onPress={increaseQuantity}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>

     <View style={styles.totalBox}>
  <Text style={styles.totalLabel}>TOTAAL</Text>
  <Text style={styles.totalPrice}>€{(price * quantity).toFixed(2)}</Text>
</View>

      <StatusBar style="auto" />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f4edda",
  },
  content: {
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 20,
  },
  image: {
    width: 300,
    height: 300,
    borderRadius: 8,
    marginTop: 20,
  },
  subtitle: {
  textAlign:"center",
  marginTop: 20,
  marginLeft: 20,
  marginRight: 20,
  fontSize: 16,
  },
  price: {
   fontWeight: "bold",
   fontSize: 20,
  },
  button: {
    backgroundColor: "#651121",
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
  quantityContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 20,
  },
  quantityText: {
    fontSize: 18,
    fontWeight: "bold",
    marginHorizontal: 10,
  },
  
  divider: {
  width: "80%",
  height: 1,
  backgroundColor: "#000",
  marginVertical: 20,
},
totalBox: {
  backgroundColor: "#fff",
  width: "85%",
  padding: 20,
  borderRadius: 15,
  alignItems: "center",
},

totalLabel: {
  fontSize: 16,
  color: "#000",
  marginBottom: 5,
},

totalPrice: {
  fontSize: 18,
  fontWeight: "bold",
},
});

export default ProductDetail;