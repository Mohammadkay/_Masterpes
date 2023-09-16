

import React from 'react'
import { Text, View, Image, StyleSheet, TouchableOpacity } from 'react-native'
import { icons } from '../../constants/'
import { useNavigation } from '@react-navigation/native';


export default function Footer() {
    const navigation = useNavigation();

    return (
        <View style={styles.rowContainer}>
            <TouchableOpacity
                style={styles.container}
                onPress={() => navigation.navigate('Home')}
            >
                <Image
                    style={styles.tinyLogo}
                    source={icons.Home}
                />
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.container}
                onPress={() => navigation.navigate('Shop')}
            >
                <Image
                    style={styles.tinyLogo}
                    source={icons.Shop}
                />
            </TouchableOpacity>

 

            <TouchableOpacity
                style={styles.container}
                onPress={() => navigation.navigate('Profile')}
            >
                <Image
                    style={styles.tinyLogo}
                    source={icons.Profile}
                />
            </TouchableOpacity>
        </View>


    )
}



const styles = StyleSheet.create({
    rowContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        gap: 40,
    },
    container: {
        padding: 20,
    },
    tinyLogo: {
        width: 20,
        height: 20,
    },

});
