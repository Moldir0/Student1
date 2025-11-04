import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, Pressable, Image } from 'react-native';

export default function App() {
  const [expanded, setExpanded] = useState(false);

  return (
    <ScrollView style={styles.container}>

      <Text style={styles.header}>5 книжных новинок октября</Text>
      <View style={styles.topBlock}>
        <Text style={styles.title}>
          «Кадиш.com» Натан Ингландер.{"\n"}Издательство «Книжники»
        </Text>
      </View>

      <View style={styles.bottomBlock}>
        <Text style={styles.text}>
          Ироничная новелла Натана Ингландера, две личные истории культовой Патти Смит,
          репортаж британской журналистки о будущем человечества, дебютный роман Оушена Вуонга 
          и журналистское расследование о создании «Моссада». В нашей подборке рассказываем 
          о пяти захватывающих книжных новинках, которые достойны того, чтобы появиться на ваших полках.
        </Text>

        {!expanded && (
          <Pressable onPress={() => setExpanded(true)}>
            <Text style={styles.readMore}>Читать далее</Text>
          </Pressable>
        )}

        {expanded && (
          <Text style={styles.moreText}>
            Полный обзор каждой книги будет доступен далее. Каждая история раскрывает 
            разные аспекты человеческих эмоций, социальных изменений и личностного роста.
            Продолжение текста появляется здесь полностью.
          </Text>
        )}
      </View>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    textAlign: "center",
    fontSize: 22,
    fontWeight: "bold",
    marginTop: 80,
    marginBottom: 20,
  },
  img: {
    width: "100%",
    height: 230,
    marginBottom: 20,
  },
  topBlock: {
    backgroundColor: "#d9d9d9",
    padding: 25,
    justifyContent: "center",
    alignItems: "center",
    minHeight: 140,
  },
  bottomBlock: {
    backgroundColor: "#a6a6a6",
    padding: 20,
    minHeight: 250,
  },
  title: {
    textAlign: "center",
    fontWeight: "600",
    fontSize: 18,
    color: "#000",
  },
  text: {
    textAlign: "center",
    fontSize: 14,
    color: "#000",
    lineHeight: 20,
  },
  readMore: {
    textAlign: "center",
    color: "#0044cc",
    marginTop: 10,
    fontWeight: "bold",
  },
  moreText: {
    marginTop: 10,
    fontSize: 14,
    textAlign: "center",
    color: "#000"
  }
});
