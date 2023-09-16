import { useState, useContext, } from 'react';
import { View, TextInput, Text, TouchableOpacity } from 'react-native';
import axios from 'axios';
import { UserInfoContext } from '../../context/UserInfo';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function EditProfile() {
    const [fullName, setFullName] = useState('');
    const [bio, setBio] = useState('');
    const [address, setAddress] = useState('');
    const { userInfo, setUserInfo, fetchUserInfo } = useContext(UserInfoContext);
    const navigation = useNavigation();


    const handleEdit = async () => {
        try {
            const response = await axios.put(`http://10.0.2.2:8000/api/users/${userInfo._id}`, {
                fullName,
                bio,
                address,
            }, {
                headers: {
                    Authorization: "Bearer " + userInfo.token,
                },
            });

            if (response.status === 200 && response.data) {
                const local = JSON.parse(await AsyncStorage.getItem("userInfo"));
                local.username = fullName;

                await AsyncStorage.setItem("userInfo", JSON.stringify(local));

                fetchUserInfo();
                navigation.navigate('User');
            } else {
                console.error('Error updating user data:', response);
            }
        } catch (error) {
            console.error('Error updating user data:', error);
        }
    };

    return (
        <View style={styles.container}>
            <TextInput
                value={fullName}
                onChangeText={text => setFullName(text)}
                placeholder="Full Name"
                style={styles.input}
            />

            <TextInput
                value={bio}
                onChangeText={text => setBio(text)}
                placeholder="bio"
                style={styles.input}
            />

            <TextInput
                value={address}
                onChangeText={text => setAddress(text)}
                placeholder="Address"
                style={styles.input}
            />

            <TouchableOpacity
                style={styles.button}
                onPress={handleEdit}
            >
                <Text style={styles.buttonText}>Confirm</Text>
            </TouchableOpacity>
        </View>
    )
}


const styles = {
    container: {
        padding: 20
    },
    input: {
        height: 60,
        borderColor: '#F6F7F9',
        backgroundColor: '#E4E4E4',
        borderWidth: 1,
        marginBottom: 10,
        paddingHorizontal: 10,
        marginBottom: 15,
        borderRadius: 16
    },
    button: {
        height: 50,
        backgroundColor: '#3B5998',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        color: 'white',
        fontWeight: '400',
        fontSize: 18
    },
}


