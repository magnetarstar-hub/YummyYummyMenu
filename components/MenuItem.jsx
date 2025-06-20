import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { router } from 'expo-router';
import { MaterialIcons } from '@expo/vector-icons';

export default function MenuItem({ item, onFav }) {
  const { FoodName, FoodDes, FoodPrice, isFav } = item;

  return (
    <View style={styles.widget}>
      <View style={styles.Container}>
        <Text style={styles.name}>{FoodName}</Text>
        <Text style={styles.price}>${FoodPrice}</Text>

        <TouchableOpacity
          onPress={() => onFav(item.id)}
          style={styles.favoriteButton}
          accessibilityLabel={isFav ? 'Remove from favorites' : 'Add to favorites'}
        >
          <MaterialIcons
            name={isFav ? 'favorite' : 'favorite-border'}
            size={24}
            color={isFav ? 'red' : 'gray'}
          />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() =>
            router.push({
              pathname: '/FoodDetailsScreen',
              params: {
                name: FoodName,
                desc: FoodDes,
                price: FoodPrice,
              },
            })
          }
          style={styles.favoriteButton}
          accessibilityLabel="Go to details"
        >
          <Text style={{ color: '#007AFF' }}>View Details</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  widget: {
    flexDirection: 'column',
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 12,
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    margin: 8,
  },
  Container: {
    flex: 1,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  price: {
    fontSize: 16,
    color: '#2e7d32',
    marginBottom: 4,
  },
  favoriteButton: {
    padding: 6,
    marginTop: 4,
  },
});
