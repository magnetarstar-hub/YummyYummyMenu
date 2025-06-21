import React, { useState } from 'react';
import {
  View,
  FlatList,
  StyleSheet,
  TextInput,
  Text,
  Pressable,
} from 'react-native';
import Animated, { FadeIn, ZoomIn, ZoomOut } from 'react-native-reanimated';
import foodList from '../../components/foodlist.json';
import { useFoodStore } from '../../components/FoodStore';

export default function MenuScreen() {
  const [query, setQuery] = useState('');
  const [filteredData, setFilteredData] = useState(foodList);
  const [expandedItems, setExpandedItems] = useState([]);
  const [likedItems, setLikedItems] = useState([]);

  const addFood = useFoodStore((state) => state.addFood);

  const searchFood = () => {
    const searchQuery = query.trim().toLowerCase();
    if (searchQuery === '') {
      setFilteredData(foodList);
    } else {
      const results = foodList.filter(
        (item) =>
          typeof item.FoodName === 'string' &&
          item.FoodName.toLowerCase().includes(searchQuery)
      );
      setFilteredData(results);
    }
  };

  const toggleExpanded = (id) => {
    setExpandedItems((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    );
  };

  const toggleLike = (item) => {
    const isLiked = likedItems.includes(item.id);
    if (isLiked) {
      setLikedItems((prev) => prev.filter((i) => i !== item.id));
    } else {
      setLikedItems((prev) => [...prev, item.id]);
      addFood(item); 
    }
  };

  const renderItem = ({ item }) => {
    const { FoodName, FoodDes, FoodPrice, id } = item;
    const isExpanded = expandedItems.includes(id);
    const isLiked = likedItems.includes(id);

    return (
      <Animated.View
        entering={ZoomIn.duration(300)}
        exiting={ZoomOut.duration(300)}
        style={styles.itemCard}
      >
        <Text style={styles.name}>{FoodName}</Text>

        <Text style={styles.desc}>
          {isExpanded ? FoodDes : FoodDes.slice(0, 60) + (FoodDes.length > 60 ? '...' : '')}
        </Text>

        {FoodDes.length > 60 && (
          <Pressable onPress={() => toggleExpanded(id)}>
            <Text style={styles.readMore}>{isExpanded ? 'Read Less' : 'Read More'}</Text>
          </Pressable>
        )}

        <Text style={styles.price}>${FoodPrice}</Text>

        <View style={styles.buttonRow}>
          <Pressable style={styles.viewButton} onPress={() => console.log('View more')}>
            <Text style={styles.buttonText}>View More</Text>
          </Pressable>

          <Pressable
            style={[styles.likeButton, isLiked && styles.likedButton]}
            onPress={() => toggleLike(item)}
          >
            <Text style={styles.buttonText}>♥ Like</Text>
          </Pressable>
        </View>
      </Animated.View>
    );
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Search Food..."
        value={query}
        onChangeText={setQuery}
        style={styles.input}
        returnKeyType="search"
        onSubmitEditing={searchFood}
      />

      <Pressable onPress={searchFood} style={styles.searchButton}>
        <Text style={styles.searchButtonText}>Search</Text>
      </Pressable>

      {filteredData.length === 0 ? (
        <Animated.Text entering={FadeIn} style={styles.empty}>
          No food found.
        </Animated.Text>
      ) : (
        <FlatList
          data={filteredData}
          keyExtractor={(item) => item.id.toString()}
          renderItem={renderItem}
          contentContainerStyle={styles.listContainer}
          numColumns={2}
          columnWrapperStyle={styles.row}
          showsVerticalScrollIndicator={false}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  input: {
    borderColor: '#ccc',
    borderWidth: 1,
    padding: 12,
    borderRadius: 12,
    marginBottom: 10,
    fontSize: 16,
    backgroundColor: '#f5f5f5',
  },
  searchButton: {
    backgroundColor: '#27ae60',
    paddingVertical: 10,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 16,
  },
  searchButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  empty: {
    textAlign: 'center',
    marginTop: 60,
    fontSize: 16,
    color: '#999',
  },
  listContainer: {
    paddingBottom: 100,
    gap: 12,
  },
  row: {
    justifyContent: 'space-between',
  },
  itemCard: {
    flex: 1,
    backgroundColor: '#ffffff',
    borderRadius: 16,
    padding: 16,
    margin: 8,
    alignItems: 'center',
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 4,
  },
  name: {
    fontSize: 18,
    fontWeight: '700',
    color: '#2c3e50',
    textAlign: 'center',
    marginBottom: 4,
  },
  desc: {
    fontSize: 14,
    color: '#7f8c8d',
    textAlign: 'center',
  },
  readMore: {
    color: '#2980b9',
    fontSize: 13,
    marginTop: 4,
    marginBottom: 8,
    textAlign: 'center',
  },
  price: {
    fontSize: 16,
    fontWeight: '600',
    color: '#27ae60',
    marginTop: 6,
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 8,
    marginTop: 10,
  },
  viewButton: {
    backgroundColor: '#2980b9',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 8,
    flex: 1,
    alignItems: 'center',
  },
  likeButton: {
    backgroundColor: '#e67e22',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 8,
    flex: 1,
    alignItems: 'center',
  },
  likedButton: {
    backgroundColor: '#c0392b',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 14,
  },
});