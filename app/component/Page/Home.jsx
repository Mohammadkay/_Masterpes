import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, ScrollView, StyleSheet, Image, TouchableOpacity } from 'react-native';

export default function Home({ navigation }) {

    const [products,setProduct]=useState([])
  

  

    const getProduct = async () => {
        try {
            const response = await axios.get('http://10.0.2.2:8000/api/products');
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
                source={{uri:item.image.url}}
            />
            <Text style={styles.card}>{item.name}</Text>
        </TouchableOpacity>
    );
 
 

    return (
        <ScrollView style={styles.container}>
           
            <View style={styles.cardcontainer}>
            <View style={styles.img_container}>
                 <Image
               style={styles.imageHead}
                    source={require('../../assets/images/logoLarge.png')}
                />
</View >
               <FlatList 
                data={products}
                renderItem={renderItemProduct}
                 keyExtractor={(item) => item.id}
                horizontal={false}  // Set horizontal to false to make it vertical
                 numColumns={2}      // Set numColumns to 2 to display two items side by side
                 contentContainerStyle={styles.flatlistContent}
/>  
            </View>
           
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    cardcontainer:{
        paddingBottom:30
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
        shadowColor: '#BD9851',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 10,
        alignItems: 'center',
    },
    img_container:{
        textAlign:"center"
    },
    imageCard: {
        width: 70,
        height: 60,
    },
    imageHead:{
        width: 250,
        height: 150,
        marginLeft:50
    },
    title: {
        fontSize: 26,
        fontWeight: '700',
        paddingBottom: 10,
        textAlign:"center",
        color:"#BD9851"
    },
    card: {
        fontSize: 16,
        padding: 10,
        fontWeight: '700',
        textAlign: 'center',
        color:"#BD9851"
    },
    space: {
        height: 250,
    },
});
