import React from "react";
import { View, StyleSheet, Button, Image } from "react-native";
import { useRouter, useLocalSearchParams } from 'expo-router';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function FoodDetails() {
  const { name, desc, price, image } = useLocalSearchParams();
  const router = useRouter();

  return (
    <ThemedView style={styles.container}>
      <Image source={{ uri: image }} style={styles.image} />

      <ThemedView style={styles.infoContainer}>
        <ThemedText style={styles.name}>{name}</ThemedText>
        <ThemedText style={styles.description}>{desc}</ThemedText>
        <ThemedText style={styles.price}>${price}</ThemedText>
      </ThemedView>

      <View style={styles.buttonContainer}>
        <Button title="Back to Menu" onPress={() => router.push("/MenuScreen")} />
      </View>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  image: {
    width: '100%',
    height: 250,
    borderRadius: 15,
    marginBottom: 20,
  },
  infoContainer: {
    backgroundColor: '#f9f9f9',
    padding: 15,
    borderRadius: 10,
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    color: '#666',
    marginBottom: 10,
    lineHeight: 22,
  },
  price: {
    fontSize: 20,
    color: '#27ae60',
    fontWeight: '600',
  },
  buttonContainer: {
    marginTop: 30,
  },
});
