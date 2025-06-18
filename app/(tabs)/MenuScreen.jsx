import React, { useEffect } from "react";
import { FlatList } from "react-native";
import MenuItem from "../../components/MenuItem"
import foodList from '../../components/foodList.json';
import {useFoodStore} from "../../components/FoodStore"
export default function MenuScreen(){
    const [query, setQuery] = useState('');
    const [results, setResults] = useState([]);
    const { savedFood } = useFoodStore();

    

    const SearchBooks = async () => {
        try {
          const response = await fetch(``);
          const json = await response.json();
          setResults(json.items || []);
        } catch (e) {
          console.error('Search Failed', e);
        }
    };

    useEffect({

    },[])
     return (
        <View style={styles.container}>
          <TextInput
            placeholder="Search Food..."
            value={query}
            onChangeText={setQuery}
            style={styles.input}
          />
          <Button title="Search" onPress={SearchBooks} />
          <FlatList
            data={foodList}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => <MenuItem item={item} onFav={toggleFav} />}
            contentContainerStyle={styles.listContainer}
            numColumns={3}
          />
        </View>
      );
}