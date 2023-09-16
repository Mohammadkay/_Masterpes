import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { COLORS } from '../../constants/'
import MyPostIcIconon from 'react-native-vector-icons/MaterialCommunityIcons'
import NewPostIcon from 'react-native-vector-icons/Feather'
import LogoutIcon from 'react-native-vector-icons/AntDesign'
import Settings from 'react-native-vector-icons/AntDesign'
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { UserInfoContext } from '../../context/UserInfo';
import { useContext } from 'react';


export default function User() {
    const { userInfo, setUserInfo, fetchUserInfo } = useContext(UserInfoContext);
    const navigation = useNavigation();

    const handleLogout = async () => {
        try {
            await AsyncStorage.removeItem("userInfo");

            setUserInfo(null)

            fetchUserInfo()

            navigation.navigate('Home');
        } catch (error) {
            // console.error('Error logging out:', error);
        }
    }


    return (
        <View>
            <View style={styles.container}>
                <Image
                    style={styles.imageProfile}
                    source={require('../../assets/images/profile.png')}
                    resizeMode='contain'
                />
                <Text style={styles.name}>{userInfo.username}</Text>
                <Text style={styles.email}>{userInfo.email}</Text>
            </View>

            <View style={styles.contanierList}>
                <TouchableOpacity style={styles.list}
                    onPress={() => navigation.navigate('MyPost')}>
                    <MyPostIcIconon name="post" size={22} />
                    <Text style={styles.title}>My Posts</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.list}
                    onPress={() => navigation.navigate('NewPost')}>
                    <NewPostIcon name="edit" size={22} />
                    <Text style={styles.title}>New Post</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.list}
                    onPress={() => navigation.navigate('Settings')}>
                    <Settings name="setting" size={22} />
                    <Text style={styles.title}>Settings</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.list}>
                    <LogoutIcon name="logout" size={22} />
                    <Text style={styles.title} onPress={handleLogout}>Logout</Text>
                </TouchableOpacity>
            </View>
        </View >
    )
}


const styles = StyleSheet.create({
    container: {
        height: 300,
        backgroundColor: COLORS.nav,
        alignItems: 'center',
        justifyContent: 'center'
    },
    contanierList: {
        padding: 20
    },
    imageProfile: {
        width: 200,
        height: 200,
        marginTop: -50
    },
    name: {
        fontSize: 26,
        fontWeight: '500',
        color: 'white'
    },
    email: {
        fontSize: 20,
        fontWeight: '500',
        color: 'white'
    },
    list: {
        padding: 15,
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
        borderBottomWidth: 0.8,
        borderBottomColor: '#cbcbcb'
    },
    title: {
        fontSize: 16,
        fontWeight: '500'
    }
});


