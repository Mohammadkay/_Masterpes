import { useNavigation } from '@react-navigation/native';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'
import AccountIcon from 'react-native-vector-icons/MaterialCommunityIcons'

export default function Settings() {
    const navigation = useNavigation();


    return (
        <View style={styles.container}>
            <View style={styles.icon}>
                <AccountIcon name="account-cog-outline" size={50} />
                <Text style={styles.title}>Account</Text>
            </View>

            <View>
                <TouchableOpacity
                    onPress={() => navigation.navigate('ChangePassword')}>
                    <Text style={styles.subTitle}>Change Password</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => navigation.navigate('EditProfile')}>
                    <Text style={styles.subTitle}>Edit Profile </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}



const styles = StyleSheet.create({
    container: {
        padding: 20,
    },
    icon: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 20,
        marginBottom: 30.
    },
    title: {
        fontSize: 22,
        fontWeight: '700',
    },
    subTitle: {
        fontSize: 18,
        fontWeight: '500',
        borderBottomWidth: 1,
        padding: 20
    }
});

