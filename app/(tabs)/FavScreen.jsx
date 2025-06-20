import React  from "react";
import { View, FlatList, Text, Button, StyleSheet, Image } from 'react-native';
import {useFoodStore} from "../../components/FoodStore"

export default function FavScreen(){
    const { savedFood, removeFood} = useFoodStore();
    const renderItem = ({item}) =>{
        const {
        name,
        desc,
        price,
    } = item || {};
    }
    return (
        <View style={styles.container}>
          {savedFood.length === 0 ? (
            <Text style={styles.empty}>Your library is empty. Add books from the Home screen.</Text>
          ) : (
            <FlatList
              data={savedFood}
              keyExtractor={(item) => item.id}
              renderItem={renderItem}
              contentContainerStyle={styles.listContainer}
              numColumns={3}
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
  empty: {
    textAlign: 'center',
    marginTop: 50,
    fontSize: 16,
    color: '#888',
  },
  listContainer: {
    paddingBottom: 100,
    gap: 12,
  },
  itemCard: {
    backgroundColor: '#f9f9f9',
    borderRadius: 12,
    padding: 12,
    margin: 8,
    flex: 1,
    alignItems: 'center',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  name: {
    fontSize: 16,
    color: '#27ae60',
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 4,
  },
  desc: {
    fontSize: 13,
    color: '#000',
    textAlign: 'center',
    marginBottom: 4,
  },
  price: {
    fontSize: 15,
    color: '#27ae60',
    fontWeight: '600',
  },
  removeButton: {
    marginTop: 10,
    paddingVertical: 6,
    paddingHorizontal: 12,
    backgroundColor: '#ff6b6b',
    borderRadius: 6,
  },
  removeText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
