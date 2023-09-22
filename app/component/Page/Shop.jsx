import { View, Text, FlatList, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function Shop() {
    const navigation = useNavigation();
    const [category,setCategory]=useState([])

    useEffect(()=>{
        getCategory();
    },[])
        getCategory=async()=>{
            try{
                const response=await axios.get('http://10.0.2.2:8000/api/categories');
                setCategory(response.data)
                console.log(response.data)
            }
            catch(err){
                console.log(err)
            }
        }
  

    const renderItemshop = ({ item }) => (
        <TouchableOpacity style={styles.item}
            onPress={()=>navigation.navigate('FilterProduct', { category: item._id })} 
            >
            <Image
                style={styles.imageCard}
                source={{uri:item.image.url}}            />
            <Text style={styles.card}>{item.name}</Text>
        </TouchableOpacity >
    );


    return (
        <View style={styles.container}>
                     <View style={styles.img_container}>
                 <Image
               style={styles.imageHead}
                    source={require('../../assets/images/logoLarge.png')}
                />
</View>
            <FlatList
                data={category}
                renderItem={renderItemshop}
                keyExtractor={(item) => item._id}
                numColumns={2}
                contentContainerStyle={styles.flatlistContent}
            />
        </View>
    )
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        alignItems:"center",
        alignContent:"center",
        justifyContent:"center",
        paddingTop:20
    },
    imageHead:{
        width: 250,
        height: 150,
 
    },
    img_container:{
        textAlign:"center"
    },
    imageCard: {
        width: 90,
        height: 70,
    },
    flatlistContent: {
        alignItems: 'center',
        padding:10
    },
    item: {
        backgroundColor: 'white',
        width: 160,
        height: 140,
        padding:30 ,
        
        marginVertical: 25,
        marginHorizontal: 10,
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
 
    card: {
        fontSize: 15,
        padding: 10,
        textAlign: 'center',
        fontWeight:"600",
        color:"#BD9851"
    },   
     title: {
        fontSize: 26,
        fontWeight: '700',
        paddingBottom: 10,
        textAlign:"center",
        color:"#BD9851"
    },
});
