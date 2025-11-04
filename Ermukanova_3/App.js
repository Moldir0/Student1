import React, { useState } from "react";
import { StyleSheet, Text, SafeAreaView, ScrollView, View, Image, TouchableOpacity } from "react-native";

export default function App() {
  const [page, setPage] = useState(0);

  const pages = [
    {
      image: require("./assets/screen1.png"),
      title: "Welcome to TravelAir",
      text: "Explore the world with comfort and style. The best flights for your destination.",
    },
    {
      image: require("./assets/screen2.png"),
      title: "Fast & Easy Booking",
      text: "Book your flight in just a few taps. Quick and secure process.",
    },
    {
      image: require("./assets/screen3.png"),
      title: "Comfort Guaranteed",
      text: "Enjoy your travel with premium seats and great service.",
    },
    {
      image: require("./assets/screen4.png"),
      title: "Ready to Fly?",
      text: "Start your journey today and explore the world with us.",
    }
  ];

  const scrollToNext = () => {
    if (page < pages.length - 1) {
      setPage(page + 1);
    } else {
      alert("Onboarding аяқталды ✅");
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Top Skip */}
      <TouchableOpacity style={styles.skipBtn} onPress={() => alert("Өткен ✅")}>
        <Text style={styles.skipText}>Skip</Text>
      </TouchableOpacity>

      {/* Pages */}
      <ScrollView
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={(e) => {
          const pageIndex = Math.round(
            e.nativeEvent.contentOffset.x / e.nativeEvent.layoutMeasurement.width
          );
          setPage(pageIndex);
        }}
        scrollEventThrottle={16}
      >
        {pages.map((p, i) => (
          <View key={i} style={styles.page}>
            <Image source={p.image} style={styles.image} />
            <Text style={styles.title}>{p.title}</Text>
            <Text style={styles.text}>{p.text}</Text>
          </View>
        ))}
      </ScrollView>

      {/* Dots */}
      <View style={styles.dotContainer}>
        {pages.map((_, i) => (
          <View key={i} style={[styles.dot, page === i && styles.activeDot]} />
        ))}
      </View>

      {/* Next/Done Button */}
      <TouchableOpacity style={styles.nextBtn} onPress={scrollToNext}>
        <Text style={styles.nextText}>{page === pages.length - 1 ? "Done" : "Next"}</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: "center", backgroundColor: "#fff" },
  skipBtn: { alignSelf: "flex-end", margin: 15 },
  skipText: { fontSize: 16, color: "#555" },
  page: { width: 330, alignItems: "center", paddingTop: 20 },
  image: { width: 300, height: 230, borderRadius: 12, marginBottom: 20 },
  title: { fontSize: 22, fontWeight: "bold", marginBottom: 10, textAlign: "center" },
  text: { fontSize: 15, color: "#555", textAlign: "center", paddingHorizontal: 20 },
  dotContainer: { flexDirection: "row", marginTop: 10 },
  dot: { width: 8, height: 8, borderRadius: 4, margin: 4, backgroundColor: "#bbb" },
  activeDot: { backgroundColor: "#000" },
  nextBtn: { marginTop: 15, backgroundColor: "#000", paddingVertical: 10, paddingHorizontal: 40, borderRadius: 10 },
  nextText: { color: "#fff", fontSize: 16, fontWeight: "bold" },
});
