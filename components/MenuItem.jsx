import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Button } from 'react-native';

export default function MenuItem({item, onFav}){
    const {FoodName, FoodDes, FoodPrice, isFav} = item;
    return(
        <View style={styles.widget}>
            <View style={styles.Container}>
                <Text style={styles.name}>{FoodName}</Text>
                <Text style={styles.desc}>{FoodDes}</Text>
                <Text style={styles.price}>{FoodPrice}</Text>
                <TouchableOpacity
                    onPress={() => onFav(item.id)}
                    style={styles.favoriteButton}
                    accessibilityLabel={isFavorite ? 'Remove from favorites' : 'Add to favorites'}
                >
                 <MaterialIcons
                    name={isFavorite ? 'favorite' : 'favorite-border'}
                    size={24}
                    color={isFavorite ? 'red' : 'gray'}
                />
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles =StyleSheet.create({
    widget : {
        flexDirection : 'row',
        backgroundColor : 'gray',
        borderRadius: '10px',
        padding : 12,
        elevation : 8,
        shadowColor : '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.2,
        shadowRadius: 1.5,
        alignItems: 'center',
    },
    Container : {
        flex : 1,
        paddingRight : 12,
    },
    name: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 4,
      },
      price: {
        fontSize: 16,
        color: '#2e7d32', // greenish color for price
        marginBottom: 4,
      },
      desc: {
        fontSize: 14,
        color: '#555',
      },
      favoriteButton: {
        padding: 8,
      },
})