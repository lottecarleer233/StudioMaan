import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  ScrollView,
  Image,
} from "react-native";


const BlogDetail = ({ route }) => {
  const { title, subtitle, image, } = route.params;

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      
      <Image source={image} style={styles.image} />
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.subtitle}>{subtitle}</Text>
      

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
    marginBottom: 10,
    textAlign: "left",

  },
  image: {
    width: 300,
    height: 300,
    borderRadius: 8,
    marginTop: 20,
   
  },
 
  subtitle:{
   textAlign: "center",
   fontSize: 18,
  
   marginBottom: 20,
   marginLeft: 25,
   marginRight: 25,

  },
 
});

export default BlogDetail;