import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, ScrollView, Pressable } from 'react-native';

export default function App() {
  const [expanded, setExpanded] = useState(false);

  return (
    <ScrollView style={styles.page}>
      <Text style={styles.header}>Журнал Bright</Text>

      <View style={styles.card}>
        <Text style={styles.category}>Новости</Text>

        <Image 
        style={styles.image}
        source={{ uri: "https://images.pexels.com/photos/5685851/pexels-photo-5685851.jpeg" }}
        />

        <Text style={styles.title}>
          Превращаем стресс в своего помощника
        </Text>

        <Text style={styles.text}>
          Исследователи Йельского университета заявляют, что люди, 
          которые рассматривают стресс как возможность личностного роста...
        </Text>

        {!expanded && (
          <Pressable onPress={() => setExpanded(true)}>
            <Text style={styles.readMore}>Читать далее</Text>
          </Pressable>
        )}

        {expanded && (
          <Text style={styles.fullText}>
            Исследователи Йельского университета заявляют, что люди, которые рассматривают стресс как возможность личностного роста, 
            отмечают улучшение качества жизни. 
            
            Стресс может быть не только разрушительным фактором, но и мощным ресурсом, который помогает двигаться вперед, 
            принимать смелые решения и развивать устойчивость. 
            
            Главное — правильно его воспринимать и использовать для личностного развития.
          </Text>
        )}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  page: {
    backgroundColor: "#f2f4f7",
    padding: 15,
  },
  header: {
    marginTop: 50, // ✅ 
    textAlign: "center",
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 25,
  },
  card: {
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 12,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 4,
  },
  category: {
    color: "#3366cc",
    marginBottom: 8,
    fontWeight: "500",
  },
  image: {
    width: "100%",
    height: 180,
    borderRadius: 10,
    marginBottom: 12,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  text: {
    fontSize: 14,
    lineHeight: 18,
    color: "#444",
  },
  readMore: {
    marginTop: 10,
    color: "#0066cc",
    fontWeight: "bold",
  },
  fullText: {
    marginTop: 10,
    fontSize: 14,
    lineHeight: 20,
    color: "#444",
  }
});
