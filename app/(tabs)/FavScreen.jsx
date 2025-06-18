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
    } = item.volumeInfo || {};
    }
    return (
        <View style={styles.container}>
          {savedBooks.length === 0 ? (
            <Text style={styles.empty}>Your library is empty. Add books from the Home screen.</Text>
          ) : (
            <FlatList
              data={savedBooks}
              keyExtractor={(item) => item.id}
              renderItem={renderItem}
              contentContainerStyle={styles.listContainer}
              numColumns={3}
            />
          )}
        </View>
         );
}