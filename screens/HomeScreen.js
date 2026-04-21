import { StatusBar } from "expo-status-bar";
import { ScrollView, StyleSheet, Text, TextInput } from "react-native";
import { useState, useEffect } from "react";
import ProductCard from "../components/ProductCard.js";
import BlogCard from "../components/BlogCard.js";
import { Picker } from "@react-native-picker/picker";

const categoryNames = {
  "": "Alle categoriën",
  "69a8aa7136d068f3089e6bdb": "ringen",
  "69a8a29aa7f742163a2eff39": "Oorbellen",
  "69a8a290ffb5f283afa41443": "Kettingen",
  "69a85250395f7ca2ff433f11": "Styling",
  "69a43be2b75c3e74816b62c7": "trends",
  "699efb62ee05d1f40e83c2ea": "Cadeau",
};

//Test

const HomeScreen = ({ navigation }) => {
  const [products, setProducts] = useState([]);
  const [blogs, setBlogs] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [sortOption, setSortOption] = useState("price-asc");

  useEffect(() => {
    fetch(
      "https://api.webflow.com/v2/sites/698c7fde9a932a1ff5c130a4/products", //API product list
      {
        headers: {
          Authorization:
            "Bearer aec7e4f1f92eb60ba64318b7f59a7b93ba0be926331fab40bc205f4308ea0db9",
        },
      },
    )
      .then((res) => res.json())
      .then((data) => {
        setProducts(
          data.items.map((item) => ({
            id: item.product.id,
            title: item.product.fieldData.name,
            subtitle: item.product.fieldData.description,
            price: (item.skus[0]?.fieldData.price.value || 0) / 100,
            image: { uri: item.skus[0]?.fieldData["main-image"]?.url },
            category:
              categoryNames[item.product.fieldData.category[0]] ||
              "Onbekende categorie",
          })),
        );
      })
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  const filteredProducts = products.filter(
    (p) =>
      (selectedCategory === "" || p.category === selectedCategory) &&
      p.title.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  const sortedProducts = [...filteredProducts].sort((a,b)=> {
    if (sortOption === "price-asc") return a.price - b.price;
    if (sortOption === "price-desc") return b.price - a.price;
    if (sortOption === "name-asc") return a.title.localeCompare(b.title);
    if (sortOption === "name-desc") return b.title.localeCompare(a.title);
    return 0;
  });
  
  //blogs
  useEffect(() => {
    fetch(
      "https://api.webflow.com/v2/collections/699ef94b1b701b4e81bf1440/items",
      {
        headers: {
          authorization:
            "Bearer aec7e4f1f92eb60ba64318b7f59a7b93ba0be926331fab40bc205f4308ea0db9",
        },
      },
    )
      .then((res) => res.json())
      .then((data) => {
        setBlogs(
          data.items.map((item) => ({
            id: item.id,
            title: item.fieldData.name,
            subtitle: item.fieldData["post-summary"],
            content: item.fieldData["post-body"],
            image: { uri: item.fieldData["main-image"]?.url },
          })),
        );
      })
      .catch((error) => console.error("Error fetching blogs:", error));
  }, []); 

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <Text style={styles.title}>Producten</Text>

      <TextInput
        style={styles.search}
        placeholder="Zoek een product..."
        placeholderTextColor="#888"
        value={searchQuery}
        onChangeText={setSearchQuery}
      />

      <Picker
        selectedValue={selectedCategory}
        onValueChange={setSelectedCategory}
        style={styles.picker}
      >
        <Picker.Item label="Alle categorieën" value="" />
        <Picker.Item label="ringen" value="ringen" />
        <Picker.Item label="Oorbellen" value="Oorbellen" />
        <Picker.Item label="Kettingen" value="Kettingen" />
        <Picker.Item label="Styling" value="Styling" />
        <Picker.Item label="trends" value="trends" />
        <Picker.Item label="Cadeau" value="Cadeau" />
      </Picker>

      <Picker
        selectedValue={sortOption}
        onValueChange={setSortOption}
        style={styles.picker}
      >
        <Picker.Item label="Prijs oplopend" value="price-asc" />
        <Picker.Item label="Prijs aflopend" value="price-desc" />
        <Picker.Item label="Naam A-Z" value="name-asc" />
        <Picker.Item label="Naam Z-A" value="name-desc" />
      </Picker>

      {sortedProducts.map((product) => (
        <ProductCard
          key={product.id}
          title={product.title}
          description={product.subtitle}
          price={product.price}
          image={product.image}
          onPress={() => navigation.navigate("Details", product)}
        />
      ))}

      

      <Text style={styles.title}>Blogs</Text>

      {blogs.map((blog) => (
        <BlogCard
          key={blog.id}
          title={blog.title}
          description={blog.subtitle}
          image={blog.image}
          onPress={() => navigation.navigate("BlogDetail", blog)}
        />
      ))}

      

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
    padding: 20,
    gap: 20,
    alignItems: "center",
    paddingBottom: 40,
  },
  title: {
    marginTop: 30,
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    color: "#222",
  },
  search: {
    width: "100%",
    padding: 12,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#ccc",
    fontSize: 16,
  },
  picker: {
    width: "90%",
    maxWidth: 400,
    backgroundColor: "#fffdf8",
    borderRadius: 12,

  },

});

export default HomeScreen;