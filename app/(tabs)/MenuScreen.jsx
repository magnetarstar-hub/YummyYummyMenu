import React, { useEffect, useState } from 'react';
import { View, FlatList, StyleSheet, TextInput, Button } from 'react-native';
import MenuItem from '../../components/MenuItem';
import foodList from '../../components/foodlist.json';
import { useFoodStore } from '../../components/FoodStore';

export default function MenuScreen() {
  const [query, setQuery] = useState('');
  const { savedFood } = useFoodStore();

  useEffect(() => {
    // your effect here if needed
  }, []);

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Search Food..."
        value={query}
        onChangeText={setQuery}
        style={styles.input}
      />
      <Button title="Search" onPress={() => {/* your search handler here */}} />
      <FlatList
        data={foodList}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <MenuItem item={item} />}
        contentContainerStyle={styles.listContainer}
        numColumns={3}
      />
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
    borderRadius: 8,
    marginBottom: 12,
    fontSize: 16,
  },
  listContainer: {
    paddingBottom: 16,
    gap: 12,
  },
});
