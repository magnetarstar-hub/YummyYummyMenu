import React, { useState } from 'react';
import { View, FlatList, StyleSheet, TextInput, Button, Text } from 'react-native';
import MenuItem from '../../components/MenuItem';
import foodList from '../../components/foodlist.json';

export default function MenuScreen() {
  const [query, setQuery] = useState('');
  const [filteredData, setFilteredData] = useState(foodList);

  const SearchFood = () => {
    const searchQuery = query.trim().toLowerCase();

    if (searchQuery === '') {
      setFilteredData(foodList);
      return;
    }

    const results = foodList.filter(item =>
      typeof item.FoodName === 'string' &&
      item.FoodName.toLowerCase().includes(searchQuery)
    );

    setFilteredData(results);
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Search Food..."
        value={query}
        onChangeText={setQuery}
        style={styles.input}
      />
      <Button title="Search" onPress={SearchFood} />

      {filteredData.length === 0 && (
        <Text style={styles.noResult}>No food found.</Text>
      )}

      <FlatList
        data={filteredData}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <MenuItem item={item} />}
        contentContainerStyle={styles.listContainer}
        numColumns={3}
        columnWrapperStyle={styles.row}
        showsVerticalScrollIndicator={false}
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
    paddingBottom: 12,
    gap: 1,
  },
  row: {
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  noResult: {
    textAlign: 'center',
    color: 'gray',
    fontSize: 16,
    marginVertical: 20,
  },
});
