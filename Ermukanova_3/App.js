import React, { useState } from 'react';
import { StyleSheet, Text, SafeAreaView, ScrollView, View, Image, Button } from 'react-native';

export default function App() {
  const [page, setPage] = useState(0);

  const images = [
    require("./assets/screen1.png"),
    require("./assets/screen2.png"),
    require("./assets/screen3.png"),
    require("./assets/screen4.png")
  ];

  return (
    <SafeAreaView style={styles.container}>
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
        {images.map((img, i) => (
          <Image key={i} source={img} style={styles.image} />
        ))}
      </ScrollView>

      <View style={styles.dotContainer}>
        {images.map((_, i) => (
          <View key={i} style={[styles.dot, page === i && styles.activeDot]} />
        ))}
      </View>

      <Button title="Брондау" onPress={() => alert("Брондау басталды ✅")} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  image: { width: 330, height: 200, margin: 10, borderRadius: 12 },
  dotContainer: { flexDirection: "row", marginBottom: 10 },
  dot: { width: 8, height: 8, borderRadius: 4, margin: 4, backgroundColor: "#bbb" },
  activeDot: { backgroundColor: "#000" }
});
