import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native';
import Animated, { FadeIn, ZoomIn, ZoomOut } from 'react-native-reanimated';
import { useFoodStore } from "../../components/FoodStore";

export default function FavScreen() {
  const savedFood = useFoodStore((state) => state.savedFoods);
  const removeFood = useFoodStore((state) => state.removeBook);

  const renderItem = ({ item }) => {
    const { FoodName, FoodDes, FoodPrice, id } = item;

    return (
      <Animated.View
        entering={ZoomIn.duration(300)}
        exiting={ZoomOut.duration(300)}
        style={styles.itemCard}
      >
        <Text style={styles.name}>{FoodName}</Text>
        <Text style={styles.desc}>{FoodDes}</Text>
        <Text style={styles.price}>${FoodPrice}</Text>

        <Pressable style={styles.removeButton} onPress={() => removeFood(id)}>
          <Text style={styles.removeText}>Remove</Text>
        </Pressable>
      </Animated.View>
    );
  };

  return (
    <View style={styles.container}>
      {savedFood.length === 0 ? (
        <Animated.Text entering={FadeIn} style={styles.empty}>
          Your favorites are empty. Add foods from the menu.
        </Animated.Text>
      ) : (
        <FlatList
          data={savedFood}
          keyExtractor={(item) => item.id.toString()}
          renderItem={renderItem}
          contentContainerStyle={styles.listContainer}
          numColumns={2}
          columnWrapperStyle={styles.row}
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
    marginBottom: 6,
  },
  price: {
    fontSize: 16,
    fontWeight: '600',
    color: '#27ae60',
    marginBottom: 10,
  },
  removeButton: {
    backgroundColor: '#e74c3c',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 8,
    marginTop: 6,
  },
  removeText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 14,
  },
});
