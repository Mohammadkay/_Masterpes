import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, ScrollView, StyleSheet, Image, TouchableOpacity,Button } from 'react-native';
import { useRoute } from '@react-navigation/native';
export default function FilterProduct() {
    const route = useRoute();
    const navigation = useNavigation();
    const id = route.params.category;
    const [products,setProduct]=useState([])
    const getProduct = async () => {
        try {
            const response = await axios.get(`http://10.0.2.2:8000/api/products/byCategory/${id}`);
          
            setProduct(response.data); // Assuming the response contains data
        } catch (error) {
            console.error('Axios error:', error);
        }
    };
    useEffect(()=>{
        getProduct()
    },[])
    const renderItemProduct = ({ item }) => (
        <TouchableOpacity
            style={styles.item}
            onPress={()=>navigation.navigate('ProductDetails', { product: item })} 
        >
            <Image
                style={styles.imageCard}
                source={"../../assets/images/Internal.png"}
            />
            <Text style={styles.card}>{item.name}</Text>
        </TouchableOpacity>
    );
 

    return (
        <View style={styles.container}>
           
            <View>
                <Text style={styles.title}>Development  Car</Text>

               <FlatList
                data={products}
                renderItem={renderItemProduct}
                 keyExtractor={(item) => item.id}
                horizontal={false}  // Set horizontal to false to make it vertical
                 numColumns={2}      // Set numColumns to 2 to display two items side by side
                 contentContainerStyle={styles.flatlistContent}
/>  
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    flatlistContent: {
        paddingHorizontal: 16,
        paddingLeft: 3
    },
    item: {
        backgroundColor: 'white',
        width: 160,
        height: 140,
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 8,
        borderRadius: 32,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 10,
        alignItems: 'center',
    },
    imageCard: {
        width: 70,
        height: 60,
    },
    title: {
        fontSize: 26,
        fontWeight: '700',
        paddingBottom: 10
    },
    card: {
        fontSize: 14,
        padding: 10,
        textAlign: 'center'
    },
    space: {
        height: 250,
    },
});
