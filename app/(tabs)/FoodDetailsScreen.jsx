import React from "react";
import { View, StyleSheet, Button, Image, ActivityIndicator } from "react-native";
import { useRouter, useLocalSearchParams } from 'expo-router';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { useFonts, Montserrat_400Regular, Montserrat_700Bold } from '@expo-google-fonts/montserrat';

export default function FoodDetails() {
  const { name, desc, price, image } = useLocalSearchParams();
  const router = useRouter();

  const [fontsLoaded] = useFonts({
    Montserrat_400Regular,
    Montserrat_700Bold,
  });

  if (!fontsLoaded) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#27ae60" />
      </View>
    );
  }

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
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  
  infoContainer: {
    backgroundColor: '#f9f9f9',
    padding: 50,
    borderRadius: 10,
    elevation: 2,
    justifyContent : "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  name: {
    fontSize: 24,
    fontWeight: '700',
    fontFamily: 'Montserrat_700Bold',
    marginBottom: 10,
    color: '#000',
  },
  description: {
    fontSize: 16,
    color: '#666',
    fontWeight: '700',
    marginBottom: 10,
    lineHeight: 22,
    fontFamily: 'Montserrat_400Regular',
  },
  price: {
    fontSize: 20,
    color: '#27ae60',
    fontWeight: '600',
    fontFamily: 'Montserrat_700Bold',
  },
  buttonContainer: {
    marginTop: 30,
  },
});
